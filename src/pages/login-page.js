// import login from "../services/sessions-services"

import React from "react";
import { useAuth } from "../context/auth-context.js";
// import { login } from "../services/sessions-services";

export default function LoginPage (){

  const {login} = useAuth();

  function handleSubmit(event){
    event.preventDefault();
    const { email, password } = event.target.elements;
    const credentials = {
      email: email.value,
      password: password.value
    }
    login(credentials).catch((error)=>console.log(error));
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input value="test1@mail.com"  id="email" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input value="123456" id="password" name="password" type="password" />
        </div>
        <button  type="submit">Login</button>
      </form>
    </div>

  )
}