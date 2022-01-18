import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  content: string;
};

function Message(props: Props) {
  return (
    <Box bg="lightgreen" p={4} mt={1}>
      {props.content}
    </Box>
  );
}

export default Message;
