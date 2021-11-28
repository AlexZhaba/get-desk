import React, { useState } from "react";
import { Button } from "antd";
import s from "./Counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div className={s.wrapper}>
      {/*<div className={s.minus}>*/}
      <Button type="primary" size="small" shape="circle" style={{
        background: "white", border: "none",
        display: "flex", alignItems: "center", justifyContent: "center"
      }} onClick={() => setCounter(Math.max(0, counter - 1))}>
        <div>
          <span className={s.minus} />
        </div>
      </Button>
      <span className={s.value}>{counter}</span>
      <Button type="primary" size="small" shape="circle" style={{
        background: "white", border: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
      }} onClick={() => setCounter(counter + 1)}>
        <div>
        <span className={s.minus}/>
        <span className={s.plus} />
        </div>
      </Button>
    </div>
  )
};

export default Counter;
