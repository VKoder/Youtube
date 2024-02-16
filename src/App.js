import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css"
import appStore from "./store/appStore";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  
  const appRouter  = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:([{
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"/watch",
      element:<WatchPage/>,
    },
  ])
  }])

  return (
    <Provider store={appStore}>
    <div className="bg-zinc-900 w-12/12">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
