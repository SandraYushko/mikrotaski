import React from 'react';

type NewComponentPropsType = {
    cars: CarsType[]
}
type CarsType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <table border={1} className="table">
                <tr>
            <th>Number</th>
            <th>Manufacturer</th>
            <th>Model</th>
                </tr>

            <tr className="table">
                {props.cars.map((carsFromCarsArray, index) => {
                   debugger
                    return (
                        <div className="tableTD">
                            <td>{index+1}</td>
                            <td key={index}>{carsFromCarsArray.manufacturer}</td>
                            <td key={index}>{carsFromCarsArray.model}</td>
                        </div>
                    )
                } )}
            </tr>
        </table>
)
}

