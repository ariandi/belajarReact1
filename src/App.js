import Expenses from './components/expenses/Expenses'
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css';
import {useState} from "react";

const DUMMY_EXPANSES = [
  {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
  {id: 'e2', title: 'Car Insurance', amount: 112.12, date: new Date(2021, 8, 14),},
  {id: 'e3', title: 'Power Plan', amount: 14.14, date: new Date(2020, 9, 14),},
  {id: 'e4', title: 'Shopping', amount: 12.23, date: new Date(2021, 7, 14),},
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPANSES);

  const saveExpenseDataHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={saveExpenseDataHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
