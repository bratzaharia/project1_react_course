import React from 'react'

import PostItem from './PostItem'

class PostList extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response) => response.json() )
    .then((json) => {
      const filteredPosts = json.filter(post => post.id < 4);
      console.log(filteredPosts)
      this.setState({ posts: filteredPosts  });
    });
  }

  render() {
    return(
      <div>
        {
          this.state.posts.map((post, index) => {
            return(
              <PostItem key={index} post={post}/>
            )
          })
        }
      </div>
    )
  }
}

export default PostList