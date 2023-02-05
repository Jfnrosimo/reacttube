import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => (props.type === "sm" ? "100%" : "260px")};
  margin-bottom: ${(props) => (props.type === "sm" ? "7px" : "30px")};
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "100px" : "170px")};
  background-color: #999;
  border-radius: ${(props) => (props.type === "sm" ? "5px" : "15px")};
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "sm" ? "0px" : "8px")};
  gap: 10px;
  flex: 1;
`;

const ImgProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  display: ${(props) => (props.type === "sm" ? "none" : "")};
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: ${(props) => (props.type === "sm" ? "0.9rem" : "")};
`;

const Creator = styled.p`
  margin: 6px 0;
  font-size: ${(props) => (props.type === "sm" ? "0.8rem" : "0.9rem")};
  color: ${({ theme }) => theme.text};
`;

const Views = styled.span`
  font-size: ${(props) => (props.type === "sm" ? "0.7rem" : "0.9rem")};
  color: ${({ theme }) => theme.textSoft};
`;

const VideoCard = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://res.cloudinary.com/dcmmsky2x/image/upload/v1675133467/samples/sheep.jpg"
        />
        <Details type={type}>
          <ImgProfile
            type={type}
            src="https://res.cloudinary.com/dcmmsky2x/image/upload/c_thumb,w_200,g_face/v1675133469/samples/bike.jpg"
          />
          <Description>
            <Title type={type}>A day in the life of a sheep</Title>
            <Creator type={type}>Jeppee</Creator>
            <Views type={type}>505,123 views &#x2022; 1 day ago</Views>
          </Description>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoCard;
