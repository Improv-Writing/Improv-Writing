import React from "react";
import Gifbackground from "../components/Gifbackground";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


const Home = () => (
  <div>
    <Gifbackground backgroundImage="https://media.giphy.com/media/26ybvWvSByu3M6pzO/giphy.gif">
      <h1>Gifstories</h1>
    </Gifbackground>
    <Container style={{ marginTop: 30, }}>
      <Row style= {{justifyContent: 'left',}}>
        <Col size="md-10">
          <h2 style= {{fontWeight: "bold",}}> Instructions: </h2>
          <p>
            This application was developed to help build your creative writing skills, and to help you
            use your imagination. Instead of using prompts, this app uses pictures to help you visualize what you are writing.
            <ul style= {{marginTop: 10,}}>
              <li>To start, click on the 'Write' tab at the top of the page.</li>
              <li>Search for an image. If you need ideas on where to start, there is a random image of the day in the sidebar. </li> 
              <li>Begin writing your story in the input box below the picture, and when you are done click 'Submit'! </li>
              </ul>
            You can save your stories to your profile for later, and you can share them with other users! 
            The storyshare tab is where you can also find stories written by other writers! Happy writing!
          </p>
        </Col>
        
      </Row>
    </Container>
  </div>
);

export default Home;