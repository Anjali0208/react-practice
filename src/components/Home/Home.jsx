import React from 'react'
import { Link } from 'react-router-dom'
// import DataFect from "./components/Hooks/Useeffect/DataFect";
// import Useeffect from "./components/Hooks/Useeffect/Useeffect";
// import Useeffect2 from "./components/Hooks/Useeffect/Useeffect2";
// import Useeffect3 from "./components/Hooks/Useeffect/Useeffect3";
// import Usereducer from "./components/Hooks/Usereducer/Usereducer";
import Usestate from "../../components/Hooks/Usestate/Usestate";
// import Login from "./components/Form/Login";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to='/login'>Login</Link>
      <hr />
      <Link to='/loginAnim'>LoginAnimated</Link>
      <Usestate />
      {/* <Usereducer />
        <Useeffect />
        <Useeffect2 />
        <Useeffect3 />
        <DataFect /> */}

    </>
  )
}

export default Home