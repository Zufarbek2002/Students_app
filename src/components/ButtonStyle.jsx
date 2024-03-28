import styled from "styled-components"

const ButtonStyle =styled.button`
    background-color: #fff;
    border: 2px solid green;
    padding: 8px 20px;
    border-radius: 8px;
    transition: all .6s ease;
    outline: none;
    &:hover{
        background-color: green;
        color: #fff;
    }
`
export const EditBtn = styled(ButtonStyle)`
    background-color: #0000ff;
    color: #fff;
    border: none;
    &:hover{
        background-color: #0000ba;
    }
`
export const DeleteBtn = styled(EditBtn)`
    background-color: #ff0000;
    &:hover{
        background-color: #c30000;
    }
`
export const CancelBtn = styled(EditBtn)`
    background-color: #696969;
    &:hover{
        background-color: #000;
    }
`


export default ButtonStyle