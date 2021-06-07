import React from "react";
import Emails from './Emails'
import SearchButton from './SearchButton'
import ComposeEmail from './ComposeEmail'

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      currentEmails : [], 
      newSender: '', 
      newRecipient: '', 
      newSubject: '', 
      newMessage: ''
    }
  }

  getAllEmails = (event) => {
    event.preventDefault() 
    fetch('http://localhost:3001/emails')
    .then(emails => emails.json())
    .then(emails => this.setState({ currentEmails : emails }))
  }

  getEmailsBySearch = (event) => {
      event.preventDefault()
      let searchTerm = document.getElementById("searchTerm").value
      fetch(`http://localhost:3001/search?query=${searchTerm}`)
      .then(emails => emails.json())
      .then(emails => this.setState({ currentEmails : emails }))
  }

  render() {
    return (
      <div className="App">
        <ComposeEmail /><br></br>

        <SearchButton onClick={this.getEmailsBySearch}/><button onClick={this.getAllEmails}>All Emails</button><br></br>

        <Emails emails={this.state.currentEmails} />  
      </div>
    )
  } 
}

export default App;
