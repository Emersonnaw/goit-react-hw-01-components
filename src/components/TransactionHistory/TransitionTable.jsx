import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransitionTable.module.css'
import {TransitionUnit} from 'components/TransactionHistory/TransitionUnit';
export const TransitionTable = ({transactionsList}) => {
    return (
        <table className={css.transactionHistory}>
            <thead >
                <tr className={css.tableRow}>
                <th className={css.tableHeader}>Type</th>
                <th className={css.tableHeader}>Amount</th>
                <th className={css.tableHeader}>Currency</th>
                </tr>
            </thead>


            <TransitionUnit 
            transitionData= {transactionsList}
            />

        </table>
    );

}

TransitionTable.propTypes = {
    transactionsList: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string,
        label: PropTypes.string,
        percentage:PropTypes.number,
    })).isRequired
};