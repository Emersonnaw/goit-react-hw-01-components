import user from 'user.json';
import statisticData from 'statisticData.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import {Profile} from 'components/UserCard/Profile';   
import { StatisticSection } from 'components/statistics/StaticticSection';
import { StatList } from 'components/statistics/StatList';
import { FriendList } from 'components/FriendList/FriendList.jsx';
import { TransitionTable } from './TransactionHistory/TransitionTable';

export const App = () => {
  return (
    <div>
      <Profile
      username = {user.username}
      tag= {user.tag}
      location= {user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <StatisticSection title="Upload stats" > 
        <StatList 
        stats={statisticData}
        />
      </StatisticSection>
      
      <FriendList
       items = {friends}
      />

      <TransitionTable  
      transactionsList = {transactions}
      />
    </div>
    
    
    


  );
};
