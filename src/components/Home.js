import React, {Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Card, Col, Row } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import 'antd/dist/antd.css';

import '../css/Home.css'

class Home extends Component {
  render() {
    return (
        <Layout>
          <Header className="header">
            <div className="logo" />⚡️ NRG Energy Exchange ⚡️
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['0']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="0"><Icon type="pie-chart" /> Analytics</Menu.Item>
              <Menu.Item key="1"><a href="/dashboard"><Icon type="folder" /> Dashboard</a></Menu.Item>
              <Menu.Item key="2"><Icon type="appstore" /> Marketplace</Menu.Item>
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
                  <SubMenu key="sub1" title={<span><Icon type="user" />User Account</span>}>
                    <Menu.Item key="1">Tokens</Menu.Item>
                    <Menu.Item key="2">Purchases</Menu.Item>
                    <Menu.Item key="3">Most Valuable</Menu.Item>
                    <Menu.Item key="4">Least Valuable</Menu.Item>
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
                <h2>Make Earth Great Again!</h2>
                <p>Thanks for contributing towards your responsibility to leave the Earth a better place than you found it. Use our tools to trade your renewable energy resources with big energy companies, businesses, governments...and even your neighbours. All your transactions are recorded in a global, decentralized ledger for maximum security and transparency. </p>
                <h4> What's more? </h4>
                <p> We use a state-of-the-art, proprietary MCFT token technology to tranfer energy resources from one owner to the next. Solar is the new gas. Are you ready for the revolution?</p>
                <Row gutter={16}>
                  <Col span={8}>
                    <Card title="Versatile" bordered={true}>Tested against vulnerabilities.</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Trustless" bordered={true}>Eliminate fraudulent players.</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Cutting-edge" bordered={true}>21st century technology stack.</Card>
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

export default Home;
