import styled from "@emotion/styled";
import React from "react";

interface IProps {
  color?: string;
  text: string;
}

export default function HorizontalLineWithText({
  color = "black",
  text,
}: IProps) {
  return (
    <Flex>
      <Line color={color} />
      <Text>{text}</Text>
      <Line color={color} />
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Line = styled.div<{ color: string }>`
  width: 100%;
  border-top: 1px solid ${(props) => props.color};
`;

const Text = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: black;
`;
