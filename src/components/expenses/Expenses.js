import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
