import React, {Component} from 'react';
import '../css/login.css';
// import {Redirect, Link, Route} from 'react-router-dom';
import {
    Button,
    Form,
    Icon,
    Input,
    message,
    Spin,
    Tabs,
    Checkbox
} from 'antd';
import requestPost from '../utils/request';
import createHistory from 'history/createHashHistory';

const history = createHistory();
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Login extends Component {

    // getInitialState(){
    //     return {
    //         tabIndex:''
    //     }
    // }
    componentDidMount() {

    }

    constructor() {
        super();
        this.state = {
            isChange: false,
            isShow: 'none',
            tabIndex: '1',
            phoneText: '',
            codeText: '',
            loading: false,
            loginBtnText:"登录"
        }
    }

    loginClick = (e) => {
        e.preventDefault();
        this.setState({
            loading: true,
            loginBtnText:"登录中..."
        });

        setTimeout(() =>
            history.push('/userManger'), 2000
        );

    //     if (this.state.tabIndex === "1") {
    //         //账户密码登录
    //         this.props.form.validateFields((err, values) => {
    //             if (!err) {
    //
    //                 requestPost.post('/userLogin', values, function (result, response) {
    //                     if (result) {
    //                         // message.info(response.msg);
    //                         history.push('antd');
    //                         alert("1111");
    //                     } else {
    //                         message.info("登陆失败！");
    //                     }
    //
    //                 });
    //             }
    //         });
    //     } else {
    //         //手机号登录
    //         console.log(this.state.phoneText);
    //         console.log(this.state.codeText)
    //     }
    //     // let that = this;
    //     // console.log(this.state.tabIndex)
    //
    };

    callback = (key) => {
        this.setState({
            tabIndex: key
        });
        console.log(this.state.tabIndex)
    };
    phoneChange = (e) => {
        this.setState({
            phoneText: e.target.value
        })
    };
    codeChange = (e) => {
        this.setState({
            codeText: e.target.value
        })

    };

    ChangeCheckbox(e) {
        console.log(`checked = ${e.target.checked}`);

    }

    forgetPwd() {
        console.log("忘记密码")
    }

    registerClick() {
        console.log("注册")
        history.push('/register')
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        // if (this.state.isChange) {
        //     return <Redirect
        //         to={{
        //             pathname: '/antd',
        //             oldData: {from: this.state.newData}
        //         }}
        //     />;
        // }
        let acount = (<div className="dev_userLogin">
            <Form layout="inline">

                <FormItem>
                    {getFieldDecorator('userCode', {
                        // rules: [{required: true, message: '用户名不能为空!'}],
                    })(
                        <Input className="userName"
                               prefix={<Icon type="user" style={{fontSize: 13, color: '#88c6ff'}}/>}
                               autoFocus="autoFocus"
                               placeholder="请输入用户名"/>
                    )}
                </FormItem>

                <FormItem className="t">
                    {getFieldDecorator('password', {
                        // rules: [{required: true, message: '密码不能为空!'}],
                    })(
                        <Input className="userName"
                               prefix={<Icon type="lock" style={{fontSize: 13, color: '#88c6ff'}}/>}
                               type="password"
                               placeholder="请输入密码"/>
                    )}
                </FormItem>
                <FormItem>
                </FormItem>
            </Form>
        </div>);
        let phone = (
            <div className="dev_userLogin">
                <div className="phoneView">
                    <Input className="userName"
                           placeholder="手机号"
                           prefix={<Icon type="user" style={{fontSize: 13, color: '#88c6ff'}}/>}
                           ref="Phone"
                           onChange={this.phoneChange}
                    />
                </div>
                <div className="verificationCodeView">
                    <Input className="userName"
                           placeholder="验证码"
                           prefix={<Icon type="user" style={{fontSize: 13, color: '#88c6ff'}}/>}
                           onChange={this.codeChange}
                    />
                    <Button>验证码</Button>
                </div>

            </div>
        );

        return (
            <div className="login_bg">
                <div style={{'display': this.state.isShow}}>
                    <div className="bottom_loading">
                        <div className='dev_loading'>
                            <div className="dev1_loading">
                                <Spin spinning={true} size="large" delay={500}/>
                                Loading
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dev_login">
                    <div className="dev_login_log">
                        <img src={require('../img/logoOuyeel.png')} alt="22"/>
                    </div>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="账号密码登录" key="1">{acount}
                        </TabPane>
                        <TabPane tab="手机号登陆" key="2">
                            {phone}
                        </TabPane>
                    </Tabs>
                    <div className="common">
                        <div className="login-forget">
                            <div className="loginCheck">
                                <Checkbox onChange={this.ChangeCheckbox}>自动登陆</Checkbox>
                            </div>
                            <div className="forgetPassWord" onClick={this.forgetPwd}>
                                忘记密码
                            </div>
                        </div>
                        <div className="loginBtnSub">
                            <Button className="btn_login" onClick={this.loginClick}
                                    type="primary" loading={this.state.loading}
                            >
                                {this.state.loginBtnText}
                            </Button>
                            <div className="regist" onClick={this.registerClick}>前往注册</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const login = Form.create()(Login);
export default login;
