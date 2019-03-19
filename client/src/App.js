import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./Posts";

class App extends Component {
  state = {
    posts: [],
    post: ""
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/posts/").then(res => {
      console.log(res.data);
      const posts = Array.isArray(res.data) ? res.data : [];
      this.setState({
        posts
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Posts</h1>
        {this.state.posts.map(post => (
          <Posts key={post.id} title={post.title} contents={post.contents} />
        ))}
      </div>
    );
  }
}

export default App;
