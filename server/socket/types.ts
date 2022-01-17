export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: string) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}