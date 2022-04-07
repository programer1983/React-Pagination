import {useState, useEffect} from "react"
import axios from "axios"
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentpage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)


  return (
    <div className="App">
      <h1>Hello Dimon</h1>
    </div>
  );
}

export default App;
