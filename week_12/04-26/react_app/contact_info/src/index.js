import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ContactForm extends React.Component{
  constructor() {
    super()
    this.state ={
      name: '',
      phone: '',
      email: '',
      type: 'Family',

      nameArray: ['joe','bob'],
      phoneArray: ['123-456-7890','234-567-8901'],
      emailArray: ['a@test.com','b@test.com'],
      typeArray: ['Family','Friend']
    };
  }
  changeState(stateName, event){
    this.setState({
      [stateName]: event.target.value
    });
  }

  deleteContact(index){
    console.log(' in the delete');
    let tempNameArray= this.state.nameArray;
    let tempPhoneArray= this.state.phoneArray;
    let tempEmailArray= this.state.emailArray;
    let tempTypeArray= this.state.typeArray;

    tempNameArray.splice(index, index+1);
    tempPhoneArray.splice(index, index+1);
    tempEmailArray.splice(index, index+1);
    tempTypeArray.splice(index, index+1);

    this.setState({
      nameArray : tempNameArray,
      phoneArray : tempPhoneArray,
      emailArray : tempEmailArray,
      typeArray : tempTypeArray
    })
  }

  addContact(event){
    event.preventDefault()

    let tempNameArray= this.state.nameArray;
    let tempPhoneArray= this.state.phoneArray;
    let tempEmailArray= this.state.emailArray;
    let tempTypeArray= this.state.typeArray;

    tempNameArray.push(this.state.name);
    tempPhoneArray.push(this.state.phone);
    tempEmailArray.push(this.state.email);
    tempTypeArray.push(this.state.type);

    this.setState({
      nameArray : tempNameArray,
      phoneArray : tempPhoneArray,
      emailArray : tempEmailArray,
      typeArray : tempTypeArray
    })
    console.log(this.state.nameArray);
    console.log(this.state.phoneArray);
  }

  render(){

    let name = this.state.nameArray;
    let phone = this.state.phoneArray;
    let email = this.state.emailArray;
    let type = this.state.typeArray;
    var count = [];
    for (let i=0; i<name.length;i++){
      count.push(i);
    }
    console.log(count);
    return (
      <div>
      <h1>Add Form</h1>
      <form onSubmit={event=> this.addContact(event)}>

        <label>Name:</label><br/>
        <input type="text"
          className="form-control"
          value={this.state.name}
          onChange={event => this.changeState('name', event)}/><br/><br/>

        <label>Number: </label><br/>
        <input type="tel"
          value={this.state.phone}
          onChange={event => this.changeState('phone', event)}/><br/><br/>


        <label>Email: </label><br/>
        <input type="email"
          value={this.state.email}
          onChange={event => this.changeState('email', event)}/><br/><br/>

        <div className="form-group">
          <label>Account Type:</label><br/>
          <select
            className="form-control"
            value={this.state.type}
            onChange={event => this.changeState('type', event)}>
            <option value="Family">Family</option>
            <option value="Friend">Friend</option>
            <option value="Coworker">Coworker</option>
          </select>
        </div><br/>
        <button type="submit">Add Info</button>
        </form>

        <div className="contactInfo">

          <h1>Contact List</h1>
          <span>
            {count.map((ind, index) => <div key={index}>Name: {name[ind]} -  {type[ind]}<br/>  Phone:{phone[ind]}  <button className="deleteButton" type="submit" onClick={() => this.deleteContact(index)}>Delete</button><br/>Email:{email[ind]} <br/> ******************************************<br/></div>)}
          </span>
        </div>

    </div>
    );
  }
}


ReactDOM.render(
  <div><ContactForm/></div>,
  document.getElementById('root')
);
