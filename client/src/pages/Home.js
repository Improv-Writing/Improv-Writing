import React from "react";
import Gifbackground from "../components/Gifbackground";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


const Home = () => (
  <div>
    <Gifbackground backgroundImage="https://media.giphy.com/media/26ybvWvSByu3M6pzO/giphy.gif" >
      <h1>Gifstories</h1>
    </Gifbackground>
    <Container style={{ marginBottom: 10, }}>
      <Row style= {{justifyContent: 'center',}}>
        <Col size="md-10">
          <h2 style= {{fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 35, textShadow: "2px 2px 6px black",}}> Instructions: </h2>
          <p style={{fontFamily: "Gloria Hallelujah, cursive", fontSize: 20,}}>
            This application was developed to help build your creative writing skills, and to help you
            use your imagination. Instead of using written prompts, you'll be using giphy images to help you visualize what you are writing.
            <ul style= {{marginTop: 10,}}>
              <li>To start, click on the 'Write' tab at the top of the page.</li>
              <li>Search for an image. If you need ideas on where to start, there is a random image of the day in the sidebar. </li> 
              <li>Begin writing your story in the input box below the picture, and when you are done click 'Submit'! </li>
              </ul>
            You can save your stories to your profile for later, and you can share them with other users! 
            The storyshare tab is where you can also find stories written by other writers just like you! Happy writing!
          </p>
        </Col>
        
      </Row>
    </Container>
  </div>
);

export default Home;