import React, { Component } from "react";
import { Request } from "../../Utils/Request";
import SegmentDetails from "./SegmentDetails.component";

class SegmentDetailsContainer extends Component {
  state = {
    schemaList: {
      segment_name: "",
      schema: [],
    },
    selectedKey: "",
    schemaCollection: [],
  };

  containerFunctions = {
    handleOnChange: this.handleOnChange.bind(this),
    addSchema: this.addSchema.bind(this),
    saveSegment: this.saveSegment.bind(this),
  };

  addSchema() {
    this.setState({
      schemaCollection: [...this.state.schemaList.schema],
      selectedKey: "",
    });
  }

  handleOnChange({ currentTarget }) {
    let schemaList = { ...this.state.schemaList };
    
    if (currentTarget.name) {
      schemaList[currentTarget.name] = currentTarget.value;
    } else {
      const schema = {};
      let id = 0;

      schema[currentTarget.value] = currentTarget[currentTarget.selectedIndex].text;
      schema["id"] = id + 1;
      schemaList.schema.push(schema);
    }

    this.setState({
      schemaList,
      selectedKey: currentTarget.value,
    });
  }
  saveSegment() {
    const { schemaList } = this.state;
    Request(schemaList);
  }

  render() {
    return <SegmentDetails {...this.state} {...this.containerFunctions} />;
  }
}

export default SegmentDetailsContainer;
