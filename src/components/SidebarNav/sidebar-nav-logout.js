import { useAuth } from "../../context/auth-context"
import styled from "@emotion/styled";
// import * as S from "./styles";
import { colors } from "../../styles";


const CustomLink = styled.a`
  cursor: pointer;
  color: ${colors.gray.medium};
  font-weight: 600;
  &:hover {
    color: ${colors.gray.dark};
  }
`;

export default function SidebarNavLogout(){
  const {user, logout} = useAuth()
  return <>
    <p>{user.first_name} {user.last_name}</p>
    <p>{user.email}</p>
    <CustomLink onClick={()=>logout()} type="submit">Logout</CustomLink>
  </>
}