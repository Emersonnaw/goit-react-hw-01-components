import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from 'components/FriendList/FriendListItem.module.css';
export const FriendListItem = ({ dataItems }) => {
  return (
    <>
      {dataItems.map(item => (
        <li className={css.items} key={item.id}>
          <span
            className={clsx(css.status, { [css.online]: item.isOnline })}
          ></span>
          <img src={item.avatar} alt={item.name} width="48" />
          <p>{item.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  dataItems: PropTypes.array.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
  FriendListItem: PropTypes.node,
};

