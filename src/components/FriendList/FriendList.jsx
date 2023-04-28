import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({items}) => {
return (
    <ul className={css.friendList}>
            <FriendListItem dataItems = {items} />
    </ul>
);
}

FriendList.propTypes = {
    items:PropTypes.arrayOf(PropTypes.object).isRequired,
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }),
    FriendListItem:PropTypes.func,
}