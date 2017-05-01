import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';



class ContactList extends React.Component {
  constructor() {
    super();
    console.log('in the contact constructor');
    this.state = {
      name: '',
      phone: '',
      email: '',
      type: '',
      contactArray: [
        {
          name: 'John Smith',
          phone: '483-294-5965',
          email: 'john.smith@yahoo.com',
          type: 'friend'
        },
        {
          name: 'Jane Doe',
          phone: '834-556-2334',
          email: 'jane.doe@msn.com',
          type: 'coworker'
        }
      ],
      contacts: []
    };
  }


  componentDidMount(){

    $.get('http://localhost:3000/api/contacts')
      .then(contacts => {
        console.log(contacts);
        this.setState({
          contactArray: contacts

        })

      });
  }

  changeState(stateName, event) {
    let textInput = event.target;
    this.setState({
      [stateName]: textInput.value
    });
  }

  submitForm(event) {
    event.preventDefault();
    let contact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      type: this.state.type
    };

    console.log('in the submitform');
    console.log(contact);
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/api/contacts/',
      data: JSON.stringify(contact),
      contentType: 'application/json'
    })
    .then((contact) => {
      console.log('something added!');

      this.state.contactArray.push(contact);
      console.log(contact.id);
      this.setState({
        contactArray: this.state.contactArray,
        name: '',
        phone: '',
        email: '',
        type: '',
      });
    });
  }
  deleteContact(idx, primarykey) {

    $.ajax({
      method: 'DELETE',
      url: 'http://localhost:3000/api/contacts/'+primarykey
    })
    .then(() =>{
      console.log('something removed');
    });

    this.state.contactArray.splice(idx, 1);
    this.setState({
      contactArray: this.state.contactArray
    });
  }

  editContact(idx, primarykey) {
    let contact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      type: this.state.type
    };
    $.ajax({
      method: 'PUT',
      url: 'http://localhost:3000/api/contacts/'+primarykey,
      data: JSON.stringify(contact),
      contentType: 'application/json'
    })
    .then((contact) =>{
      console.log('finished editing');

      this.state.contactArray.splice(idx, 1, contact);
      this.setState({
        contactArray: this.state.contactArray
      });
    });
  }
  render() {
    return (
      <div className="contact-list">
        <form onSubmit={event => this.submitForm(event)}>
          <h3>Add Contact</h3>
          <TextInput
            label="Name" value={this.state.name}
            onChange={event =>
              this.changeState('name', event)}/>
          <TextInput
            label="Phone" value={this.state.phone}
            onChange={event =>
              this.changeState('phone', event)}/>
          <TextInput
            label="Email" value={this.state.email}
            onChange={event =>
              this.changeState('email', event)}/>
          <SelectInput
            label="Type" value={this.state.type}
            onChange={event =>
              this.changeState('type', event)}>
            <option value="">Select one</option>
            <option value="friend">Friend</option>
            <option value="family">Family</option>
            <option value="coworker">Coworker</option>
          </SelectInput>
          

          <button className="btn btn-primary">Add</button>
        </form>
        <h3>Contact List</h3>
        <ul>
          {
            this.state.contactArray.map((contact, idx) =>
              <li key={idx}>
                <h4>{contact.name} - ({contact.type})</h4>
                {contact.phone}, {contact.email}
                <button onClick={() =>
                  this.deleteContact(idx,contact.id)}>Delete</button>
                <button onClick={() =>
                  this.editContact(idx, contact.id)}>Edit</button>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

class TextInput extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input className="form-control" type="text"
          value={this.props.value}
          onChange={this.props.onChange}/>
      </div>
    );
  }
}

class SelectInput extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <select className="form-control"
          value={this.props.value}
          onChange={this.props.onChange}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

ReactDOM.render(
  <ContactList/>,
  document.getElementById('root')
);
