import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem
            key={id}
            title={title}
            amount={amount}
            date={date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default Expenses;
