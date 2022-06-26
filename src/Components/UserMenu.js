import styled from "styled-components";

const UserMenu = () => {
    return (
        <Body>
            <Top>
                <Main>LOSHELL LIMITED</Main>
            </Top>
            <Bottom>
            <ul>
                <Item>PRODUCTS</Item>
                <Item>ORDER</Item>
                <Item>SERVICES</Item>
                <Item>CONTACT</Item>
            </ul>
            </Bottom>
        </Body>
    )
}

const Body = styled.aside`
  display: flex;
  //border: 1px solid greenyellow;
  height: 92vh;
  width: 16vw;
  flex-direction: column;
  background-color: cornflowerblue;
  align-items: center;
  //justify-content: space-evenly;
`

const Item = styled.li`
  list-style: none;
  font-size: 2rem;
  margin: 80px 0;
  color: red;
`

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 10%;
  //border: 1px solid yellow;
`

const Bottom = styled.div`
    flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`

const Main = styled.h3`
  font-size: 1.6rem;
  font-weight: bolder;
`
export default UserMenu;