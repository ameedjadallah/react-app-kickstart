import React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";

interface LoadingPlaceholderProps extends CircularProgressProps {
  isLoading: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const LoadingPlaceholder = ({
  isLoading,
  children,
  className,
  ...props
}: LoadingPlaceholderProps) => {
  if (!isLoading) {
    return <>{children}</>;
  }
  return (
    <div className={className}>
      <CircularProgress {...props} />
    </div>
  );
};
