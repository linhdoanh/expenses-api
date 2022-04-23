import "./Expenses.css";

// var data = [
//   {id: "1", title: "Shopping", amount: "€50"},
//   {id: "2", title: "Holiday", amount: "€300"},
//   {id: "3", title: "Transportation", amount: "€70"},
//   {id: "4", title: "Fuel", amount: "€40"},
//   {id: "5", title: "Child Care", amount: "€500"}
// ];

function ExpensesHead(props) {
  return <h2 className="enpenses-h2">{props.name}</h2>;
}

function ExpensesSearch(props) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Type to search..."
    ></input>
  );
}



function ExpensesTag(props) {
  const handleDelete = props.handleDelete;
  const deleteExpenses = (id) => {
    handleDelete(id);
  }
  const handleUpdate = props.handleUpdate;
  const updateExpenses = (id) => {
    handleUpdate(id); 
  }
  return (
    <div
      className="d-flex bd-highlight"
      style={{
        "border-bottom": "2px solid #cdcdcd",
        width: "90%",
        margin: "auto",
      }}
    >
      <div class="p-2 bd-highlight">{props.id}</div>
      <div
        class="p-2 w-100 bd-highlight"
        style={{ "text-align": "left", "margin-left": "1%" }}
      >
        {props.title}
        
      </div>
      <button onClick={() => deleteExpenses(props.id)} className="btn-delete"><img src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png"/></button>
      <button onClick={() => updateExpenses(props.id)} className="btn-update"><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"/></button>
      <div
        class="p-2 flex-shrink-1 bd-highlight"
        style={{
          "background-color": "#5a92f7",
          "font-size": "70%",
          width: "4em",
          height: "fit-content",
          display: "inline-block",
          color: "#fff",
          "border-radius": "30%",
          "margin-top": "1%",
          "box-sizing": "border-box",
        }}
      >
        
        {props.amount}
      </div>
    </div>
  );
}

function ExpensesTaglist(props) {
  var expensesList = props.data.map(function (currentValue) {
    return <ExpensesTag {...currentValue} handleDelete = {props.handleDelete} handleUpdate = {currentValue.id} />;
  });
  return <div>{expensesList}</div>;
}

function ExpensesWraper(props) {
  const data = props.data;
  const handleDelete = props.handleDelete;
  const handleUpdate = props.handleUpdate;
  return (
    <div>
      <ExpensesHead name="Expenses"></ExpensesHead>
      <ExpensesSearch />
      <ExpensesTaglist data={data} handleDelete = {handleDelete} handleUpdate = {handleUpdate} />
    </div>
  );
}

export default ExpensesWraper;
