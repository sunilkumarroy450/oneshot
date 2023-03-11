import React, { useEffect, useState } from "react";
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
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
const CreatePost = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [createPost, setCreatePost] = useState({ body: "" });
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
    axios.post(`http://localhost:8080/post/create`);
  };

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
            <Button>Login</Button>
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
                onChange={(e) => setCreatePost(e.target.value)}
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
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {posts?.map((item) => (
            <Card key={item._id}>
              <CardHeader>
                <Heading size="sm"> {item.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{item.body}</Text>
              </CardBody>

              <CardFooter>
                <ButtonGroup variant={"outline"} colorScheme={"linkedin"}>
                  <Button>Edit</Button>
                  <Button colorScheme="teal">Comment</Button>

                  {/* <Box>
                    <Popover>
                      <PopoverTrigger>
                        <Button colorScheme="teal">Comment</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>
                          <Input/>
                        </PopoverHeader>
                        <PopoverBody>
                          <Button>Comment</Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Box> */}
                </ButtonGroup>
              </CardFooter>
              {comments?.map((item) => (
                <Box key={item._id} h={"5rem"}>
                  <Box margin={"auto"} textAlign={"center"} w={"90%"}>
                    {item.comment}
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
