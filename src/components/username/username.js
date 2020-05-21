import React, {Component} from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './username.css';


class Username extends Component {
    render() {
        return (
            <Dropdown overlay={MenuUsername}>
                <div className='username' style={{cursor: 'pointer'}}>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <span className='name'>Зайнитдинов Р.</span>
                </div>
            </Dropdown>
        );
    }
}

const MenuUsername = () => (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                Настройки
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                Админ
            </a>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                Выход
            </a>
        </Menu.Item>
    </Menu>
)


export default Username;