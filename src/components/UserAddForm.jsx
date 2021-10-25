import React from 'react'

import './UserAddForm.css'

class UserAddForm extends React.Component {

  constructor(props) {
  console.log(props)

    super(props);
    this.state = {
      name: '',
      email: '',
      isGoldCLient: false,
      noName: '',
      emailValidator: '',
    }
  }
  
  handleNameChange(event) {
    console.log(event.target.value);
    const inputValue = event.target.value;
    // inputValue
    this.setState({
      name: inputValue
    });
  }

  handleEmailChange(event) {
    console.log(event.target.value);
    const inputEmailValue = event.target.value;
    this.setState({
      email: inputEmailValue
    });
  }

  handleIsGoldClientChange(event) {
    console.log(event.target.checked);
    const inputIsGoldClientValue = event.target.checked;
    this.setState({
      isGoldClient: inputIsGoldClientValue
    });
  }

  validateEmail(email) {
    if(email.search("@") === -1) {
      if(email.search(".") === -1) {
        return;
      }
    } else {
      return email;
    }
}

  handleFormSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      isGoldCLient: this.state.isGoldCLient
    }
    console.log(newUser);

    if(this.state.name === '' || undefined) {
      const noName = 'This field cannot be empty!'
      this.setState({ noName });
      return;
    }
    
    const valid = this.validateEmail(this.state.email);


    if (!valid ) {
      this.setState({ emailValidator: 'This field is empty or invalid' });
      return;
    } else {
      this.setState({ emailValidator: '' });

    }


    this.props.updateUsersList(newUser);
  }

  render() {
    return (
      <div>
        <form className="user-add-form" onSubmit={event => this.handleFormSubmit(event)}>
          <h2 className="UserAdd">Adauga un utilizator nou</h2>
          <label htmlFor="name">Nume:</label>
          <div className="redLabel">{ this.state.noName }</div>
          <input
            type="text" name="name" id="" value={this.state.name}
            onChange={(event) => this.handleNameChange(event)} />

          <label htmlFor="email">Email:</label>
          <div className="redLabel">{ this.state.emailValidator }</div>

          <input type="text" name="email" id="" value={this.state.email}
            onChange={(event) => this.handleEmailChange(event)}

          />

          <label htmlFor="gold-client">Is gold client:</label>
          <input type="checkbox" name="gold-client" id="" checked={this.state.isGoldClient}
            onChange={event => this.handleIsGoldClientChange(event)}
          />

          <input type="submit" name="" id="" value="submit" />
        </form>


      </div>
    )
  }
}

export default UserAddForm;