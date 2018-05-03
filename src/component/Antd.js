import React, {Component} from 'react';
import '../css/Antd.css';
import requestPost from '../utils/request';

import {Breadcrumb, Button, Collapse, Icon, Menu, Modal, Table, Tabs} from 'antd';
import createHistory from 'history/createHashHistory';
const history = createHistory();
const TabPane = Tabs.TabPane;
const {Column} = Table;
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;
const data = [{
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: '测试地址One',
    other: '11111'
}, {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: '测试地址Two',
    other: '22222'
}, {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: '测试地址Three',
    other: '33333'
}];

class Antd extends Component {


    constructor(props) {
        super();
        this.state = {
            current: 'mail',
            content: '选项一的内容',
            message: '',
            visible: false,
            error: false
        }
    }
    componentDidMount(){

    }

    callback(key) {
        console.log(key);
    }

    // handleClick = (e) => {
    //     alert(e);
    //     console.log('click ', e);
    //     this.setState({
    //         current: e.key,
    //     });
    // }
    handleClick(index) {
        let number = 1;
        switch (index) {
            case 1:
                number = "选项一的内容";
                break;
            case 2:
                number = "选项二的内容";
                break;
            case  3:
                number = "选项三的内容";
                break;
            case 4:
                number = "选项四的内容";
                break;
            default:
                number = "选项一的内容";
        }
        this.setState({
            content: number
        })
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    query() {
        history.push('/two');
        let params = {
            userCode: '1',
            password: '111111'
        };
        let that = this;
        requestPost.post('/Test', params, function (result, response) {
            if (result) {
                that.setState({
                    message: JSON.stringify(response.data[0])
                })
            } else {
                that.setState({
                    visible: true
                })
            }
        });
    }

    render() {
        return (<Tabs defaultActiveKey="1">
            <TabPane tab="显示表格" key="1">
                <Table dataSource={data}>
                    <Column
                        title="年龄"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="住址"
                        dataIndex="address"
                        key="address"
                    />
                    <Column
                        title="其他"
                        dataIndex="other"
                        key="other"
                    />
                </Table>
                <Button onClick={this.query.bind(this)}>点击网络请求</Button>
                <Modal title="提示" visible={this.state.visible}
                       onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>请求失败</p>
                </Modal>
                <div className='nev_netWork'>{this.state.message}</div>
            </TabPane>
            <TabPane tab="显示折叠菜单" key="2">
                <Collapse defaultActiveKey={[]} onChange={this.callback}>
                    <Panel header="一级菜单（One）" key="1">
                        <p>这是一级菜单下面的内容</p>
                    </Panel>
                    <Panel header="二级菜单（Two）" key="2">
                        <p>这是二级菜单下面的内容</p>
                    </Panel>
                    <Panel header="三级菜单（Three）" key="3">
                        <p>这是三级菜单下的内容</p>
                    </Panel>
                </Collapse>
            </TabPane>
            <TabPane tab="页面 3" key="3">
                <div className="ant-layout-aside">
                    <aside className="ant-layout-sider">
                        <Menu mode="inline"
                              defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                            <SubMenu key="sub1" title={<span><Icon type="user"/>导航一</span>}>
                                <Menu.Item key="1"><span
                                    onClick={this.handleClick.bind(this, 1)}>选项1</span></Menu.Item>
                                <Menu.Item key="2"><span
                                    onClick={this.handleClick.bind(this, 2)}>选项2</span></Menu.Item>
                                <Menu.Item key="3"><span
                                    onClick={this.handleClick.bind(this, 3)}>选项3</span></Menu.Item>
                                <Menu.Item key="4"><span
                                    onClick={this.handleClick.bind(this, 4)}>选项4</span></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop"/>导航二</span>}>
                                <Menu.Item key="5">选项5</Menu.Item>
                                <Menu.Item key="6">选项6</Menu.Item>
                                <Menu.Item key="7">选项7</Menu.Item>
                                <Menu.Item key="8">选项8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/>导航三</span>}>
                                <Menu.Item key="9">选项9</Menu.Item>
                                <Menu.Item key="10">选项10</Menu.Item>
                                <Menu.Item key="11">选项11</Menu.Item>
                                <Menu.Item key="12">选项12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/>导航四</span>}>
                                <Menu.Item key="9">选项9</Menu.Item>
                                <Menu.Item key="10">选项10</Menu.Item>
                                <Menu.Item key="11">选项11</Menu.Item>
                                <Menu.Item key="12">选项12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/>导航五</span>}>
                                <Menu.Item key="9">选项9</Menu.Item>
                                <Menu.Item key="10">选项10</Menu.Item>
                                <Menu.Item key="11">选项11</Menu.Item>
                                <Menu.Item key="12">选项12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/>导航六</span>}>
                                <Menu.Item key="9">选项9</Menu.Item>
                                <Menu.Item key="10">选项10</Menu.Item>
                                <Menu.Item key="11">选项11</Menu.Item>
                                <Menu.Item key="12">选项12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/>导航七</span>}>
                                <Menu.Item key="9">选项9</Menu.Item>
                                <Menu.Item key="10">选项10</Menu.Item>
                                <Menu.Item key="11">选项11</Menu.Item>
                                <Menu.Item key="12">选项12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </aside>
                    <div className="ant-layout-main">
                        <div className="ant-layout-breadcrumb">
                            <Breadcrumb>
                                <Breadcrumb.Item><span className="dev_home">Home</span></Breadcrumb.Item>
                                <Breadcrumb.Item>我的工作台</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="ant-layout-container">
                            <div className="ant-layout-content">
                                {this.state.content}
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane tab="页面 4" key="4">Content of Tab Pane 4</TabPane>
            <TabPane tab="页面 5" key="5">Content of Tab Pane 5</TabPane>
            <TabPane tab="页面 6" key="6">Content of Tab Pane 6</TabPane>
        </Tabs>)
    }
}

export default Antd;
