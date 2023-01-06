import React, { Component } from "react";

class Field extends Component {
  state = {};
  dropDownValue = [
    { id: 0, label: "Add schema to segment", value: "add_schema_to_segment" },
    { id: 1, label: "First Name", value: "first_name" },
    { id: 2, label: "Last Name", value: "last_name" },
    { id: 3, label: "Gender", value: "gender" },
    { id: 4, label: "Age", value: "age" },
    { id: 5, label: "Account Name", value: "account_name" },
    { id: 6, label: "City", value: "city" },
    { id: 7, label: "State", value: "state" },
  ];

  dropDownList() {
    const { handleOnChange, selectedKey, id } = this.props;

    return (
      <select
        className="DropDown-List"
        value={selectedKey}
        onChange={handleOnChange}
        id={id}
      >
        {this.dropDownValue.map((res, i) => {
          return (
            <option id={res.value} key={i} value={res.value}>
              {res.label}
            </option>
          );
        })}
      </select>
    );
  }

  render() {
    return <>{this.dropDownList()}</>;
  }
}

export default Field;
