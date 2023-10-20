import { useState } from "react";
import "./App.css";
import Auth from "./Auth";
import ChatPage from "./ChatPage";

const App = () => {
  const [user, setUser] = useState(undefined);

  return !user ? <Auth onAuth={(user) => setUser(user)} /> : <ChatPage  user={user}/>;
};

export default App;
