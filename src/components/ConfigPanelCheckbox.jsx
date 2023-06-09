import React, { Component } from "react";

class ConfigPanelCheckbox extends Component {
  getCheckboxValue() {
    return this.refs.checkbox.value;
  }

  render() {
    return (
      <div className="configPanelCheckbox">
        <label htmlFor={this.props.label}>{this.props.label}: </label>
        <input
          id={this.props.label}
          ref="checkbox"
          type="checkbox"
          defaultChecked={this.props.value ? "checked" : ""}
          onChange={() => {
            this.props.onChange(this.getCheckboxValue());
          }}
        />
        <div className="instructions">{this.props.instructions}</div>
      </div>
    );
  }
}

export default ConfigPanelCheckbox;
