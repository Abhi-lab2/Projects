import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signIn } from "../redux/Auth/action";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState("eve.holt@reqres.in");
  const [userPassword, setuserPassword] = useState("cityslicka");

  const authStatus = useSelector((store) => store.authReducer.authStatus);
  console.log(authStatus);

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleUserPassword = (e) => {
    setuserPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userEmail, userPassword);
    dispatch(signIn({ email: userEmail, password: userPassword }));
  };

  useEffect(() => {
    if (location.state && authStatus) {
      // navigate(location.state, { replace: true });
      navigate("/home");
      // console.log('hey');
    }
  }, [location?.state, navigate, authStatus]);

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={submitHandler}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={userEmail}
                    onChange={handleUserEmailChange}
                  />
                </FormControl>
                <FormControl id="password" placeholder="cityslicka" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={userPassword}
                    onChange={handleUserPassword}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};
