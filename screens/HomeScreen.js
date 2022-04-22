import React from "react";
import styled from "styled-components/native";
import Video from "react-native-video";

const Container = styled.View`
  background-color: gray;
`;

const HomeScreen = () => {
  return (
    <Container>
      <Video
        source={{
          uri: "https://www.youtube.com/watch?v=mpSmBuco6I0",
        }} // Can be a URL or a local file.
      />
    </Container>
  );
};

export default HomeScreen;
