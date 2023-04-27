import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransitionUnit.module.css';
export const TransitionUnit = ({type, amount, currency}) => {
    return (
        <>
            
            <tr>
            <td className={css.tableData}>{type}</td>
            <td className={css.tableData}>{amount}</td>
            <td className={css.tableData}>{currency}</td>
            </tr>
            
        </>
    );
};

TransitionUnit.propTypes ={ 
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}