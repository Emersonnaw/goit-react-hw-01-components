import user from 'data/user.json';
import data from 'data/statisticData.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import {Profile} from 'components/Profile/Profile';   

import { Statistics} from 'components/statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList.jsx';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      
      <FriendList
       items = {friends}
      />

     <TransactionHistory items={transactions} />
    </div>
  );
};
