import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function getUser(){
  // await apiFetch("profile", {method:"get"}) el metodo aqui ya no va xq se declara en apifetch con algunas condicionales
  const {_token, ...user} = await apiFetch("profile")
  return user;
}

export async function createUser(newUser){
  const {token, ...user} = await apiFetch("signup", {
    body: newUser,
    method:"post" //este metodo no esn ecesario por que ne validaciones en  apifetch se le declara 
    //si encuentra body o no
  })
  sessionStorage.setItem(tokenKey, token)
  return user;
}

export async function updateUser(data){
  const {_token, ...user} = await apiFetch("profile",{
    body: data,
    method:"PATCH"
  })
  return user;
}

export async function deleteUser(){
  await apiFetch("profie",{
    method:"DELETE"
  })
  sessionStorage.removeItem(tokenKey);
}