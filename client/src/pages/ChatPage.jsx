import { useMultiChatLogic } from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatPage = (props) => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
    props.user.username,
    props.user.secret
  );

  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.username}
        secret={props.user.secret}
      />
    </div>
  );    
};

export default ChatPage;
