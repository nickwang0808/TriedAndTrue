import styled from "@emotion/styled";
import { IonInput } from "@ionic/react";
import React, { useEffect, useState } from "react";

interface IProps {
  onChange: (...event: any[]) => void;
  value: number;
}

export default function HourMinuteInput({ onChange, value }: IProps) {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);

  const calculateFinalValue = () => {
    // convert it into one value
    let finalValue = 0;
    if (hr !== 0) {
      finalValue = hr * 60;
    }

    if (min !== 0) {
      finalValue += min;
    }

    return finalValue;
  };

  useEffect(() => {
    if (hr + min !== 0) {
      const newValue = calculateFinalValue();
      onChange(newValue);
    } else {
      onChange(0);
    }
  }, [hr, min]);

  useEffect(() => {
    console.log("update total_time");
    if (value <= 60) {
      setMin(value);
    } else {
      const hr = Math.floor(value / 60);
      const min = value % 60;
      setHr(hr);
      setMin(min);
    }
  }, [value]);

  return (
    <StyledWrapper>
      <IonInput
        placeholder="hour"
        color="primary"
        type="number"
        className="hr"
        value={hr}
        onIonChange={({ detail }) => setHr(Number(detail.value))}
      />

      <div>hr</div>
      <IonInput
        placeholder="minutes"
        color="primary"
        type="number"
        className="min"
        value={min}
        onIonChange={({ detail }) => setMin(Number(detail.value))}
      />
      <div>min</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  gap: 8px;

  align-items: center;
  & > div {
    margin-top: 8px;
  }
`;
