import { useState, useEffect } from "react";
import { useSocket } from "@/hooks/useSocket";
import { ChatInput } from "@/components/ChatInput";
import { ChatWindow } from "@/components/ChatWindow";
import { ConnectionCount } from "@/components/ConnectionCount";
import { CONNECTION_COUNT_UPDATED_CHANNEL, Message, NEW_MESSAGE_CHANNEL } from "@/utils/constants";

export default function Home() {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [connectionCount, setConnectionCount] = useState<number>(0);
  const [showChat, setShowChat] = useState<boolean>(false);
  const socket = useSocket();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log("connected to socket");
    });

    socket?.on(NEW_MESSAGE_CHANNEL, (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket?.on(CONNECTION_COUNT_UPDATED_CHANNEL, ({ count }: { count: number }) => {
      setConnectionCount(count);
    });

  }, [socket]);

  function handleSendMessage(message: string) {
    socket?.emit(NEW_MESSAGE_CHANNEL, { message });
  }

  return (
    <div className="min-h-screen bg-background text-text">
      {!showChat ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-6xl font-bold mb-8 animate-pulse text-center">
            Welcome to <span className="text-primary">FastChat 💬</span>
          </h1>
          <p className="text-2xl mb-12 text-center max-w-3xl">
            Experience real-time, scalable messaging powered by WebSockets and Redis.
            <br />
            <span className="text-secondary">Connect instantly.</span>
            <span className="text-accent"> Scale effortlessly.</span>
          </p>
          <button
            onClick={() => setShowChat(true)}
            className="bg-accent text-background px-8 py-4 rounded-full text-xl font-bold transform hover:scale-110 transition-transform duration-200 animate-bounce"
          >
            Start Chatting
          </button>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-background border-2 border-accent rounded-lg overflow-hidden">
            <ConnectionCount count={connectionCount} />
            <ChatWindow messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      )}
    </div>
  );
}