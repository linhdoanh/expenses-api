import "./App.css";
import BudgetDetal from "./Components/Budget/Budget";
import ExpensesWraper from "./Components/Expenses/Expenses";
import AddExpensesDetail from "./Components/ExpensesAdd/ExpensesAdd";
import { useEffect, useState } from "react";
import expensesAPI from "./Components/API-support/ApiExpenses";
import ExpensesUpdate from "./Components/ExpensesUpdate/ExpensesUpdate";

function App() {
  const [expenses, setExpense] = useState([]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  let id = null;

  const handleDelete = async (id) => {
    // console.log(id);
    // let newDataList = [
    //   ...data.filter((item, index) => {
    //     return item.id != id;
    //   }),
    // ];
    // console.log(newDataList);
    // setData(newDataList);
    await expensesAPI.delete(id);
    const newDataList = [...expenses.filter((x) => x.id !== id)];
    
    setExpense(newDataList);
  }

  let currentExpen;
  const handleUpdate = async (id) => {
    const currentExpen2 = expenses.find(function(item) {
      return item.id === id;
    })
    console.log(currentExpen2);
    setName(currentExpen2.title);
    setCost(currentExpen2.amount);
    id = currentExpen2.id;
    currentExpen = {...currentExpen2};
  }
  console.log(currentExpen);
  const updateExpenese = async () => {
    await expensesAPI.update(id, {createdAt: "2022-04-24T05:20:47.910Z", tag: "tag 51",id: 51 ,title: name, amount: cost});
  }

  const handleSubmit = async (formAddValue) => {
    // if (!name || !cost) return;

    // let dataId = data.length + 1;
    // let dataItem = {
    //   id: dataId,
    //   title: name,
    //   amount: cost,
    // };

    // const newDataList = [...data, dataItem];

    // setData(newDataList);
    await expensesAPI.create(formAddValue);
  };

  useEffect(() => {
    (async () => {
      try {
        const {data} = await expensesAPI.getAll();
        setExpense(data);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [expenses]);

  return (
    <div className="App">
      <BudgetDetal />
      <ExpensesWraper data={expenses} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      <AddExpensesDetail
        handleSubmit={handleSubmit}
      />
      <ExpensesUpdate name={name} cost={cost} setName={setName} setCost={setCost} id={id} updateExpenese={updateExpenese} />
    </div>
  );
}


export default App;
