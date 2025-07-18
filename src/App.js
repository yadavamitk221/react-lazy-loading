import { Link, Route, Routes } from 'react-router';
import './App.css';
import {About } from "./components/About";
import {Home } from "./components/Home";
import {Store } from "./components/Store.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
         <Route path="/home" element={<Home />}/>
         <Route path="/store" element={<Store />}/>
         <Route path="/about" element={<About />}/>
      </Route>
    </Routes>
  );
}


function NavWrapper () {
  return (
    <>
      <nav style={{display: "flex", gap: "1rem"}}>
        <Link  to="/">Home</Link>
        <Link  to="/store">Store</Link>
        <Link  to="/about">About</Link>
      </nav>
      <div>
        This is Home page.
      </div>
    </>
  )
}

export default App;
