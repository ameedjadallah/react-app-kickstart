import axios, { AxiosError } from "axios";
import { Cookies } from "react-cookie";
import { useEffect } from "react";

const cookies = new Cookies();
axios.defaults.withCredentials = true;

export default function init() {
  function requestClinicInterceptor() {
    return axios.interceptors.request.use((request) => {
      return request;
    });
  }

  function requestUserInterceptor() {
    return axios.interceptors.request.use(
      (request) => {
        const token = cookies.get("auth_timeout");

        if (!token) {
          throw new axios.Cancel(
            `Canceled by user, no token. url: ${request.url}`
          );
        }

        return request;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  function responceErrorInterceptor() {
    return axios.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error instanceof axios.Cancel) {
          console.info("Request canceled by the app");
        } else {
          console.error("Request failed");

        }
        return Promise.reject(error);
      }
    );
  }
  useEffect(() => {
    const userInterceptorId = requestUserInterceptor();
    const clinicInterceptorId = requestClinicInterceptor();
    const responceErrorInterceptorId = responceErrorInterceptor();

    return () => {
      axios.interceptors.request.eject(userInterceptorId);
      axios.interceptors.request.eject(clinicInterceptorId);
      axios.interceptors.response.eject(responceErrorInterceptorId);
    };
  }, []);
}
