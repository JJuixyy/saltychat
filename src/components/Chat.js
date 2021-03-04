import React, { useState, useEffect, useRef } from 'react';
import firebase, {auth, db} from '../services/firebase';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';


const Chat = () => {

    const scroller = useRef();
    const messagesRef = db.collection('messages')
    const query = messagesRef.orderBy('createdAt').limitToLast(10)

    const [messages] = useCollectionData(query, {idFiled: 'id'});
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
      e.preventDefault()

      const {uid, photoURL, displayName} = auth().currentUser

      await messagesRef.add({
        text:formValue,
        createdAt:firebase.firestore.FieldValue.serverTimestamp(),
        uid, photoURL, displayName
      })

      setFormValue('')
    }

    useEffect(() => {
      scroller.current.scrollIntoView({behvior: 'smooth'})
    }, [messages])

    return (
      <>
        <main>
            {messages && messages.map((msg) =>
              <ChatMessage key={msg.id} message={msg} /> 
            )}
            <span ref={scroller}></span>
        </main>
        <form onSubmit={sendMessage}>
          <input id="inputtext" type="text" value={formValue} onChange={(e) =>setFormValue(e.target.value)} placeholder="Say something salty ! "/>
          <button id="inputsubmit" type="submit" disabled={!formValue}>Send !</button>
        </form>
      </>
    )
}

export default Chat;



