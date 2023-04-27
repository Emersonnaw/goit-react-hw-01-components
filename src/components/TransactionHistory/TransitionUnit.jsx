import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransitionUnit.module.css';
export const TransitionUnit = ({transitionData}) => {
    return (
        <>
          
          <tbody className={css.tableBody} >   
            {transitionData.map(data =>(
                    <tr key={data.id}>
                        <td className={css.tableData}>{data.type}</td>
                        <td className={css.tableData}>{data.amount}</td>
                        <td className={css.tableData}>{data.currency}</td>
                    </tr>
                
               
            ))}
            </tbody>    
          
        </>
    );
}

TransitionUnit.propTypes ={ 
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}