import React, {useState} from 'react';
import './App.css';

type FilterType='all'|'ruble'|'dollar'
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
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "dollar")
        //setMoney(currentMoney)
    }
    if (knopka==='ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "ruble")
        //setMoney(currentMoney)
    }

    let onClickHandler = (vibranaKnopka: FilterType) => {
        setKnopka(vibranaKnopka)
        }


    return (
        <div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
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
                <button onClick={() => onClickHandler('all')}>all</button>
                <button onClick={() => onClickHandler('ruble')}>ruble</button>
                <button onClick={() => onClickHandler('dollar')}>dollar</button>
            </div>
        </div>
    )
}
