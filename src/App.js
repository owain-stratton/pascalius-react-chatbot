import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot'
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
         <section>
            <ChatBot
               steps={[
                   {
                     id: 'hello-world',
                     message: 'Hello World!',
                     end: true,
                   },
               ]}
            />
         </section>
      </main>
    );
  }
}

export default App;
