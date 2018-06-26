import React from "react";
import {Modal, Tooltip, Button, OverlayTrigger, Popover, FormControl, Form, FormGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { start } from "repl";
import "./Login.css";



class Login extends React.Component{
constructor(props, context) {
  super(props, context);

  this.handleShow = this.handleShow.bind(this);
  this.handleClose = this.handleClose.bind(this);

  this.state = {
    show: false
  };
}

handleClose() {
  this.setState({ show: false });
}

handleShow() {
  this.setState({ show: true });
}

FormGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      {/* <ControlLabel>{label}</ControlLabel> */}
      <FormControl {...props} />
      {/* {help && <HelpBlock>{help}</HelpBlock>} */}
    </FormGroup>
  );
}



render() {

  const formInstance = (
    <form>
     
      <FormGroup
        id="formControlsEmail"
        type="email"
        label="Email address"
        placeholder="Enter email"
      />
      <FormGroup id="formControlsPassword" label="Password" type="password" />
      <FormGroup
        id="formControlsFile"
        type="file"
        label="File"
        help="Example block-level help text here."
      />
      </form>
  )

// const popover = (
//   <Popover id="modal-popover" title="popover">
//     very popover. such engagement
//   </Popover>
// );
// const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

return (
  <div>
    

    <p  onClick={this.handleShow}>
Login
    </p>

    <Modal show={this.state.show} onHide={this.handleClose}>
    <p>Log in</p>
      <Modal.Header closeButton>
       
      </Modal.Header>
      <Modal.Body>

     
       
        
        
       

       

        <hr />

       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  </div>

  
);
}
}




export default Login;