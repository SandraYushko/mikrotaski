import React, {useState} from 'react';
import './App.css';
import FullInput from './Components/FullInput';


export const App = () => {
    const [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

function addMessage (title: string) {
      let newMessages = [{message:title}, ...message ]
      setMessage(newMessages)
}
    return (
        <div className={"App"}>
           <FullInput addMessage={addMessage}/>
            {message.map((el,index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}
