import React from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';
import UserAddForm from './components/UserAddForm';
import './App.css';

const images = [
  'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100',
  'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100',
  'https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100'

]

class App extends React.Component {
  // In constructor este apelat mai intai super, iar apoi este initializat state-ul
  constructor() {
    console.log("App.js constructor has been called");
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: [],
      changeValue: true,
      images: []
    };
  }

  componentDidMount() {
    console.log("App.js was mounted");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const filteredUsers = json.filter(user => user.id < 4);
        filteredUsers.forEach((user) => {
          user.isGoldClient = true;
          user.payment = Math.floor(1000 + Math.random() * 9000);
          user.image = images[Math.floor(Math.random() * 3)];
        
        })
        this.setState({ users: filteredUsers });
      });
  }

  componentDidUpdate() {
    console.log("App.js was updated");
  }

  changeColor(event) {
    console.log(event.target.value);
    this.setState({ background: event.target.value });
  }
  changeTextColor(event) {
    console.log(event.target.value);
    this.setState({ color: event.target.value });
  }

  changeValue() {
    this.setState(prevState => ({
      changeValue: !prevState.changeValue
    }));
  }

  updateUsersList(user) {
    // asa nu e ok!
    // this.setState({
    //   users: [...this.state.users, user]
    // })

    this.setState((previousState) => {
      return {
        users: [...previousState.users, user]
      }
    })
  }

  deleteUserFromList(id) {
    console.log(id);
    // delete user from array
    const deleteOneUser = this.state.users.filter(user => user.id !== id);
    // users filtered
    this.setState({ users: deleteOneUser });

  }



  // render se apeleaza de fiecare data cand se modifica state-ul!
  render() {
    console.log("App.js render has been called");
    return (
      <div className="app" style={{ background: this.state.background, color: this.state.color }}>
        <h1>Project 1</h1>
        <UserAddForm updateUsersList={(user) => { this.updateUsersList(user) }} />

        {/* {
          this.state.background !== '#000000'
            ? <UserList users={this.state.users}/>
            : null
        } */}
        <div className="">


        {
          this.state.changeValue ? <UserList
            users={this.state.users}
            deleteUserFromList={(id) => { this.deleteUserFromList(id) }}
          /> : <PostList />
        }

        </div>
        <div>
          <label htmlFor="">Change background</label>
          <input type="color" className="button" onChange={(event) => this.changeColor(event)} />
        </div>

        <div>
          <label htmlFor="">Change color</label>
          <input type="color" className="button" onChange={(event) => this.changeTextColor(event)} />
        </div>
        <button onClick={() => this.changeValue()}>{this.state.changeValue ? "See posts" : "See users"}</button>
      </div>
    );
  }
}


export default App;
