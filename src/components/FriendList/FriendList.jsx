import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({items}) => {
return (
    <ul className={css.friendList}>
        {items.map(({ id, avatar, name, isOnline }) =>
        (<FriendListItem key={id} avatar= {avatar} name ={name} isOnline ={isOnline}
        />
        ))}
    </ul>
);
}

FriendList.propTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,

}