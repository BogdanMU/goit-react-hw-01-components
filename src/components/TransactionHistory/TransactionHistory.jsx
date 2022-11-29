import PropTypes from 'prop-types';
import { Table,TableHeader,BodyRow,TransactionType } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {

return(
    
    <Table>
    <TableHeader>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHeader>
  
    <tbody>
       {items.map(({ id, type, amount, currency }, index) => {
          return (
            <BodyRow key={id} bgcolor={index % 2 === 0 ? '#fff' : '#d8d8d8'}>
              <TransactionType>{type}</TransactionType>
              <td>{amount}</td>
              <td>{currency}</td>
            </BodyRow>
          );
        })}
    </tbody>
  </Table>
  
)

}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

