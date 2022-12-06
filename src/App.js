import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";
import Artworks from "./Artworks";
import './App.css';

function App() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("http://acnhapi.com/v1/art/")
      .then((response) => response.json())
      .then((data) => {
        setArtworks(data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/paintings" element={<Artworks artworks={artworks} type="painting" />} />
        <Route exact path="/statues" element={<Artworks artworks={artworks} type="statue" />} />
        <Route exact path="/fossils" element={<Artworks artworks={artworks} type="fossil" />} />
      </Routes>
      <Comments />
      <CommentsForm />
    </div>
  );
}

export default App;
