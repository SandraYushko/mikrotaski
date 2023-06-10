import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title:string) => void
    callBackButtonHandler: () => void
}

const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {props.setTitle(event.currentTarget.value)}
    return (
        <input
            value={props.title}
            onChange={onChangeInputHandler}
            onKeyDown={(event:KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Enter") {
                    props.callBackButtonHandler()
                }
            }}
        />
    );
};

export default Input;