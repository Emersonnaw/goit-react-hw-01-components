import clsx from 'clsx';
import css from 'components/FriendList/FriendListItem.module.css'
export const FriendListItem = ({ avatar, name, isOnline }) => {

  return (
    <>
   
      <span className={css.status}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
          
    </>
  );
};
