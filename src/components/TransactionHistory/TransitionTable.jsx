import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransitionTable.module.css'
import {TransitionUnit} from 'components/TransactionHistory/TransitionUnit';
export const TransitionTable = ({transactionsList }) => {
    return (
        <table className={css.transactionHistory}>
            <thead >
                <tr className={css.tableRow}>
                <th className={css.tableHeader}>Type</th>
                <th className={css.tableHeader}>Amount</th>
                <th className={css.tableHeader}>Currency</th>
                </tr>
            </thead>
        {transactionsList.map(item => {
            return(
                <tbody className={css.tableBody} key={item.id}>
                    <TransitionUnit 
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                </tbody>
            );
            
        })}
        </table>
    );

}

TransitionUnit.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};