import { useState } from "react";
import "./ExpensesAdd.css";

function ExpensesAddHead(props) {
  return <h2 class="enpenses-add-h2">{props.name}</h2>;
}

function AddExpenses(props) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const { handleSubmit } = props;

  const handleChange = (e) => {
    e.preventDefault();
    handleSubmit(name, cost);
    setName("");
    setCost("");
  };
  return (
    <div>
      <form
        class="row g-3"
        style={{ "margin-left": "1%" }}
        onSubmit={handleChange}
      >
        <div class="col-md-6">
          <label htmlFor="inputName" class="form-label">
            {props.names}
          </label>
          <input
            type="name"
            class="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6">
          <label htmlFor="inputPassword4" class="form-label">
            {props.value}
          </label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
            }}
          />
        </div>

        <div className="action">
          <button className="btn btn-success">Submit</button>
          <button className="btn btn-secondary" style={{"margin-left": "4%"}}>Update</button>
        </div>
      </form>
    </div>
  );
}

function AddExpensesDetail(props) {
  const { name, cost, setName, setCost, handleSubmit } = props;
  return (
    <div class="add-expen-detail">
      <ExpensesAddHead name="Add Expenses"></ExpensesAddHead>
      <AddExpenses
        name={name}
        cost={cost}
        setName={setName}
        setCost={setCost}
        handleSubmit={handleSubmit}
        names="Name"
        value="Cost"
      ></AddExpenses>
    </div>
  );
}

export default AddExpensesDetail;
