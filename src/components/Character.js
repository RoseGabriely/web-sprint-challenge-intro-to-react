// Write your Character component here
import React from "react"

export default function Character(props) {
    const { character } = props

    if (!character) {
        return <h3>Loading...</h3>
    }
    

    return (
        <div className='Character'>
            <h2>{character.name}</h2>
        </div>
    )
}