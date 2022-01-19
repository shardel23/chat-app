import { Flex, Box, Input, Spacer, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Socket } from "socket.io-client";
import {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../server/socket/types";

type Props = {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
};

function Composer(props: Props) {
  const [message, setMessage] = useState<string>("");

  return (
    <Flex mt="8">
      <Box p="4">
        <Input
          placeholder="Message"
          value={message}
          onChange={(event) => {
            const newMessage = event.target.value;
            if (message === "" && newMessage !== "") {
              props.socket?.emit("startedTyping");
            } else if (message !== "" && newMessage === "") {
              props.socket?.emit("stoppedTyping");
            }
            setMessage(newMessage);
          }}
        />
      </Box>
      <Spacer />
      <Box p="4">
        <Button
          colorScheme="blue"
          onClick={() => {
            if (message !== "") {
              props.socket?.emit("message", message);
              props.socket?.emit("stoppedTyping");
              setMessage("");
            }
          }}
        >
          Send Message
        </Button>
      </Box>
    </Flex>
  );
}

export default Composer;
