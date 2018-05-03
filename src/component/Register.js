import React, {Component} from 'react';
import '../css/Register.css';
class Register extends Component {
    // constructor(){
    //     super();
    // }

    render() {
        return (
            <div className="login_bg">
                <div className="register_frame">
                    <div className="register_frame">
                        <p>注册</p>
                        <input type="text" name="user_url" placeholder="用户名"/><br/><br/>
                        <input type="text" name="user_url" placeholder="6-16位密码,区分大小写"/><br/><br/>
                        <input type="text" name="user_url" placeholder="确认密码"/><br/><br/>
                        <div className="phone_number">
                            <a>+ 86</a>
                            <input type="text" name="user_url" placeholder="输入11位手机号码"/>
                        </div>
                        <br/>


                        <div className="verification_code1">
                            <input type="text" name="user_url" placeholder="输入验证码"/>
                            <button>获取验证码</button>
                        </div>
                        <br/>

                        <div className="login_registration">
                            <button>注册</button>
                            <a>使用已有账号登录</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Register;