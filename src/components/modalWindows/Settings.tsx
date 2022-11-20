import React from 'react'
import styled from "styled-components";


interface Props {}

const Settings = () => {
    return <SettingsContainer>
      this is the settings modal
  </SettingsContainer>
}

export default Settings

const SettingsContainer = styled.div`
display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  height:90%;
  position:relative;
  box-sizing:border-box;
  flex:none;
  order:0;
  align-self: stretch;
  flex-grow:1;
  background-color: gray;
  opacity:0.6;
`;