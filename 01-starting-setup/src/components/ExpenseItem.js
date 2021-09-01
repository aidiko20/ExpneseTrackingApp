import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div>May 23 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
        </div>
    );
}

export default ExpenseItem;