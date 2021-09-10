// Write your Character component here
import Details from "./Details"
import styled from "styled-components"

export default function Character(props) {
    const { character } = props

    if (!character) {
        return <h3>Loading...</h3>
    }

    const StyledName = styled.div`
        color: #14213d;
        font-size: 1.3rem;
        :hover {
            transition: 0.4s;
            display: block;
            color: #f72585;
        }
    `
    const StyledDetails = styled.div`
        height: 0px;
        opacity: 0;
        font-size: 1.3rem;
        :hover {
            transition: 0.4s;
            opacity: 1;
            height: auto;
            color: #faedcd;
        }
    `


    return (
        <div className='Character'>
            <StyledName className='x'><h2>{character.name}</h2></StyledName>
            <StyledDetails><Details className='y' character={character} /></StyledDetails>
        </div>
    )
}