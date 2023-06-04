import { Steps, Divider } from "antd";
import React, { useState } from "react";

export const StepperPage = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: any) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const description = "This is a description.";

  const steps = [
    {
      title: "Step 1",
      description,
    },
    {
      title: "Step 2",
      description,
    },
    {
      title: "Step 3",
      description,
    },
  ];

  return (
    <>
      <Steps current={current} onChange={onChange} items={steps} />

      <Divider />

      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={steps}
      />
    </>
  );
};

