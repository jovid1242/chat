import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    currentMessage.trim();
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((prev) => [...prev, messageData]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  console.log("messageList", messageList);
  return (
    <div className="chat">
      <div className="chat__header">
        <p>Live chat</p>
      </div>
      <div className="chat__body">
        <ScrollToBottom>
          <h1>Message</h1>
          <br />
          {messageList?.map((el, i) => {
            return <p key={el.message + i}>{el.message}</p>;
          })}
        </ScrollToBottom>
      </div>
      <div className="chat__footer">
        <form action="" onSubmit={sendMessage}>
          <input
            type="text"
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="message"
          />
          <button>send &#9658;</button>
        </form>
      </div>
    </div>
  );
}
