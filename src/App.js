import "./App.css";
// import Login from "./components/Form/Login";
import LoginAnimated from "./components/Form/LoginAnimated";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Useeffect3 from "./components/Hooks/Useeffect/Useeffect3";
import DataFetch from "./components/Hooks/Useeffect/DataFect";
import UseState from "./components/Hooks/Usestate/Usestate";
import Item from "./components/Hooks/Context /Item";
import Cart from "./components/Hooks/Context /Cart";
import Login from "./components/Hooks/Context /AnotherExample/Login";
import Profile from "./components/Hooks/Context /AnotherExample/Profile";
// import Counter from "./components/Hooks/Context /Counter";
// import { useContext } from "react";
// import { CounterContext } from "./context/CounterContext";

function App() {
  // const counterState = useContext(CounterContext);

  return (
    <>
      <Login />
      <Profile />
      {/* <Item name="Macbook pro" price={200000} />
      <Item name="Pendrive" price={2000} />
      <Item name="Mobile" price={3500} />
      <Cart /> */}
      {/* <div>
        <h1>Context API</h1>
        <p>Count is {counterState.count}</p>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div> */}
      {/* <Props /> */}

      {/* <BrowserRouter>
        <UseState />
        <Useeffect3 />
        <DataFetch />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginAnim" element={<LoginAnimated />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
