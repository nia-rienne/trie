import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  async sendMessage(text) {
    const chatQueryResult = await getChatTranscript(text);

    this.setState({ messages: chatQueryResult });
  }

  render() {
    return (
      <div className="app">
        <div className="window-title">
          <span>Chat Simulator</span>
        </div>
        <SendMessageForm sendMessage={this.sendMessage} />
        <Title />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list" data-testid="message-list">
        {this.props.messages.map((message, index) => {
          if (message.payload.type === "message") {
            return (
              <li key={message.delta} className="message" data-testid="message">
                <div>{message.payload.user.display_name}</div>
                <div>{message.payload.message.text}</div>
              </li>
            );
          }

          if (
            message.payload.type === "connect" ||
            message.payload.type === "disconnect"
          ) {
            return (
              <div key={message.delta} className="action" data-testid="action">
                {" "}
                ...{message.payload.user.display_name} {message.payload.type}ed
              </div>
            );
          }

          return null;
        })}
      </ul>
    );
  }
}

class SendMessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="send-message-form"
        data-testid="send-message-form"
      >
        <input
          className="message-input"
          data-testid="message-input"
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type the URL of a chat transcript and hit ENTER"
          type="text"
        />
      </form>
    );
  }
}

function Title() {
  return <p className="title">Chat Replay</p>;
}

async function getChatTranscript(url) {
  const data = await fetch(url);
  return await data.json();
}

export default App;
