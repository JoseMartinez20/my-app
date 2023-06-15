import React from 'react';

// class ChatBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInput: ''
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ userInput: event.target.value });
//   }

//   render() {
//     return (
//       <div className="chat-container">
//         <form className="query-box" id="query-box" onSubmit={this.callGPT}>
//           <textarea
//             className="input"
//             id="userInput"
//             type="text"
//             rows="1"
//             placeholder="What can I answer for you today sir?"
//             style={{
//               display: 'flex',
//               width: '100%',
//               padding: '10px',
//               lineHeight: 1.5,
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               boxSizing: 'border-box',
//               resize: 'vertical',
//               height: 'auto',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
//               fontSize: '14px'
//             }}
//             value={this.state.userInput}
//             onChange={this.handleChange}
//           ></textarea>
//         </form>
//       </div>
//     );
//   }
// }

// export default ChatBox;

const ChatBox = () => {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '5px',
      borderRadius: '8px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f5f5f5',
    };
  
    const formStyle = {
      display: 'flex',
      width: '100%',
    };
  
    const inputStyle = {
      flex: '1',
      padding: '10px',
      lineHeight: '1.5',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      resize: 'none',
      fontSize: '14px',
    };
  
    const buttonStyle = {
      marginLeft: '10px',
      padding: '8px 12px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#5334f5',
      color: '#fff',
      fontSize: '14px',
      cursor: 'pointer',
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
    };
  
    return (
      <div style={containerStyle}>
        <form style={formStyle} id="query-box" onSubmit={handleSubmit}>
          <textarea
            style={inputStyle}
            id="userInput"
            type="text"
            placeholder="What can I answer for you today?"
          ></textarea>
          <button style={buttonStyle} type="submit">
            Send
          </button>
        </form>
      </div>
    );
  };
  
  export default ChatBox;
