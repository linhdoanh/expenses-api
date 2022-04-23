import logo from "./logo.svg";
import "./App.css";
import BudgetDetal from "./Components/Budget/Budget";
import ExpensesWraper from "./Components/Expenses/Expenses";
import AddExpenses from "./Components/ExpensesAdd/ExpensesAdd";
import AddExpensesDetail from "./Components/ExpensesAdd/ExpensesAdd";
import { useEffect, useState } from "react";
import expensesAPI from "./Components/API-support/ApiExpenses";

function App() {
  const [data, setData] = useState([
    { id: "1", title: "Shopping", amount: "€50" },
    { id: "2", title: "Holiday", amount: "€300" },
    { id: "3", title: "Transportation", amount: "€70" },
    { id: "4", title: "Fuel", amount: "€40" },
    { id: "5", title: "Child Care", amount: "€500" },
  ]);

  const handleDelete = (id) => {
    // console.log(id);
    // let newDataList = [
    //   ...data.filter((item, index) => {
    //     return item.id != id;
    //   }),
    // ];
    // console.log(newDataList);
    // setData(newDataList);
    await expensesAPI.delete(id);
    const newDataList = [...data.filter((x) => x.id != id)];
    
    setData(newDataList);
  }
  const handleUpdate = () => {
    
  }

  const handleSubmit = async (name) => {
    // if (!name || !cost) return;

    // let dataId = data.length + 1;
    // let dataItem = {
    //   id: dataId,
    //   title: name,
    //   amount: cost,
    // };

    // const newDataList = [...data, dataItem];

    // setData(newDataList);
    await expensesAPI.create(name);
  };

  useEffect(() => {
    (async () => {
      try {
        const {expens} = await expensesAPI.getAll();
        setData(expens);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BudgetDetal />
      <ExpensesWraper data={data} handleDelete={handleDelete} />
      <AddExpensesDetail
        handleSubmit={handleSubmit}
      />
    </div>
  );
}


export default App;
