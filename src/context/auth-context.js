import { navigate } from "@storybook/addon-links";
import React from "react";
import * as services from "../services/sessions-services";
import { getUser } from "../services/user-services";
import { useNavigate } from "react-router-dom";
import { tokenKey } from "../config";

const AuthContext = React.createContext();

function AuthProvider({children}){
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const navigate = useNavigate();

  React.useEffect(()=>{
    getUser()
      .then((u) => {
        setUser(u)
        setLoading(false)
        console.log("xd")
      })
      .catch((error)=>{setLoading(false)})
  },[setUser])

  function login (credentials) {
    return services.login(credentials)
    .then((u)=>{
      setUser(u)
      console.log("asd")
      navigate("/categories")
    })
  }

  function logout(){
    services.logout().finally(()=>{
      setUser(null)
      navigate("/")
    })
  }

  if (loading) return <p>Loading</p>

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

export {AuthProvider, useAuth}
// export default function AuthProvider(){
//   return <h1>asd</h1>
// }