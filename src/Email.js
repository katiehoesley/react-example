const Email = (props) => {
    return (
        <li>
            Subject: { props.email.subject }
            <br></br>
            From: { props.email.sender }
            <br></br>
            To: { props.email.recipient }
            <br></br>
            Message: { props.email.message }
            <br></br>
            <br></br>
        </li>
    )
}

export default Email; 