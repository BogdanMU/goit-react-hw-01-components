import styled from "styled-components";

export const StatsBox = styled.section`
border-radius: 10px;
width: 20%;
margin: 30px auto;
align-items:center;
background-color: #fff;
display: flex ;
flex-direction: column;
`
export const StatsTitle = styled.h2`
    font-weight: 700;
    font-size: 30px;
`
export const StatsList = styled.ul`
list-style : none ;
display: flex;
text-align: center;
padding:0;
gap: 1px;

`
export const StatsItem = styled.li`
border: 1px solid black;
font-size: x-large;
    span{
        display: block;
    }
`
