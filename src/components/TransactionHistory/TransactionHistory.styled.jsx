import styled from "styled-components";

export const Table = styled.table`

    width: 25%;
    margin: 30px auto;
    border-radius: 8px;
    text-align: center;
`

export const TableHeader = styled.thead`
    background-color: darkcyan;
    color: white;

`

export const BodyRow = styled.tr`
    padding: 10px;
     background-color: ${p => p.bgcolor};;
`
export const TransactionType = styled.td`
    text-transform: capitalize;
`