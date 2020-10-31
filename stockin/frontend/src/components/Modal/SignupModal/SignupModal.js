import React, { useState } from 'react';
import { Button, Form, Header, Icon, Image, Input, Modal } from 'semantic-ui-react';
import logo from '../../../images/logo.png';
import './SignupModal.css';

const SignupModal = (props) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [next, setNext] = useState(false);

  const signupHandler = () => {
    alert('Sign up succesfully');
    setOpen(false);
  };

  const inputs = next ? (
    <Form size="medium">
      <Form.Input
        fluid
        icon="id card outline"
        iconPosition="left"
        placeholder="Nickname"
        value={nickname}
        onChange={(event) => setNickname(event.target.value)}
      />
    </Form>
  ) : (
    <Form size="medium">
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </Form>
  );

  const nextButton = next ? (
    <Button color="primary" onClick={() => signupHandler()}>
      Sign Up
    </Button>
  ) : (
    <Button color="primary" onClick={() => setNext(true)}>
      Next
    </Button>
  );

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => {
        setNext(false);
        setOpen(true);
      }}
      open={open}
      size="small"
      trigger={props.trigger}
    >
      <Image src={logo} centered className="logo" />

      <Modal.Content>
        <p>Welcome!</p>
        <h2>WELCOME TO STOCKIN!</h2>
        {inputs}
      </Modal.Content>
      <Modal.Actions>{nextButton}</Modal.Actions>
    </Modal>
  );
};

export default SignupModal;
