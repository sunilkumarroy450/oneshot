import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Stack,
  Input,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
const Signup = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handeOnClickSignupForm = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/user/register`, {
      username: formValue.username,
      email: formValue.email,
      password: formValue.password,
    });
  };
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <>
      <Box w={"100%"}>
        <Box margin={"auto"} w={"40%"}>
          <FormControl
            borderRadius={".2rem"}
            padding={".5rem"}
            border={"1px solid "}
            isRequired
          >
            <Stack spacing={5}>
              <FormLabel>Username</FormLabel>
              <Input
                onChange={handleOnChange}
                size="lg"
                placeholder="Username"
                name="username"
                value={formValue.username}
              />
              <FormLabel>Email</FormLabel>
              <Input
                onChange={handleOnChange}
                size="lg"
                placeholder="Email"
                name="email"
                value={formValue.email}
              />
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleOnChange}
                size="lg"
                placeholder="Password"
                name="password"
                value={formValue.password}
              />

              <ButtonGroup>
                <Button onClick={handeOnClickSignupForm} bg={"green.500"}>
                  Sign Up
                </Button>
              </ButtonGroup>
            </Stack>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
