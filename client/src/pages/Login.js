import { useState } from "react";
import axios from "axios";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 45px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  padding: 15px 40px;
  border: 1px solid ${({ theme }) => theme.soft};
`;

const Title = styled.h2`
  margin: 5px 0px;
  background-color: transparent;
`;

const SubText = styled.h3`
  margin: 5px 0px;
  background-color: transparent;
`;

const Input = styled.input`
  margin: 5px 0px;
  padding-left: 5px;
  background-color: transparent;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin: 5px 0px;
  width: 40%;
  align-self: center;
  padding: 5px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLighter};
  border: none;
  cursor: pointer;
`;

const More = styled.div`
  display: flex;
  gap: 110px;
  font-size: 0.7rem;
`;

const Links = styled.div``;

const Link = styled.span`
  margin: 0px 3px;
`;

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/signin", {
        name,
        password,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubText>to continue to ReactTube</SubText>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <SubText>Or</SubText>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        <Link>English(USA)</Link>
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Login;
