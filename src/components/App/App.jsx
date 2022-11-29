import {Profile} from '../Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import { GlobalStyle } from 'components/GlobalStyle';

import user from '../../data/user'
import data from '../../data/data'
import friends from '../../data/friends'
import transactions from '../../data/transactions'

export const App = () => {
  return (
    <div>
      <Profile user = {user}/>
      <Statistics title="Upload stats" stats = {data}/>
      <FriendList friends = {friends}/>
      <TransactionHistory items={transactions} />;
      <GlobalStyle/>
    </div>
  );
};
