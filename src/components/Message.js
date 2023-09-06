function Message({message}) {
  return (
        <li>
        <div className="message-data align-left">
          <span className="message-data-name">{message.from.name}</span>
          <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message my-message">
          {message.text}
        </div>
        </li>
    )
}

export default Message;