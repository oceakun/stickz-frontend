import styled from "styled-components";
import { useState } from "react";

interface Props {}

const Draw = () => {
  return <DrawContainer>draw</DrawContainer>;
};

export default Draw;

const DrawContainer = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px;
`;
