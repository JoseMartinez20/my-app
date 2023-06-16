
import React from 'react';
import '../components/ChatBox.css'


class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.textareaRef = null;
    this.state = {
      responses: [],
    };
  }

  autoResize = () => {
    if (this.textareaRef) {
      this.textareaRef.style.height = 'auto';
      this.textareaRef.style.height = `${this.textareaRef.scrollHeight}px`;
    }
  };

  callGPT = (event) => {
    event.preventDefault();
    const userInput = event.target.elements.userInput.value;
    console.log("User Input:", userInput);

    // Stubbed response
    const response = "This is a stubbed response.";

    this.setState((prevState) => ({
      responses: [...prevState.responses, response],
    }));

    event.target.reset();
  };

  componentDidMount() {
    this.textareaRef = document.getElementById('userInput');
    this.textareaRef.addEventListener('input', this.autoResize);
    this.textareaRef.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    this.textareaRef.removeEventListener('input', this.autoResize);
    this.textareaRef.removeEventListener("keydown", this.handleKeyDown);
  }


  render() {
    const { responses } = this.state;

    return (
      <div id="chat-instance">
        <div className="chat-container">
          <form className="query-box" id="query-box" onSubmit={this.callGPT}>
            <div className="input-wrapper">
              <textarea
                className="input"
                id="userInput"
                name="userInput"
                type="text"
                rows="1"
                placeholder="What can I answer for you today?"
              />
              <button className='button' type="submit">
                Submit
              </button>
            </div>
          </form>
          {responses.map((response, index) => (
            <div key={index} className="response">
              {response}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ChatBox;
