import MessageHistory from './components/MessageHistory';

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
      <div className="chat-header"></div>
        <div className="chat-history">
          <MessageHistory/>
        </div>
      </div>  
    </div>
  );
}

export default App;
