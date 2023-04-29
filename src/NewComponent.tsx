import React from 'react';

type NewComponentPropsType = {
    students: StydentType[]
}
type StydentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props:NewComponentPropsType) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span>age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}
            <li></li>
            <li></li>
            <li></li>
        </ul>
    );
};