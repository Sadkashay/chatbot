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

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full relative flex flex-col h-full bg-gray-100 overflow-y-scroll">
      <div className="flex flex-col gap-3 overflow-y-auto p-4 mb-20">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-2 pl-5 pr-5 rounded-full max-w-xs text-wrap ${
                msg.sender === "You"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
              style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="p-4 w-full bottom-0 absolute bg-white flex gap-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
          className="flex-1 border rounded-full p-2"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white rounded-full px-4 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
