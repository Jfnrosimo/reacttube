import styled from "styled-components";

const Container = styled.div``;
const NewComment = styled.div``;
const Avatar = styled.img``;
const Input = styled.input``;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://res.cloudinary.com/dcmmsky2x/image/upload/c_thumb,w_200,g_face/v1675133469/samples/bike.jpg"></Avatar>
        <Input placeholder="Add a comment..." />
      </NewComment>
    </Container>
  );
};

export default Comments;
