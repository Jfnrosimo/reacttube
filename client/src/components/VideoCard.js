import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Import UI
import styled from "styled-components";
import { format } from "timeago.js";

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

const VideoCard = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/users/find/${video.userId}`
        );
        setChannel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />
        <Details type={type}>
          <ImgProfile type={type} src={channel.img} />
          <Description>
            <Title type={type}>{video.title}</Title>
            <Creator type={type}>{channel.name}</Creator>
            <Views type={type}>
              {video.views} views &#x2022; {format(video.createdAt)}
            </Views>
          </Description>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoCard;
