import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import getWeb3 from '../utils/getWeb3'


class Balance extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = this.props.state;
    console.log(this.state)
  }
  render() {
    // Token class name, token class amount
    const getBalance = async() => {
      const address = this.state.web3.eth.accounts[0];
      this.instance.classesOwned.call(address).then(classes => {
        console.log(classes);
      });

      // const result = instance.classesOwned(address).then(classes => {
      //   console.log('classes for ' + address + ' are ');
      //   console.log(classes)
      //   // classes = classes.filter(classId => classId != 0);
      //   instance.test(classes).then(console.log('yay'))
      //   let classBalances = []
      //   // for (var i = 0; i < classes.length; i++){
      //   //   name = 'need to call this.props.state.instance.className(classes[i])'
      //   //   balance = 'balanceOf(address, classes[i])'
      //   //   classBalances.push({'name': name, 'balance': balance})
      //   // }
      //   return classBalances
      // })
    }
    const data = [{
      name: 'PNG Coin',
      friend: {
        age: 23,
      }
    }, {
      name: 'PNG Coin',
      friend: {
        age: 23,
      }
    }]

    const columns = [{
      Header: 'Energy Coin',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: props => <span>Balance</span>, // Custom header components!
      accessor: 'friend.age'
      }]
    const balance = getBalance();
    console.log(balance);
    return(
      <div>
      <h3 style={{width:'70vh', margin:'auto'}}>User Balance</h3>
      <div style={{width:'70vh', margin:'auto'}}>
        <ReactTable
          data={data}
          columns={columns}
          showPagination={false}
          defaultPageSize={data.length}
        />
      </div>
      </div>
    )
  }

}

export default Balance;
