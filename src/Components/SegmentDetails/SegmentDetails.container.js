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
    schemaHandleOnChange: this.schemaHandleOnChange.bind(this),
  };

  addSchema() {
    this.setState({
      schemaCollection: [...this.state.schemaList.schema],
      selectedKey: "",
    });
  }

  schemaHandleOnChange({ currentTarget }) {
    const list = [...this.state.schemaCollection];
    list.map((res) => {
      if (res.id === +currentTarget.id) {
        res.value = currentTarget[currentTarget.selectedIndex].text;
      }
    });
    this.setState({
      schemaCollection: list,
    });
  }

  handleOnChange({ currentTarget }) {
    const { schemaList } = this.state;

    if (currentTarget.name) {
      schemaList[currentTarget.name] = currentTarget.value;
    } else {
      const schema = {};

      schema["value"] = currentTarget[currentTarget.selectedIndex].text;
      schema["id"] = schemaList?.schema?.length + 1;
      schemaList.schema.push(schema);
    }

    this.setState({
      schemaList,
      selectedKey: currentTarget.value,
    });
  }
  saveSegment() {
    const { schemaCollection } = this.state;
    const query = schemaCollection.reduce((obj, res) => {
        const key = res.value.replace(/ /g,"_").toLowerCase()
        obj[key] = res.value
        return obj
    }, {})

    let bodyObj = {
        segment_name: this.state.schemaList.segment_name,
        schema: [query]
    }
    Request(bodyObj);
  }

  render() {
    return <SegmentDetails {...this.state} {...this.containerFunctions} />;
  }
}

export default SegmentDetailsContainer;
