import React, {useState} from 'react';
import './App.css';
import FullInput from './Components/FullInput';
import Input from './Components/Input';
import Button from './Components/Button';


export const App = () => {
    const [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])
    const [title, setTitle] = useState("")

function addMessage (title: string) {
      let newMessages = [{message:title}, ...message ]
      setMessage(newMessages)
}

const callBackButtonHandler = () => {
        addMessage(title)
    setTitle("")
}

    return (
        <div className={"App"}>
           {/*Full<Input addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle} callBackButtonHandler={callBackButtonHandler}/>
            <Button name={'+'} callBackButtonHandler={callBackButtonHandler}/>
            {message.map((el,index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}
