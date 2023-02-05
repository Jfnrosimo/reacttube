//Import UI
import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 8px 20px 5px 0px;
  background-color: ${({ theme }) => theme.bg};
  height: 45px;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  margin-left: 25%;
  height: 95%;
  display: flex;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding-left: 5px;
  width: 100%;
  height: 100%;
  font-size: 1rem;
`;

const IconContainer = styled.div`
  position: absolute;
  z-index: 999;
  right: 5px;
  cursor: pointer;
`;

const Button = styled.button`
  border: 2px solid #006ee6;
  color: #006ee6;
  background-color: ${({ theme }) => theme.bgLighter};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <InputContainer>
          <Input placeholder="Search" />
          <IconContainer>
            <MdOutlineSearch size={20} />
          </IconContainer>
        </InputContainer>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button>
            <CgProfile /> SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
