import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterType='all'|'ruble'|'dollar'
export const App = () => {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

const [knopka, setKnopka]=useState<FilterType>("all")
    let currentMoney = money
    if (knopka==='dollar') {
        currentMoney= money.filter(filteredMoney => filteredMoney.banknote === "dollar")
    }
    if (knopka==='ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "ruble")
    }

    let onClickHandler = (filter: FilterType) => {
        setKnopka(filter)
        }


    return (
       <NewComponent currentMoney={currentMoney} onClickHandler={onClickHandler}/>
    )
}
