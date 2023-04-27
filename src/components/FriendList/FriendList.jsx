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
    items: PropTypes.object.isRequired,
    FriendListItem: PropTypes.func.isRequired
};

