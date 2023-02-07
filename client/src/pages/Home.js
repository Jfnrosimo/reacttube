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

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/videos/random");
        setVideos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <Container>
      {videos.map((video) => (
        <VideoCard />
      ))}
    </Container>
  );
};

export default Home;
