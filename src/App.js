import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utlis/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="bg-red-200 text-center text-gray-700"> Rahul Pannati</h1>
        <Head />
        <Body />

        {/* 
       header
       body
         sideBar
         MenuItems
        MainContainer
          ButtonsList
          VideoContainer
            VideoCard
      
      */}
      </div>
    </Provider>
  );
}

export default App;
