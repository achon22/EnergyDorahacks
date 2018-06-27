import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import 'antd/dist/antd.css';

import '../css/Home.css'

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
        <Layout>
          <Header className="header">
            <div className="logo" />⚡️ NRG Energy Exchange ⚡️
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="0"><a href="/"><Icon type="pie-chart" />Analytics</a></Menu.Item>
              <Menu.Item key="1"><a href="/dashboard"><Icon type="folder" /> Dashboard</a></Menu.Item>
              <Menu.Item key="2"><a href="/marketplace"><Icon type="appstore" /> Marketplace</a></Menu.Item>
              <Menu.Item key="3"><Icon type="code-o" /> Whitepaper</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" />Transactions</span>}>
                    <Menu.Item key="1">Bulk Buy</Menu.Item>
                    <Menu.Item key="2">Bulk Sell</Menu.Item>
                    <Menu.Item key="3">Buy</Menu.Item>
                    <Menu.Item key="4">Sell</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" />Network Trading</span>}>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="notification" />Announcements</span>}>
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <h2>Dashboard</h2>
                <div>Your contract address is: <span className="contract-address">{this.state.contractAddress}</span></div>
                <IssueToken  state={this.state} initModal={this.initModal}/>
                <Row gutter={16}>
                  <Col span={8}>
                    <Card title="Solar Coins" extra={<a href="#">45 SLC</a>} actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>496 tokens issued by SolarCity</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Wind Coins" extra={<a href="#">4588 ZZL</a>} actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>5066 tokens issued by WindZZLo</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Solar Coins" extra={<a href="#">45 SLC</a>} actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>496 tokens issued by SolarCity</Card>
                  </Col>
                </Row>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            2018 &copy; Created with <span><Icon type="heart" /></span> by Albert Chon, Aditya Khandelwal at Stanford, CA
          </Footer>
        </Layout>
    );
  }
}

export default Dashboard
