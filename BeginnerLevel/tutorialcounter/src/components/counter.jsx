import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    products: ["product1", "product2", "product3", "product4"]
  };

  renderProducts() {
    if (this.state.products.length === 0) return <p>There is No Data !</p>;
    return (
      <ul className="list-group">
        {this.state.products.map(product => {
          return (
            <li key={product} className="list-group-item">
              {product}
            </li>
          );
        })}
      </ul>
    );
  }
  handleIncrement = product => {
    console.log(product);
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <React.Fragment>
        <h2 className={this.getState()}>{this.formatCounter()}</h2>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div className="row mt-4 ">
          <div className="col-4">{this.renderProducts()}</div>
        </div>
      </React.Fragment>
    );
  }
  getState() {
    let classes = "badge mr-3 badge-";
    classes += this.state.count === 0 ? "danger" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
