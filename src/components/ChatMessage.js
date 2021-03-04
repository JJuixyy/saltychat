import { auth } from "../services/firebase";


const ChatMessage = ({message}) => {
    const {text, uid, photoUrl} = message;

    const messageClass = uid === auth().currentUser.uid ? 'sent' : 'received'
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoUrl || "http://abali.ru/wp-content/uploads/2014/01/Bart-Simpson-05-Greeting-icon.png"} alt="Calme toi frere"/>
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
