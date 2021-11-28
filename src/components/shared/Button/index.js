import React from "react";
import { Button } from "antd";

const ButtonComponent = ({ children }) => {
  return (
    <Button type="primary" size="large">{children}</Button>
  )
};

export default ButtonComponent;
