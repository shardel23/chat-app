import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Chatbox from "../components/Chatbox";
import Composer from "../components/Composer";
import { ServerToClientEvents, ClientToServerEvents } from "../socket/types";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [socket, setSocket] =
    useState<Socket<ServerToClientEvents, ClientToServerEvents>>();
  const [messages, setMessages] = useState<Array<string>>([
    "Hi!",
    "Welcome to this chat app!",
    "Type your messages below",
  ]);

  useEffect(() => {
    console.log("Creating socket");
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
      "http://localhost:3001"
    );
    setSocket(socket);

    socket.on("message", (from: string, message: string) => {
      console.log("Got message", Date.now());
      setMessages((messages) => [...messages, from + ": " + message]);
    });
  }, []);

  if (socket == undefined) {
    return <div> Connecting... </div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Chatbox socket={socket} messages={messages} />
        <Composer socket={socket} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
