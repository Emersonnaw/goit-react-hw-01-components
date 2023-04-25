import {Profile} from 'components/UserCard/Profile';   
import user from 'user.json';
import { StatisticSection } from 'components/statistics/StaticticSection';


import { StatList } from 'components/statistics/StatList';
import statisticData from 'statisticData.json';
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
        stats={statisticData}/>
      </StatisticSection>
      
    </div>
    
    
    


  );
};
