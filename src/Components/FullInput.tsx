import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title:string)=>void
}

const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle]=useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {setTitle(event.currentTarget.value)}
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input
                value={title}
                onChange={onChangeInputHandler}
                onKeyDown={(event:KeyboardEvent<HTMLInputElement>) => {
                    if (event.key === "Enter") {
                        onClickButtonHandler()
                    }
                }}
            />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

export default FullInput;