import Email from './Email'

const Emails = (props) => {
    const { emails } = props; 
    const formattedEmails = emails.map(email => <Email email={email}/>)

    console.log(emails)
    return (
        <div>
            <h4>Inbox:</h4>

            <ul>
                { formattedEmails }
            </ul>
        </div>
    )
}

export default Emails; 