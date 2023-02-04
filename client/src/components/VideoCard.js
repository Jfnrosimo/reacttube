import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 260px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 170px;
  background-color: #999;
  border-radius: 15px;
`;

const Details = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 10px;
`;

const ImgProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const Creator = styled.p`
  margin: 6px 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;

const Views = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
`;

const VideoCard = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://res.cloudinary.com/dcmmsky2x/image/upload/v1675133467/samples/sheep.jpg" />
        <Details>
          <ImgProfile src="https://res.cloudinary.com/dcmmsky2x/image/upload/c_thumb,w_200,g_face/v1675133469/samples/bike.jpg" />
          <Description>
            <Title>A day in the life of a sheep</Title>
            <Creator>Jeppee</Creator>
            <Views>505,123 views &#x2022; 1 day ago</Views>
          </Description>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoCard;
