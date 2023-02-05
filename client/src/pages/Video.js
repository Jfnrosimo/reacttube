//Import UI
import styled from "styled-components";
import {
  MdOutlineThumbUpOffAlt,
  MdOutlineThumbDownOffAlt,
} from "react-icons/md";
import { RiPlayListAddLine, RiShareForwardLine } from "react-icons/ri";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Views = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 7px;
`;

const CreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreatorName = styled.span``;

const CreatorCounter = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 0.8rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text};
`;

const Subscribe = styled.button`
  height: 30px;
  background-color: #ca0008;
  border: none;
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="530"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Vid</Title>
        <Details>
          <Views>505,123 views &#x2022; 1 day ago</Views>
          <Buttons>
            <Button>
              <MdOutlineThumbUpOffAlt size={20} /> 123
            </Button>
            <Button>
              <MdOutlineThumbDownOffAlt size={20} /> Dislike
            </Button>
            <Button>
              <RiShareForwardLine size={20} /> Share
            </Button>
            <Button>
              <RiPlayListAddLine size={20} /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://res.cloudinary.com/dcmmsky2x/image/upload/c_thumb,w_200,g_face/v1675133469/samples/bike.jpg" />
            <CreatorContainer>
              <CreatorName>Jeppe</CreatorName>
              <CreatorCounter>125k subscribers</CreatorCounter>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt voluptate facilis voluptatem, eligendi voluptas
                molestias.
              </Description>
            </CreatorContainer>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
      </Content>
      <Recommendation>Recommendationsssss</Recommendation>
    </Container>
  );
};

export default Video;
