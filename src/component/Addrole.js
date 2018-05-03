import React, {Component} from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;
class Addrole extends Component{


    render(){
        const { visible, onCancel, onCreate, form } =this.props;
        const { getFieldDecorator } = form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 100 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 100 },
                sm: { span: 6 },
            },
        };
        return(
            <Modal title="增加角色" visible={visible} onOk={onCreate} onCancel={onCancel} okText="提交" cancelText="取消" width={500}>
                <Form >
                    <FormItem label="角色编号" {...formItemLayout}>

                        {getFieldDecorator('roleNum', {
                            // rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input  placeholder="角色编号"/>
                        )}
                    </FormItem>
                    <FormItem label="父角色编号" {...formItemLayout}>

                        {getFieldDecorator('roleNumS', {
                            // rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input  placeholder="父角色编号" />
                        )}
                    </FormItem>
                    <FormItem label="角色名称" {...formItemLayout}>

                        {getFieldDecorator('roleName', {
                            // rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input  placeholder="角色名称" />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

const addRole = Form.create()(Addrole);
export default addRole;