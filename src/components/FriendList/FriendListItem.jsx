import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from 'components/FriendList/FriendListItem.module.css';
export const FriendListItem = ({avatar, name, isOnline }) => {
  return (
    <>
        <li className={css.items}>
          <span
            className={clsx(css.status, { [css.online]:isOnline })}
          ></span>
          <img src={avatar} alt={name} width="48" />
          <p>{name}</p>
        </li>
      
    </>
  );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired, 
};

