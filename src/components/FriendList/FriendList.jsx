
import { FriendListItem } from './FriendListItem';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({items}) => {
return (
    <ul className={css.friendList}>
            {items.map(friend =>(
                 <li className={css.items} key ={friend.id}>
                    <FriendListItem 
                        avatar = {friend.avatar}
                        name ={friend.name}
                        isOnline={friend.FriendListItem}
                    /> 
                </li>
            ))}
    </ul>
);
}