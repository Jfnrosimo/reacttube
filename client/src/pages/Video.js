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
`;

const ChannelInfo = styled.div``;
const Image = styled.img``;
const CreatorContainer = styled.div``;
const CreatorName = styled.span``;
const CreatorCounter = styled.span``;
const Description = styled.p``;
const Subscribe = styled.button``;

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
          <ChannelInfo></ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
      </Content>
      <Recommendation>Recommendationsssss</Recommendation>
    </Container>
  );
};

export default Video;
