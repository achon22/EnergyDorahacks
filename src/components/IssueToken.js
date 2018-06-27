import React from 'react';
// import ReactTable from "react-table";
import 'react-table/react-table.css'


class IssueToken extends React.Component {

  submit(e) {
    e.preventDefault();
    const name = this.name.value;
    const quantity = parseInt(this.quantity.value, 10);
    const state = this.props.state;
    const instance = state.instance;

    const success = async () => {
      const totalEth = quantity * 200000000000000
      console.log(totalEth)
      console.log(quantity)
      const result = instance.registerCompany(name, quantity, { from: state.web3.eth.accounts[0], value: totalEth}).then((result) => {
        this.props.initModal(0);
        return instance.getHello();
      });
      this.props.initModal(0);
      return result
    }

    const sendTransaction = async () => {
      this.props.initModal(1);
      const result = await success();
      // this.props.updateHello(result);
      console.log(result);
    }

    sendTransaction();
  }

  render() {
    return (
      <div style={{width:'70vh', margin:'auto'}}>
        <h3> Issue Your Company's Energy Token</h3>
        <form className="token-form" onSubmit={(e) => this.submit(e)}>
        <input ref={(input) => this.name = input} type="text" className="token-input" placeholder="Token Name" />
        <input ref={(input) => this.quantity = input} type="text" className="token-input" placeholder="Number of Tokens to Issue" />
        <button type="submit" value="Submit" className="button-submit js-button-submit">Submit</button>
        </form>
        <h5>You can create an unlimited amount of tokens at a price of 5000 tokens per 1 ETH</h5>
      </div>
    )
  }

}

export default IssueToken;
