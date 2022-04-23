import './Budget.css'

function GetFirstHead(props) {
    return (
      <h1 id="h1-budget">
        {props.name}
      </h1>
    );
  }


  function BudgetDetal(props) {
    return (
      <div>
        <GetFirstHead name="My Budget Planner"></GetFirstHead>
        <div class="row justify-content-between" style={{"margin": "1%"}}>
          <BudgetList1 name="Budget" value="€2000"></BudgetList1>
          <BudgetList2 name="Remaining" value="€1040"></BudgetList2>
          <BudgetList3 name="Spent so far" value="€960"></BudgetList3>
        </div>
      </div>
    );
  }

  function BudgetList1(props) {
    return (
      <div id="budget-list-1">
        {props.name}: {props.value}
        <button id="button-budget-1">
          Edit
        </button>
      </div>
    );
  }

  function BudgetList2(props) {
    return (
      <div id="budget-list-2">
        {props.name}: {props.value}
      </div>
    );
  }

  function BudgetList3(props) {
    return (
      <div id="budget-list-3">
        {props.name}: {props.value}
      </div>
    );
  }


  export default BudgetDetal;
