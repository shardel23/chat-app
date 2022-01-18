import { Container } from "@chakra-ui/react";
import React from "react";
import Message from "./Message";

type Props = {
  messages: Array<string>;
};

function Chatbox(props: Props) {
  return (
    <Container mt="16px" border="solid 1px" borderRadius="4px" h="500px">
      {props.messages.map((message) => (
        <Message key={message} content={message} />
      ))}
    </Container>
  );
}

export default Chatbox;
