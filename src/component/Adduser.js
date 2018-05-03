import React, {Component} from 'react';
import {Modal} from 'antd';
import '../css/Adduser.css'
class AddUser extends Component {

    render() {
        const { addUserIsShow, onCancel, onCreate} =this.props;
        return (
            <Modal  visible={addUserIsShow} >
                <div className="add_new_users">
                    <h4>新增用户</h4>

                    <div className="input_box_1">
                        <div className="user_name">
                            <a>用户名</a>

                            <input type="text" name="user_url" placeholder="请输入"/>
                        </div>

                        <div className="cell_phone_number">
                            <a><span>*</span>手机号码</a>

                            <input type="text" name="user_url" placeholder="请输入"/>
                        </div>

                        <div className="ID_number">
                            <a><span >*</span>身份证号</a>

                            <input type="text" name="user_url" placeholder="请输入"/>
                        </div>
                    </div>

                    <div className="input_box_2">
                        <div className="user_name">
                            <a>姓名</a>

                            <input type="text" name="user_url" placeholder="请输入"/>
                        </div>
                        <div className="user_name">
                            <a>邮箱(email)</a>

                            <input type="text" name="user_url" placeholder="请输入"/>
                        </div>
                        <div className="user_name">
                            <a>公司名称</a>

                            <input type="text" name="user_url" placeholder="请输入"/>
                        </div>
                    </div>

                    <div className="input_box_3">
                        <div className="user_name">
                            <a>选择地址</a>

                            <input type="text" name="user_url" placeholder="请输入公司地址"/>
                            <span>公司地址建议不少于8个字</span>
                        </div>
                        <div className="user_name">
                            <a>网址</a>

                            <input type="text" name="user_url" placeholder="请输入公司网址"/>
                        </div>
                        <div className="user_name">
                            <a>职位</a>

                            <input type="text" name="user_url" placeholder="请输入"/>
                        </div>

                    </div>
                    <div className="input_box_4">
                        <div className="new_number_2">
                            <button className="preserve" onClick={onCreate}>提交</button>
                            <button className="abolish" onClick={onCancel}>取消</button>
                        </div>
                    </div>

                </div>
            </Modal>
        )
    }
}
export default AddUser