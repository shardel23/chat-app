import { Flex, Box, Input, Spacer, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "../socket/types";

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
            setMessage(event.target.value);
          }}
        />
      </Box>
      <Spacer />
      <Box p="4">
        <Button
          colorScheme="blue"
          onClick={() => {
            props.socket?.emit("message", message);
            setMessage("");
          }}
        >
          Send Message
        </Button>
      </Box>
    </Flex>
  );
}

export default Composer;
