import React from 'react'
import UserItem from './UserItem'

class UserList extends React.Component {
  
  constructor(props) {

    console.log("UserList.js constructor has been called")
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("UserList.js was mounted")
  }

  componentWillUnmount() {
    console.log("UserList.js a component was unmounted")
  }

  render(){
    console.log(this.props.users)
    // const filteredUsers = this.props.users.filter(user => user.id < 4);
    // console.log(filteredUsers)
    // const {users} = this.props
    console.log("UserList.js render has been called")
    return (
      <div className="cardContainer">
        {
          this.props.users.map((user, index) => {
            return(
              <UserItem
                key={index}
                id={user.id}
                name={user.name}
                image={user.image}
                email={user.email}
                isGoldClient={user.isGoldClient}
                payment={user.payment}
                deleteUserFromList={this.props.deleteUserFromList}
                
              />
            )
          })
        }
      </div>
    )
  }

}

export default UserList;