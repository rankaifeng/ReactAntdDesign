import React, {Component} from 'react';
import {Button, Icon, Menu, Table, Input} from 'antd';

const SubMenu = Menu.SubMenu;
// const FormItem = Form.Item;

class MenuManger extends Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '页面元素ID',
            dataIndex: 'userCode',
        }, {
            title: '页面元素名称',
            dataIndex: 'userName',
        }, {
            title: '菜单编号',
            dataIndex: 'cardId',
        },
            {
                title: '页面描述',
                dataIndex: 'flag',
            },
        ];
        this.state = {
            newDatas: []
        }
    }

    componentDidMount() {
        const data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i,
                userCode: `Edward King ${i}`,
                userName: `李 ${i}`,
                cardId: 32,
                flag: i % 2 === 0 ? 1 : 0,
            });
        }
        this.setState({newDatas: data});
    }

    render() {
        const columns = this.columns;
        return (
            <div className="menu_dev">
                <div className="menu_dev_left">
                    <div className="menu_dev_left_top">
                        <Menu
                            theme="dark"
                            onClick={this.handleClick}
                            style={{width: 270}}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>系统设置</span></span>}>
                                <Menu.Item key="1">用户管理</Menu.Item>
                                <Menu.Item key="2">角色管理</Menu.Item>
                                <Menu.Item key="3">菜单管理</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="menu_dev_left_bottom">
                        <Menu
                            theme="dark"
                            onClick={this.handleClick}
                            style={{width: 270}}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>基础模块</span></span>}>
                                <Menu.Item key="1">二级菜单</Menu.Item>
                                <Menu.Item key="2">二级菜单</Menu.Item>
                                <Menu.Item key="3">二级菜单</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
                <div className="menu_dev_right">
                    <div className="menu_dev_right_save">
                        <div className="edit-num">
                            <p>用户编号:</p>
                            <Input placeholder="用户编号"/>
                        </div>
                        <div className="edit-num">
                            <p>角色名称:</p>
                            <Input placeholder="角色名称"/>
                        </div>
                        <div className="edit-num">
                            <p>角色名称:</p>
                            <Input placeholder="角色名称"/>
                        </div>
                        <div className="search-clean">
                            <Button type="primary">保存</Button>
                        </div>
                    </div>
                    <div className="menu_dev_right_bottom">
                        <Table className="menu_dev_right_table" columns={columns}
                               dataSource={this.state.newDatas}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuManger;

