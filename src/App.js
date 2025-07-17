import { Link, Route, Routes } from 'react-router';
import './App.css';
import {About } from "./components/About";
import {Home } from "./components/About";
import {Store } from "./components/About";
import {Admin } from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
         <Route path="/store" element={<Home />}/>
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
    </>
  )
}

export default App;
