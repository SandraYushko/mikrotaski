import React from 'react';

type ButtonPropsType = {
    name: string
    callBackButtonHandler: () => void
}

const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {props.callBackButtonHandler()}
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};

export default Button;