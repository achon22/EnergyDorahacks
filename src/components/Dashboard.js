import React, { Component } from 'react'
import MCFTContract from '../../build/contracts/MCFTEnergyTokenContract.json'
import getWeb3 from '../utils/getWeb3'
import MCFTBytecode from '../utils/MCFT'  // eslint-disable-line


// ^^ Import our components.
import ContractInput from './ContractInput'
import Modal from './Modal'
import IssueToken from './IssueToken'
// import Balance from './components/Balance'
import ReactTable from "react-table";
import 'react-table/react-table.css'
import Header from './Header'

// ^^ Import our fonts and CSS.
import '../css/roboto.css'
import '../css/rubik.css'
import '../css/milligram.min.css'
import '../App.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.updateHello = this.updateHello.bind(this);
    this.initModal = this.initModal.bind(this);
    this.updateClassTable = this.updateClassTable.bind(this)

    // ^^ Change initial states and add new ones here.
    this.state = {
      hello: "I'm waiting to say hello...",
      contractAddress: "Waiting on contract address...",
      modal: 0,
      instance: null,
      web3: null,
      tableData: [{
        name: 'PNG Coin',
        friend: {
          age: 23,
        }
      }, {
        name: 'PNG Coin',
        friend: {
          age: 23,
        }
      }],
      columns: [{
        Header: 'Energy Coin',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: props => <span>Balance</span>, // Custom header components!
        accessor: 'friend.age'
        }],
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const helloWorld = contract(MCFTContract)
    let helloWorldInstance
    helloWorld.setProvider(this.state.web3.currentProvider)

    helloWorld.deployed().then((instance) => {
      helloWorldInstance = instance
      this.setState({ instance: helloWorldInstance })

      /* ^^ Uncomment the line below see all the cool things
       * in our first contract!
       */
      //console.log(helloWorldInstance);

      /* ^^ To see the bytecode of our contract, uncomment this below.
       * The Metamask web3 wrapper requires a callback function.
       */
      //helloWorldBytecode(helloWorldInstance, this.state.web3);

      // ^^ Display the address of our smart contract.
      this.setState({ contractAddress: helloWorldInstance.address })

      /* ^^ Display our default Hello World message from HelloWorld.sol
       * Once you change the default message, you will need to truffle migrate --reset
       * to see the original message again.
       */
      return helloWorldInstance.getHello()

    }).then((result) => {
      return this.setState({ hello: result })
    })

    helloWorld.deployed().then((instance) => {
      helloWorldInstance = instance;
      return [{name: 'PNG Coin',friend: {age: 23,}}, {
            name: 'RPG Coin',
            friend: {
              age: 23,
            }
          }]
    }).then((result) => {
      return this.setState({tableData: result})
    })
  }

  updateHello(message) {
    this.setState({
      hello: message
    })
  }

  initModal(value) {
    this.setState({
      modal: value
    })
  }

  updateClassTable(tokenClasses) {
    this.setState({
      tableData: tokenClasses
    })
  }

render() {
    return (
      <div className="App">
        <Header/>
        {/* <div className="top-bar">
          <a href="#" className="title-link">🍕 Ethereum and React</a>
          <div className="notice-box">Looks like Truffle React Box is up and running 👍👍</div>
        </div> */}

        <main className="container">
          <h1>Hello World</h1>
          <h2>Our First Smart Contract</h2>
          <div className="contract-status">
            <p>If your contracts compiled and migrated successfully, we'll show your contract address and the hello message below.</p>
            <div>Your contract address is: <span className="contract-address">{this.state.contractAddress}</span></div>
          </div>
          <p className="message">The hello message from your contract is: <strong className="hello-world">{this.state.hello}</strong></p>
          <ContractInput state={this.state} updateHello={this.updateHello} initModal={this.initModal} />
          {/* <Balance state={this.state} initModal={this.initModal}/> */}
          <h3 style={{width:'70vh', margin:'auto'}}>User Balance</h3>
          <div style={{width:'70vh', margin:'auto'}}>
            <ReactTable
              data={this.state.tableData}
              columns={this.state.columns}
              showPagination={false}
              defaultPageSize={this.state.tableData.length}
            />
          </div>
          <IssueToken  state={this.state} initModal={this.initModal}/>
        </main>
        <Modal modal={this.state.modal} />
      </div>
    );
  }
}

export default Dashboard
