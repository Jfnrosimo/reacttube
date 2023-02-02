//Import UI
import styled from "styled-components";
import logo from "../img/ytlogo.png";
import { AiFillHome } from "react-icons/ai";
import { IoGameControllerOutline, IoNewspaperOutline } from "react-icons/io5";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineLibraryMusic,
  MdSportsBasketball,
  MdOutlineLocalMovies,
  MdLiveTv,
  MdSettings,
  MdOutlinedFlag,
  MdHelpOutline,
  MdOutlineLightMode,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 0.8rem;
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
  padding: 5px 0px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Button = styled.button`
  border: 2px solid #006ee6;
  color: #006ee6;
  background-color: #202020;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  align-self: flex-start;
  padding: 3px 8px;
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
        <Hr />
        <Item>
          <MdOutlineVideoLibrary size={17} />
          Library
        </Item>
        <Item>
          <MdOutlineHistory size={17} />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button>
            <CgProfile /> SIGN IN
          </Button>
        </Login>
        <Hr />
        <Item>
          <MdOutlineLibraryMusic size={17} />
          Music
        </Item>
        <Item>
          <MdSportsBasketball size={17} />
          Sports
        </Item>
        <Item>
          <IoGameControllerOutline size={17} />
          Gaming
        </Item>
        <Item>
          <MdOutlineLocalMovies size={17} />
          Movies
        </Item>
        <Item>
          <IoNewspaperOutline size={17} />
          News
        </Item>
        <Item>
          <MdLiveTv size={17} />
          Live
        </Item>
        <Hr />
        <Item>
          <MdSettings size={17} />
          Settings
        </Item>
        <Item>
          <MdOutlinedFlag size={17} />
          Report
        </Item>
        <Item>
          <MdHelpOutline size={17} />
          Help
        </Item>
        <Item>
          <MdOutlineLightMode size={17} />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
