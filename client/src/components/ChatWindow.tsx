import { useRef, useEffect } from "react";
import { Message } from "@/utils/constants";

type ChatWindowProps = {
    messages: Message[];
}

export function ChatWindow({ messages }: ChatWindowProps) {
    const messageListRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    function scrollToBottom() {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }

    return (
        <ul
            className="flex-1 overflow-y-scroll overflow-x-hidden h-[60vh] p-6"
            ref={messageListRef}
        >
            {messages.map((message) => (
                <li key={message.id} className="mb-4 last:mb-0 animate-fadeIn">
                    <div className="flex items-center mb-1">
                        <span className="text-secondary text-xs">{new Date(message.createdAt).toLocaleTimeString()}</span>
                        <span className="ml-2 text-primary text-xs">Port: {message.port}</span>
                    </div>
                    <p className="bg-accent bg-opacity-10 p-3 rounded-lg border-l-4 border-white">
                        {message.message}
                    </p>
                </li>
            ))}
        </ul>
    )
}