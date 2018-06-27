import React from "react";
import { Modal, Tooltip, Button, OverlayTrigger, Popover, FormControl, ControlLabel, HelpBlock, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { start } from "repl";
import "./Login.css";



class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);



    this.state = {
      show: false,
      userNameInput:'',
      passwordInput:''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  // FieldGroup({ id, label, help, ...props }) {
  //   return (
  //     <FormGroup controlId={id}>
  //       <ControlLabel>{label}</ControlLabel>
  //       <FormControl {...props} />
  //       {help && <HelpBlock>{help}</HelpBlock>}
  //     </FormGroup>
  //   );
  // }

  getValidationState() {
    const length = this.state.userNameInput.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleUsernameChange(e) {
    this.setState({ userNameInput: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ passwordInput: e.target.value });
  }

  render() {

    // const formInstance = (
    //   <form>

    //     <FormGroup
    //       id="formControlsEmail"
    //       type="email"
    //       label="Email address"
    //       placeholder="Enter email"
    //     />
    //     <FormGroup id="formControlsPassword" label="Password" type="password" />
    //     <FormGroup
    //       id="formControlsFile"
    //       type="file"
    //       label="File"
    //       help="Example block-level help text here."
    //     />
    //   </form>
    // )

    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );
    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>


        <p onClick={this.handleShow}>
          Login
    </p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          

          <Modal.Body>

            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Username:</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.userNameInput}
                  placeholder="Enter username"
                  onChange={this.handleUsernameChange}
                />
                <ControlLabel>Password:</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.passwordInput}
                  placeholder="Enter password"
                  onChange={this.handlePasswordChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>

              <Button type="submit">Submit</Button>
            </form>
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