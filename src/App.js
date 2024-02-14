import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css"
import appStore from "./store/appStore";

function App() {
  
  return (
    <Provider store={appStore}>
    <div className="bg-zinc-900 ">
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
