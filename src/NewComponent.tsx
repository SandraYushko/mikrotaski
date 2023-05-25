import React from 'react';
import {FilterType} from "./App";

type NewComponentPropsType = {
    currentMoney: Array<MoneyType>
    onClickHandler: (filter:FilterType)=>void
}

type MoneyType = {
    banknote: string
    nominal: number,
    number: string
}



export const NewComponent = (props: NewComponentPropsType) => {


    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: 35}}>
                <button onClick={() => props.onClickHandler('all')}>all</button>
                <button onClick={() => props.onClickHandler('ruble')}>ruble</button>
                <button onClick={() => props.onClickHandler('dollar')}>dollar</button>
            </div>
        </div>
    )
}