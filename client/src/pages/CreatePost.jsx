import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatIcon, EditIcon } from "@chakra-ui/icons";
import "./style.css";

import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Input,
  Box,
  ButtonGroup,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Tag,
  Avatar,
  TagLabel,
  IconButton,
} from "@chakra-ui/react";
import { LoginContext } from "../contexts/LoginContext";
const CreatePost = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [createPost, setCreatePost] = useState({ body: "" });
  const { userData: user } = useContext(LoginContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getPosts = () => {
    axios
      .get(`http://localhost:8080/post`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  };
  const getComments = () => {
    axios
      .get(`http://localhost:8080/comment`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPosts();
    getComments();
  }, []);

  const handleOnClickPostCreation = () => {
    axios
      .post(`http://localhost:8080/post/create`, {
        body: createPost?.body,
        userId: user?.userData._id,
      })
      .then((res) => {
        onClose();
      })
      .catch((err) => console.log(err));
  };
  // console.log(posts, "posts");
  console.log(comments, "commments");
  return (
    <Box w={"100%"}>
      <Box margin={"2rem"}>
        <Box w={"100%"}>
          <ButtonGroup
            style={{ display: "flex", justifyContent: "space-between" }}
            variant={"outline"}
            colorScheme={"linkedin"}
          >
            <Button onClick={onOpen}>Create Post</Button>
            <Button onClick={() => navigate("/signup")}>Signup</Button>
            <Button onClick={() => navigate("/login")}>Login</Button>
          </ButtonGroup>
        </Box>

        <Modal
          size={"xl"}
          blockScrollOnMount={false}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody h={"5rem"}>
              <Text fontWeight="bold" mb="1rem">
                be the first one to create today's post
              </Text>
              <Input
                onChange={(e) => setCreatePost({ body: e.target.value })}
                name="body"
                value={createPost.body}
                h={"10rem"}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                variant={"outline"}
                colorScheme="teal"
                mr={3}
                onClick={handleOnClickPostCreation}
              >
                Post
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Box margin={"2rem"}>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {posts?.map((item) => (
            <Card key={item._id}>
              <CardHeader>
                <Tag size="lg" colorScheme="blue" borderRadius="full">
                  <Avatar
                    src={item.userId.image}
                    size="xs"
                    name={item.userId.username}
                    ml={-1}
                    mr={2}
                  />
                  <TagLabel>{item.userId.username}</TagLabel>
                </Tag>
                <Heading size="sm"> {item.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{item.body}</Text>
              </CardBody>

              <CardFooter>
                <ButtonGroup>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<EditIcon />}
                  />
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<ChatIcon />}
                  />
                </ButtonGroup>
              </CardFooter>
              {comments?.map((item) => (
                <Box key={item._id} h={"5rem"}>
                  <Tag size="sm" variant="outline" colorScheme="green" borderRadius="sm">
                    <Avatar
                      src={item.userId.image}
                      size="2xs"
                      name={item.userId.username}
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>{item.userId.username}</TagLabel>
                  </Tag>
                  <Box
                    padding={".1rem"}
                    className="commentContainer"
                    margin={"auto"}
                    textAlign={"center"}
                    w={"90%"}
                  >
                    <Text fontSize="2xs" className="commentText">
                      {" "}
                      {item.comment}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default CreatePost;
