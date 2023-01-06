import React, { Component } from "react";
import Field from "../Field/Field.component";
import "./SegmentDetails.style.scss";

class SegmentDetails extends Component {

  renderInput() {
    const { handleOnChange } = this.props;

    return (
      <div className="Input-Wrapper">
        <label className="Label">Enter the name of the Segment</label>
        <input
          className="Input"
          name="segment_name"
          placeholder="Name of the segment"
          onChange={handleOnChange}
        />
        <p className="Description">
          To save your segment, you need to add the schemas to build the query
        </p>
      </div>
    );
  }

  dropDownList(key = "") {
    const { handleOnChange } = this.props;

    return (
      <select className="DropDown-List" value={key} onChange={handleOnChange}>
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

  addSchemaScript() {
    const { addSchema } = this.props;

    return (
      <p className="AddNew-Schema" onClick={addSchema}>
        + Add new schema
      </p>
    );
  }

  renderSchema() {
    const { schemaCollection, handleOnChange } = this.props;
    return (
      <>
        {schemaCollection?.length > 0 && (
          <div className="SchemaList-Wrapper">
            {schemaCollection?.map((res, i) => {
              const key = Object.keys(res);
              return (
                <div key={i} className="SchemaList-Container">
                  <Field selectedKey={key[0]} handleOnChange={handleOnChange} />
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }

  render() {
    const { selectedKey, saveSegment, handleOnChange } = this.props;

    return (
      <div className="SegmentDetails-Container">
        <div className="Title">{"< Save Segment"}</div>
        {this.renderInput()}
        {this.renderSchema()}
        <div className="DropDown-Container">
          <Field selectedKey={selectedKey} handleOnChange={handleOnChange} />
        </div>
        {this.addSchemaScript()}
        <div className="Button-Wrapper">
          <button className="Save-btn" onClick={saveSegment}>
            Save the Segment
          </button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    );
  }
}

export default SegmentDetails;
