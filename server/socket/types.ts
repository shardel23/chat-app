export interface ServerToClientEvents {
  noArg: () => void;
  message: (from: string, message: string) => void;
}

export interface ClientToServerEvents {
  message: (message: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
