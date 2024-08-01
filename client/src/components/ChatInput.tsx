import { useState } from "react";

type ChatInputProps = {
    onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
    const [newMessage, setNewMessage] = useState<string>("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (newMessage.trim()) {
            onSendMessage(newMessage);
            setNewMessage("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-accent bg-opacity-10 border-t-2 border-text">
            <div className="flex items-center">
                <input
                    type="text"
                    className="flex-grow bg-background border-2 border-accent rounded-l-full px-4 py-2 focus:outline-none text-sm"
                    placeholder="Type your message here..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    maxLength={255}
                />
                <button
                    type="submit"
                    className="bg-accent text-background px-6 py-2 rounded-r-full font-bold hover:opacity-80 transition-all duration-200"
                >
                    Send
                </button>
            </div>
        </form>
    )
}