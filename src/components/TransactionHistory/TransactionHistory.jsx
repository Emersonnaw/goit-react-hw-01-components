import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransitionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
            <thead >
                <tr className={css.tableRow}>
                    <th className={css.tableHeader}>Type</th>
                    <th className={css.tableHeader}>Amount</th>
                    <th className={css.tableHeader}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tableBody} >   
            {items.map(({id,type,amount,currency}) =>(
                    <tr  className ={css.tableRow} key={id}>
                        <td className={css.tableData}>{type}</td>
                        <td className={css.tableData}>{amount}</td>
                        <td className={css.tableData}>{currency}</td>
                    </tr>
                
            ))}
            </tbody>  
        </table>
    );

}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })).isRequired
};