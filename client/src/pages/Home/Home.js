import React from "react";
import Gifbackground from "../components/Gifbackground";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Home = () => (
  <div>
    <Gifbackground backgroundImage="https://media.giphy.com/media/26ybvWvSByu3M6pzO/giphy.gif">
      <h1>Make Gifstory!</h1>
    </Gifbackground>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-8">
          <p>
            This application was developed to help build your creative writing skills, and to help you
            use your imagination. Choose an image from the search tab at the top of the navbar,
            and then begin writing your story in the box below the picture! You can save your stories to
            your profile for later, and you can share them with other users! The storyshare tab is where
            you can also find stories written by other writers! Happy writing!
          </p>
        </Col>
        <Col size="md-4">
          <p>
            Blah Blah Blah Blah Blah Blah
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;