"use client";
import React, { useEffect } from "react";

const Bootstrapclient = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);

  return null;
};

export default Bootstrapclient;
