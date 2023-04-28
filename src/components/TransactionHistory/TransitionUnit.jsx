import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransitionUnit.module.css';
export const TransitionUnit = ({transitionData}) => {
    return (
        <>
            <tbody className={css.tableBody} >   
            {transitionData.map(data =>(
                    <tr  className ={css.tableRow} key={data.id}>
                        <td className={css.tableData}>{data.type}</td>
                        <td className={css.tableData}>{data.amount}</td>
                        <td className={css.tableData}>{data.currency}</td>
                    </tr>
                
            ))}
            </tbody>    
        </>
    );
}

TransitionUnit.propTypes = {
    transitionData: PropTypes.array.isRequired,
    type: PropTypes.string,
    id:PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}