import PropTypes from 'prop-types'
import clsx from 'clsx';
import css from 'components/FriendList/FriendListItem.module.css'
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={clsx(css.status,{[css.online]:isOnline})}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
          
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired
}
