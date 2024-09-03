import React from 'react'

export default function Props() {
    const people = ["John", "Bob", "Fred"];
    const employee = {
        name: "John",
        age: 30,
    }
    return (
        <>
            <ul>
                {people.map((person) => (
                    <li>{person}</li>
                ))}
            </ul>
            {/* <ul>
            {employee.map((emp) =>{
                <li>{emp.name}</li>
                <li>{emp.age}</li>
            })}
        </ul> */}
        </>
    )
}