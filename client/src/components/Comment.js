import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.9rem;
`;

const Name = styled.span`
  font-weight: 600;
`;
const Date = styled.span`
  font-size: 0.8rem;
  margin-left: 5px;
  color: ${({ theme }) => theme.textSoft};
`;
const Text = styled.span``;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://res.cloudinary.com/dcmmsky2x/image/upload/c_thumb,w_200,g_face/v1675133469/samples/bike.jpg" />
      <Details>
        <Name>
          Jeppee1 <Date>2 days ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          maxime laboriosam impedit minima voluptatum nihil tempore earum
          recusandae perspiciatis eligendi.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
