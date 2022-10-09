import React from 'react'
import DummyPage from "./DummyPage";
import { Outlet } from "react-router-dom";


interface Props {}

const OriginalOutletPage = () => {
  return <div>
      <Outlet/>
      <DummyPage/>
  </div>
}

export default OriginalOutletPage