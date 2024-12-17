import { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

  useEffect(() => {
    const eventSource = new EventSource(`${baseURL}/chat`);

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prev) => [...prev, newMessage]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const sendMessage = async () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { sender: "You", text: input }]);

    await fetch(`${baseURL}/send-message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-2 pl-5 pr-5 rounded-full max-w-xs ${
                msg.sender === "You"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="p-4 bg-white flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // Call sendMessage on pressing Enter
          placeholder="Type your message"
          className="flex-1 border rounded-full p-2"
        />
      </div>
    </div>
  );
};

export default Chat;
