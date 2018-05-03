import React, {Component} from 'react';
import {Menu, Icon, Button, Input, Table, Popconfirm, Cascader} from 'antd';
import '../css/userManger.css';
import MenuManger from "./MenuManger";
import Addrole from "./Addrole"
import Adduser from './Adduser'

const SubMenu = Menu.SubMenu;

// const MenuItemGroup = Menu.ItemGroup;

let options = [{
    value: '状态1',
    label: '状态1',

}, {
    value: '状态2',
    label: '状态2',
}];

class userManger extends Component {
    componentDidMount() {
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i,
                userCode: `Edward King ${i}`,
                userName: `李 ${i}`,
                cardId: 32,
                flag: i % 2 === 0 ? 1 : 0,
                phone: `13812345 ${i}`,
                date: '2017-9-28'
            });
        }
        this.setState({dataSource: data});

    }

    constructor(props) {
        super(props);
        this.columns = [{
            title: '用户编号',
            dataIndex: 'userCode',
        }, {
            title: '用户名称',
            dataIndex: 'userName',
        }, {
            title: '身份证',
            dataIndex: 'cardId',
        },
            {
                title: '有效标记',
                dataIndex: 'flag',
            },
            {
                title: '手机号码',
                dataIndex: 'phone',
            },
            {
                title: '创建时间',
                dataIndex: 'date',
            },
            {
                title: '操作', dataIndex: '', key: 'x',
                render: (text, record, index) => (
                    <span>
                <Popconfirm title="删除将无法恢复,是否删除?" onConfirm={() => this.onDelete(index)} okText="确认" cancelText="取消">
                <a>删除</a>
                </Popconfirm>
                <span className="ant-divider"/>
                <a onClick={this.infoManger.bind(this, index)}>信息维护
                </a>
            </span>

                ),
            }];

        this.state = {
            current: '1',
            openKeys: [],
            selectedRowKeys: [],  // Check here to configure the default column
            dataSource: [],
            isDisplay: 'block',
            isShow: 'none',
            visible: false,
            addUserIsShow: false,
            loading: false
        };

    }

    showModal = () => {
        this.setState({visible: true});
    };
    handleCancel = () => {
        this.setState({visible: false});
    };
    addUserIsShow = () => {
        this.setState({addUserIsShow: true});
    };
    addUserIsCancel = () => {
        this.setState({addUserIsShow: false});
    };

    handleCreate = () => {
        const form = this.form;

        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({visible: false});
        });


    };
    saveFormRef = (form) => {
        this.form = form;
    };
    handleClick = (e) => {
        let data = [];
        let isDisplay, isShow;
        if (e.key === '3') {
            isDisplay = 'none';
            isShow = 'block';
        } else if (e.key === '1') {
            this.columns = [{
                title: '用户编号',
                dataIndex: 'userCode',
            }, {
                title: '用户名称',
                dataIndex: 'userName',
            }, {
                title: '身份证',
                dataIndex: 'cardId',
            },
                {
                    title: '有效标记',
                    dataIndex: 'flag',
                },
                {
                    title: '手机号码',
                    dataIndex: 'phone',
                },
                {
                    title: '创建时间',
                    dataIndex: 'date',
                },
                {
                    title: '操作', dataIndex: '', key: 'x',
                    render: (text, record, index) => (
                        <span>
                <Popconfirm title="删除将无法恢复,是否删除?" onConfirm={() => this.onDelete(index)} okText="确认" cancelText="取消">
                <a>删除</a>
                </Popconfirm>
                <span className="ant-divider"/>
                <a onClick={this.infoManger.bind(this, index)}>信息维护
                </a>
            </span>

                    ),
                }];

            for (let i = 0; i < 50; i++) {
                data.push({
                    key: i,
                    userCode: `Edward King ${i}`,
                    userName: `李 ${i}`,
                    cardId: 32,
                    flag: i % 2 === 0 ? 1 : 0,
                    phone: `13812345 ${i}`,
                    date: '2017-9-28'
                });
            }

            isDisplay = 'block';
            isShow = 'none';
        } else if (e.key === '2') {
            this.columns = [{
                title: '角色编号',
                dataIndex: 'roleNum',
            }, {
                title: '父角色编号',
                dataIndex: 'roleNumSup',
            }, {
                title: '角色名称',
                dataIndex: 'roleName',
            },
                {
                    title: '创建人',
                    dataIndex: 'person',
                },

                {
                    title: '创建时间',
                    dataIndex: 'createTime',
                },
                {
                    title: '修改人',
                    dataIndex: 'changePerson',
                },
                {
                    title: '修改时间',
                    dataIndex: 'changeTime',
                },
            ];

            for (let i = 0; i < 50; i++) {
                data.push({
                    key: i,
                    roleNum: `Edward King ${i}`,
                    roleNumSup: `李 ${i}`,
                    roleName: `赵 ${i}`,
                    person: `王 ${i}`,
                    changePerson: `孙 ${i}`,
                    phone: `13812345 ${i}`,
                    createTime: '2017-9-28',
                    changeTime: '2017-9-28'
                });
            }
            isDisplay = 'block';
            isShow = 'none';
        } else {
            this.columns = [{
                title: '用户名',
                dataIndex: 'userCode',
            }, {
                title: '公司名称',
                dataIndex: 'userName',
            }, {
                title: '手机号',
                dataIndex: 'phone',
            },
                {
                    title: '状态',
                    dataIndex: 'flag',
                },
                {
                    title: '注册日期',
                    dataIndex: 'date',
                },
                {
                    title: '操作', dataIndex: '', key: 'x',
                    render: (text, record, index) => (
                        <span>
                <Popconfirm title="删除将无法恢复,是否删除?" onConfirm={() => this.onDelete(index)} okText="确认" cancelText="取消">
                <a>修改</a>
                </Popconfirm>
                <span className="ant-divider"/>
                <a onClick={this.infoManger.bind(this, index)}>审批通过
                </a>
            </span>

                    ),
                }];

            for (let i = 0; i < 50; i++) {
                data.push({
                    key: i,
                    userCode: `Edward King ${i}`,
                    userName: `李 ${i}`,
                    flag: i % 2 === 0 ? 1 : 0,
                    phone: `13812345 ${i}`,
                    date: '2017-9-28'
                });
            }

            isDisplay = 'block';
            isShow = 'none';
        }
        this.setState({current: e.key, isDisplay: isDisplay, isShow: isShow, dataSource: data});
    };
    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({openKeys: nextOpenKeys});
    };
    getAncestorKeys = (key) => {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };
    onDelete = (index) => {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({dataSource: dataSource});

    };


    btnClick(index) {
        //1-5对应用户管理  6-7角色管理  8-12菜单管理
        switch (index) {
            case 1:
                this.addUserIsShow();
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            case 6:
                this.showModal();
                break;
            case 7:

                break;
            case 8:

                break;
            case 9:

                break;
            case 10:

                break;
            case 11:

                break;
            case 12:

                break;

            default:

        }
    }

    //查询
    searchClick() {

        if (this.state.current === "1") {
            //用户管理重置

        } else if (this.state.current === "2") {
            //角色管理重置
        } else {

        }
    };

    //重置
    resetClick() {
        if (this.state.current === "1") {
            //用户管理重置

        } else if (this.state.current === "2") {
            //角色管理重置
        } else {

        }
    };

    //信息维护
    infoManger(index) {
        console.log(index);
    }

    onChange = (value) => {

    };

    render() {

        const {selectedRowKeys} = this.state;
        let changeView;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const columns = this.columns;
        if (this.state.current === "1") {
            changeView = (<div className="change-view">
                <div className="button-view">
                    <div className="space-btnView space-btnView-w400">
                        <Button type="primary" onClick={this.btnClick.bind(this, 1)}>新增</Button>
                        <Button type="danger" className="redBg" onClick={this.btnClick.bind(this, 2)}>删除</Button>
                        <Button className="grayBg" onClick={this.btnClick.bind(this, 3)}>冻结</Button>
                        <Button className="greenBg" onClick={this.btnClick.bind(this, 4)}>使用</Button>
                        <Button type="dashed" onClick={this.btnClick.bind(this, 5)}>修改密码</Button>
                    </div>
                </div>
                <div className="input-view">
                    <div className="edit-num">
                        <p>用户编号:</p>
                        <Input placeholder="用户编号"/>
                    </div>
                    <div className="edit-num">
                        <p>用户姓名:</p>
                        <Input placeholder="用户姓名"/>
                    </div>
                    <div className="edit-num">
                        <p>手机号:</p>
                        <Input placeholder="手机号"/>
                    </div>
                    <div className="search-clean">
                        <Button type="primary" onClick={this.searchClick}>查询</Button>
                        <Button onClick={this.resetClick}>重置</Button>
                    </div>
                </div>
            </div>);
        } else if (this.state.current === "2") {
            changeView = (<div className="change-view ">
                <div className="button-view">
                    <div className="space-btnView space-btnView-w150">
                        <Button type="primary" onClick={this.btnClick.bind(this, 6)}>新增</Button>
                        <Button type="danger" className="redBg" onClick={this.btnClick.bind(this, 7)}>删除</Button>
                    </div>
                </div>
                <div className="input-view">
                    <div className="edit-num">
                        <p>用户编号:</p>
                        <Input placeholder="用户编号"/>
                    </div>
                    <div className="edit-num">
                        <p>角色名称:</p>
                        <Input placeholder="角色名称"/>
                    </div>
                    <div className="search-clean">
                        <Button type="primary" onClick={this.searchClick}>查询</Button>
                        <Button onClick={this.resetClick}>重置</Button>
                    </div>
                    <div className="edit-num">
                    </div>
                </div>
            </div>);
        } else if (this.state.current === "3") {
            changeView = (<div className="change-view ">
                <div className="button-view">
                </div>
                <div className="space-btnView space-btnView-w500">
                    <Button type="primary" onClick={this.btnClick.bind(this, 8)}>添加子节点</Button>
                    <Button type="danger" className="redBg" onClick={this.btnClick.bind(this, 9)}>添加节点</Button>
                    <Button className="grayBg" onClick={this.btnClick.bind(this, 10)}>删除节点</Button>
                    <Button className="greenBg" onClick={this.btnClick.bind(this, 11)}>添加元素</Button>
                    <Button type="dashed" onClick={this.btnClick.bind(this, 12)}>删除元素</Button>
                </div>
            </div>);
        } else if (this.state.current === "4") {
            changeView = (<div className="change-view ">

                <div className="input-view">
                    <div className="edit-num">
                        <p>用户名:</p>
                        <Input placeholder="用户编号"/>
                    </div>
                    <div className="edit-num">
                        <p>状态:</p>
                        <Cascader options={options} onChange={this.onChange} placeholder="请选择" changeOnSelect
                                  style={{width: 200}}/>
                    </div>
                    <div className="search-clean">
                        <Button type="primary" onClick={this.searchClick}>查询</Button>
                        <Button onClick={this.resetClick}>重置</Button>
                    </div>
                    <div className="edit-num">
                    </div>
                </div>
            </div>);

        }

        return (
            <div className="sub-view">
                <div className="meun">
                    <Menu
                        theme="dark"
                        mode="inline"
                        openKeys={this.state.openKeys}
                        selectedKeys={[this.state.current]}
                        style={{width: 240}}
                        onOpenChange={this.onOpenChange}
                        onClick={this.handleClick}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail"/><span>系统设置</span></span>}>
                            <Menu.Item key="1">用户管理</Menu.Item>
                            <Menu.Item key="2">角色管理</Menu.Item>
                            <Menu.Item key="3">菜单管理</Menu.Item>
                            <Menu.Item key="4">审批管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>二级菜单</span></span>}>
                            <Menu.Item key="4">Option 4</Menu.Item>
                            <Menu.Item key="5">Option 5</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting"/><span>三级菜单</span></span>}>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="right-view">
                    <div>
                        <div className="user-view">
                            <div className="user-info">
                                <div className="user-infoView">1</div>
                                <div className="user-infoView1">2</div>
                                <div className="user-infoView2">3</div>
                            </div>
                        </div>
                        {changeView}
                    </div>
                    <div className="table-view">
                        <Table style={{display: this.state.isDisplay}} rowSelection={rowSelection} columns={columns}
                               dataSource={this.state.dataSource} loading={this.state.loading}/>
                        <div style={{display: this.state.isShow}}>
                            <MenuManger/>

                        </div>
                    </div>

                </div>
                <Addrole
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                <Adduser
                    addUserIsShow={this.state.addUserIsShow}
                    onCancel={this.addUserIsCancel}
                    onCreate={this.addUserIsCancel}
                />

            </div>

        )
    }
}

export default userManger;