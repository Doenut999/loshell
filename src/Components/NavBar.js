import styled from "styled-components";

const NavBar = () => {
    return (
        <Nav>
            <Burger src="/assets/Burger.svg" alt="menu"/>
            <Logo>LOSHELL LIMITED</Logo>
            <div>
                <Tag src="/assets/A-name.svg" alt="first name first letter"/>
            </div>
        </Nav>
    )
}

const Nav = styled.nav`
  height: 8vh;
  display: flex;
  align-items: center;
  background-color: cornflowerblue;
  padding: 20px;
  z-index: 10;
  position: sticky;
  top: 0;
  width: 100%;
  justify-content: center;
  border: 1px solid cornflowerblue;
`

const Tag = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  right: 80px;
  border: 0.1px solid white;
  border-radius: 50%;
  cursor: pointer;
  top: 2vh;
  

`

const Logo = styled.h1`
  font-weight: 600;
  color: white;
`

const Burger = styled.img`
  position: absolute;
  left: 60px;
  top: 20px;
  width: 42px;
  height: 42px;
  cursor: pointer;
`

//TODO: apply media queries
export default NavBar