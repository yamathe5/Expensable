import styled from "@emotion/styled";
import { colors } from "./styles";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CategoriesPage from "./pages/categories-page.js";
import AuthenticatedApp from "../src/AuthenticatedApp"
import UnauthenticatedApp from "./UnauthenticatedApp.js"
import { useAuth } from "./context/auth-context";
// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 240px 1fr;
//   background-color: ${colors.gray[50]};
//   height: 100vh;
// `;

// const MainContainer = styled.main`
//   padding: 1.5rem 2rem;
// `;

function App() {
  const {user} = useAuth()
  return ( user? <AuthenticatedApp/> : <UnauthenticatedApp/>);
}

export default App;
