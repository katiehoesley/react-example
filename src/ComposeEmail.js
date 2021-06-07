import React from 'react'

class ComposeEmail extends React.Component {
    constructor(props) {
      super() 
      this.state = {
        newSender: '', 
        newRecipient: '', 
        newSubject: '', 
        newMessage: ''
      }
    }
  
    saveSender = (e) => {
        e.preventDefault()
        let input = document.getElementById("sender").value
        this.setState({ newSender: input })

    }

    saveRecipient = (e) => {
        e.preventDefault()
        let input = document.getElementById("recipient").value
        this.setState({ newRecipient: input })
    }

    saveSubject = (e) => {
        e.preventDefault()
        let input = document.getElementById("subject").value
        this.setState({ newSubject: input })
    }

    saveMessage = (e) => {
        e.preventDefault()
        let input = document.getElementById("message").value
        this.setState({ newMessage: input })
    }

    sendMessage = async (event) => {
        event.preventDefault()
        const body = {
            sender: this.state.newSender, 
            recipient: this.state.newRecipient, 
            subject: this.state.newSubject, 
            message: this.state.newMessage, 
            date: new Date(), 
            id: 100
        }
        const url = 'http://localhost:3001/send'
        const response = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return response
    }
  
    render() {
      return (
      <form>
          Compose Email: <br></br><br></br>
            <label>
            To:
            <input type="text" id="sender" />
            </label>
            <input type="submit" value="Submit" onClick={this.saveSender}/>
            <br></br><br></br>

            <label>
            From:
            <input type="text" id="recipient" />
            </label>
            <input type="submit" value="Submit" onClick={this.saveRecipient}/>
            <br></br><br></br>

            <label>
            Subject:
            <input type="text" id="subject" />
            </label>
            <input type="submit" value="Submit" onClick={this.saveSubject}/>
            <br></br><br></br>

            <label>
            Message:
            <input type="text" id="message" />
            </label>
            <input type="submit" value="Submit" onClick={this.saveMessage}/>
            <br></br><br></br>

            <button onClick={this.sendMessage}>Send Message</button>
        </form>
      )
    } 
  }
  
  export default ComposeEmail;
  