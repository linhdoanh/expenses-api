import React from 'react';

export default function ExpensesUpdate(props) {
    const {name, setName, cost, setCost, id, updateExpenese} = props;
    const handleChange = (e) => {
        updateExpenese();
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
            Name
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
            Cost
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
          <button type='submit' className="btn btn-secondary" style={{"margin-left": "4%"}}>Update</button>
        </div>
      </form>
    </div>
  );
}
