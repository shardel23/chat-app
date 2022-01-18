export interface ServerToClientEvents {
  noArg: () => void;
  message: (from: string, message: string) => void;
  someoneIsTyping: () => void;
  nobodyIsTyping: () => void;
}

export interface ClientToServerEvents {
  message: (message: string) => void;
  startedTyping: () => void;
  stoppedTyping: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
