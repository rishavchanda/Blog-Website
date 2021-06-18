import React from "react";
import $ from 'jquery';
import Popper from 'popper.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Blog from "./components/Blog"
import AddComment from "./components/AddComment"
import Comments from "./components/Comments"

function App() {
  return (
    <div className="content">
    <Blog/>
    <Comments/>
    <AddComment/>
    </div>
  );
}

export default App;

