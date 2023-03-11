import React from "react";
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
} from "@chakra-ui/react";
const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w={"100%"}>
      <Box  margin={'2rem'} w={"80%"}>
        <ButtonGroup variant={'outline'} colorScheme={'linkedin'} >
          <Button  onClick={onOpen}>
            Create Post
          </Button>
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
            {/* <Lorem count={2} /> */}
            <Input h={"10rem"} />
          </ModalBody>

          <ModalFooter>
            <Button variant={'outline'} colorScheme="teal" mr={3} onClick={onClose}>
              Post
            </Button>
            <Button variant={'unstyled'} >Comment</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreatePost;
