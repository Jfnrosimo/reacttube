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

//Import routing
import { Link } from "react-router-dom";

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
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
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
  background-color: ${({ theme }) => theme.bgLighter};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  align-self: flex-start;
  padding: 3px 8px;
  cursor: pointer;
`;

const H2 = styled.h2`
  font-size: 0.8rem;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 8px;
`;

const Menu = ({ isDark, setIsDark }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} />
            ReactTube
          </Logo>
        </Link>
        <Item>
          <AiFillHome size={17} />
          Home
        </Item>
        <Link to="/trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <MdOutlineExplore size={17} />
            Explore
          </Item>
        </Link>
        <Link
          to="/subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <MdOutlineSubscriptions size={17} />
            Subscriptions
          </Item>
        </Link>
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
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button>
              <CgProfile /> SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <H2>Best of ReactTube</H2>
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
        <Item onClick={() => setIsDark(!isDark)}>
          <MdOutlineLightMode size={17} />
          {isDark ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
