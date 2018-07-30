import React, { Component } from 'react';
import './App.css';
import Firstposts from './firstposts.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      // set posts state to an empty array to allow multiple post renders
      posts: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // set input state to the value of user's input
  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  // set state to array ending in current post state (empty when starting) & input for new post
  handleClick() {
    this.setState({
      posts: [
        ...this.state.posts,
        this.state.input
      ],
      // clear input
      input: ''
    })
  }

  render() {
    // add timestamp to each post
    let timestamp = new Date();
    return (
      <div className="container">
        <div className="panel">
          <img height="100 px" src="https://marketing.twitter.com/content/dam/marketing-twitter/brand/logo.png" alt=""></img>
          <h1>Chirper</h1>
        </div>
        <div className="body">
          <input
            value={this.state.input}
            placeholder="type your message here"
            // when user changes/types input, run handleChange method
            onChange={this.handleChange}
          />
          <button
            // when user clicks button, run handleClick method
            onClick={this.handleClick}
          >Post</button>
          <h2>Log</h2>

          <div className="posts" /* render headings from Firstposts component here */>
            {<Firstposts />}
            {this.state.posts.map(post => (
              <div>
                <h3>{timestamp.toString()}</h3>
                <h4>{post}</h4>
              </div>  // above: map over each item in posts array, render timestamp & input for each
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;