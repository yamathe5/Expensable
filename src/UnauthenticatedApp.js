import LoginPage from "./pages/login-page"
import styled from "@emotion/styled";

import { Navigate, Route, Routes } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: green;
  height: 100vh;
  width: 100vw;
`;


export default function UnauthenticatedApp(){
  
  
  return (
    <>
      <Container>
        {/* <Routes> */}
          {/* <Route index element={<Navigate to="login" />} /> */}
          <LoginPage />
          {/* <Route path="/create" element={<h1>Transactions</h1>} /> */}
          {/* <Route path="*" element={<Navigate to="login" />} /> */}
        {/* </Routes> */}
      </Container>
    </>
  )


}