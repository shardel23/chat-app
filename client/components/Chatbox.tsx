import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../server/socket/types";
import Message from "./Message";

type Props = {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
  messages: Array<string>;
};

function Chatbox(props: Props) {
  const [showTypingIndication, setShowTypingIndication] =
    useState<boolean>(false);

  useEffect(() => {
    console.log(props.socket);
    props.socket?.on("someoneIsTyping", () => {
      console.log("wow!");
      setShowTypingIndication(true);
    });

    props.socket?.on("nobodyIsTyping", () => {
      setShowTypingIndication(false);
    });
  }, []);

  return (
    <Container mt="16px" border="solid 1px" borderRadius="4px" h="500px">
      {props.messages.map((message) => (
        <Message key={message} content={message} />
      ))}
      {showTypingIndication ? "Someone is typing..." : null}
    </Container>
  );
}

export default Chatbox;
