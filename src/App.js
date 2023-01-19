import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 269.58,
      date: new Date(2022, 4, 18),
    },
    {
      id: "e2",
      title: "Bike Insurance",
      amount: 46.58,
      date: new Date(2023, 4, 18),
    },
    {
      id: "e3",
      title: "Vechile Insurance",
      amount: 560.58,
      date: new Date(2012, 4, 18),
    },
    {
      id: "e4",
      title: "Bus Insurance",
      amount: 1790.58,
      date: new Date(2022, 8, 18),
    },
    {
      id: "e5",
      title: "personal Insurance",
      amount: 1590.58,
      date: new Date(2012, 8, 18),
    },
  ];
  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
