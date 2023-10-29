// src/components/LoginForm.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #4481eb, #04befe);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #04befe;
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  font-family: 'Arial', sans-serif;
  color: #333;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4481eb;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #04befe;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  margin-top: 15px;
  transition: background 0.3s;

  &:hover {
    background: #4481eb;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const SignInButton = styled.button`
  background: transparent;
  color: #04befe;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  margin-top: 10px;

  &:hover {
    text-decoration: none;
  }
`;

const LoginForm = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
        <SignInButton>Don't have an account? Sign up</SignInButton>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;
