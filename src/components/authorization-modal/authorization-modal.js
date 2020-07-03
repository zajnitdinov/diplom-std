import React, {Component} from 'react';
import {Form, Input, Modal} from "antd";

class AuthorizationModal extends Component {
    state = {
        visible: true
    }
    render() {
        return (
            <Modal
                maskStyle={{
                    backgroundColor: "white",
                    filter: "blur(10px)"
                }}
                // visible={this.state.visible}
                onOk={() => {this.setState({visible: false})}}
                title='Авторизация'>
                <Form.Item>
                    <Input placeholder="Логин" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Пароль" />
                </Form.Item>
            </Modal>
        );
    }
}

export default AuthorizationModal;