import React, { useState } from "react";
import styles from "./index.module.scss";
import { Button, Typography, CircularProgress } from "@mui/material";
import useStores from "../../hooks/useStores";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { authStore } = useStores();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onLogin = async () => {
    try {
      setIsLoading(true);
      await authStore.login();
      navigate("/home", { replace: true });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.root}>
      <Typography variant="h3" component="h4">
        Login
      </Typography>
      <Button className={styles.btn} onClick={onLogin}>
        {isLoading ? <CircularProgress size={10} /> : "Submit"}
      </Button>
    </div>
  );
};

export default Login;
