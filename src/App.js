import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/components/ChatFeed';
import LoginForm from './components/components/LoginForm';
import './App.css';

const projectID = 'key';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
