import styled from "styled-components";

export const Item = styled.div`
width: 100%;
position: relative;
    
`
export const Status = styled.span`
    position: absolute;
    top: 18px;
    left: -25px;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};;
`

export const Avatar = styled.img`
    display: block;
`
export const Name = styled.p`
    font-weight: 700;
`