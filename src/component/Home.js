import React, {Component} from 'react';
import '../css/App.css';
import {Redirect} from 'react-router-dom';

let newData = [];

class Home extends Component {
    constructor() {
        super();
        let item = localStorage.getItem("one");
        let a = [];
        if (item) {
            a = newData;
        }
        this.state = {dataArray: a, redirect: false, newData: ""};
    }

    changeMsg(msg) {
        this.setState({
            data: msg
        });
    }

    updateInfo(data) {
        this.setState({
            redirect: true,
            newData: data
        });
    }

    c() {
        this.setState({
            redirect: true
        })
    }

    onClickEvent = () => {
        let value = this.refs.name.value;
        newData.push(value);
        this.setState({
            dataArray: newData
        })
    };

    render() {
        if (this.state.redirect) {
            return <Redirect
                to={{
                    pathname: '/antd',
                    oldData: {from: this.state.newData}
                }}
            />;
        }
        return <div className="App">
            <header className="App-header">
                <h1>欢迎来到1React的世界</h1>
            </header>
            <div className="content">
                <div className="left">
                    <input type="text" placeholder="请输入内容" ref="name" autoFocus="autofocus"/>
                    <button onClick={this.onClickEvent}>点击添加内容</button>
                    <button onClick={this.c.bind(this)}>点击跳转</button>
                    <div className="show_cont">内容
                        <span>(点击删除内容)</span>
                    </div>
                    <DataItem items={this.state.dataArray} updateInfo={data => this.updateInfo(data)}/>
                </div>
                <div className="center">
                    <ChangeItem changeMsg={msg => this.changeMsg(msg)}/>
                    <div className="nev_top">{this.state.data}</div>
                </div>
                <div className="right">
                    {/*<div className="nev_right">*/}
                    {/*<img src="http://www.w3school.com.cn/i/eg_tulip.jpg"/>*/}
                    {/*<div className="border-line">已设置</div>*/}
                    {/*<div className="update">修改</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    }
}

class ChangeItem extends Component {
    constructor() {
        super();
        this.state = {isLoggedIn: false};
    }

    static infoClick() {
        this.setState({
            isLoggedIn: true
        });
        this.props.changeMsg('我是详细信息')

    }

    static infoClickResult() {
        this.setState({
            isLoggedIn: false
        });
        this.props.changeMsg('我是查询结果')
    }

    render() {
        let show;
        if (!this.state.isLoggedIn) {
            show = (<div className="nev_chnage">
                <ul>
                    <li className="nev_result"><a>查询结果</a></li>
                    <li className="nev_info"><a onClick={ChangeItem.infoClick.bind(this)}>详细信息</a></li>
                </ul>
            </div>)
        } else {
            show = (<div className="nev_chnage">
                <ul>
                    <li className="nev_result_one"><a
                        onClick={ChangeItem.infoClickResult.bind(this)}>查询结果</a></li>
                    <li className="nev_info_one"><a>
                        详细信息</a></li>
                </ul>
            </div>);
        }
        return (
            show
        )
    }
}

class DataItem extends Component {
    static onItemClick(index, item) {
        // this.props.items.splice(index, 1);
        this.setState({
            // dataArray: this.props.items,
            redirect: true
        })
        this.props.updateInfo(item)
    }


    render() {
        return (
            <ul className="nev_item">
                {this.props.items.map((item, index) =>
                    (<li onClick={DataItem.onItemClick.bind(this, index, item)}>{item}</li>
                    ))}
            </ul>
        )
    }
}

export default Home;
