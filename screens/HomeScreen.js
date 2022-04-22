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
          uri: "/Users/kimsangmin/Documents/climbers-test/climbers-test/video/IMG_9019_AdobeCreativeCloudExpress.mp4",
        }} // Can be a URL or a local file.
      />
    </Container>
  );
};

export default HomeScreen;
