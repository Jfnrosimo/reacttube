import styled from "styled-components";

import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
`;

const Input = styled.input`
  width: 90%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://res.cloudinary.com/dcmmsky2x/image/upload/c_thumb,w_200,g_face/v1675133469/samples/bike.jpg"></Avatar>
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
