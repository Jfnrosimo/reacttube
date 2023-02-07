import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

//Import UI
import styled from "styled-components";

//Import components
import VideoCard from "../components/VideoCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/videos/${type}`);
        setVideos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <VideoCard key={video._id} />
      ))}
    </Container>
  );
};

export default Home;
