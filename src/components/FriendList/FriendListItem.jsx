import PropTypes from 'prop-types'
import clsx from 'clsx';
import css from 'components/FriendList/FriendListItem.module.css'
export const FriendListItem = ({dataItems}) => {
  console.log( typeof dataItems);
  return (
      <>
      {dataItems.map(item =>(
        <li className={css.items} key ={item.id}>
            <span className={clsx(css.status,{[css.online]:item.isOnline})}></span>
            <img  src={item.avatar} alt={item.name} width="48" />
            <p>{item.name}</p>
        </li>
      ))}
      </> 
    
   
  );
}

FriendListItem.propTypes = {

  name:PropTypes.string.isRequired,
}










// export const FriendListItem = ({ avatar, name, isOnline }) => {
//   return (
//     <>
//       <span className={clsx(css.status,{[css.online]:isOnline})}></span>
//       <img className="avatar" src={avatar} alt={name} width="48" />
//       <p className="name">{name}</p>
          
//     </>
//   );
// };

// FriendListItem.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline:PropTypes.bool.isRequired
// }
