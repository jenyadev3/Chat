function Typing({message}) {
  return (
        <li>
        <div className="message-data">
        <span className="message-data-name">{message.from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="circle-block">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      </div>
      </li>
  )
}

export default Typing;