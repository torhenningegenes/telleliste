import React, { Fragment } from "react";
import { useAuth } from "../context/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtecedRoutes = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("login-user");
    }
  }, [router, currentUser]);
  return <Fragment>{currentUser ? children : null}</Fragment>;
};

export default ProtecedRoutes;
