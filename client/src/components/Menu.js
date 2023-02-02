//Import UI
import styled from "styled-components";
import logo from "../img/ytlogo.png";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineSubscriptions } from "react-icons/md";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: #f4f4f4;
  font-size: 0.9rem;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 5px 0px;
  cursor: pointer;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} />
          ReactTube
        </Logo>
        <Item>
          <AiFillHome size={17} />
          Home
        </Item>
        <Item>
          <MdOutlineExplore size={17} />
          Explore
        </Item>
        <Item>
          <MdOutlineSubscriptions size={17} />
          Subscriptions
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
