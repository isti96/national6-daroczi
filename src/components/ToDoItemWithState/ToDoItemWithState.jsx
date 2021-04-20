import { Component } from "react";

export class ToDoItemWithState extends Component {
  state = {
    nrOfClick: 0,
  };

  handleIncreaseClick = () => {
      console.log("click on item");
      this.setState({nrOfClick: 1 });
  };

  render() {
    return (
      <div className="to-do-item" onClick={this.handleIncreaseClick} >
        <input type="checkbox" defaultChecked={this.props.checkValue} />
        <p>{this.props.label}</p>
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/748/748023.svg?token=exp=1618938237~hmac=cdad5d00f44b62c6cce76081ce2fa5e9"
          alt="trash"
        />
        <p>{this.state.nrOfClick}</p>
      </div>
    );
  }
}
