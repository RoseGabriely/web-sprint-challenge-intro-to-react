// Write your Character component here
import Details from "./Details"

export default function Character(props) {
    const { character } = props

    if (!character) {
        return <h3>Loading...</h3>
    }
    

    return (
        <div className='Character'>
            <h2>{character.name}</h2>
            <Details character={character} />
        </div>
    )
}