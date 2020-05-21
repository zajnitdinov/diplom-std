import React, {Component} from 'react';
import {Divider, Menu as AntMenu} from "antd";
import AddItemButton from "../add-item-button";
import {connect} from "react-redux";
import {SettingOutlined} from '@ant-design/icons';
import {toggleMenuItem} from "../../actions";

const menuUserItems = ['Сегодня', 'Завтра', 'Неделя', 'Месяц'];
const menuAdminItems = ['Все задачи', 'Все мероприятия', 'Все сотрудники'];

class Menu extends Component {
    render() {
        const {toggleMenuItem} = this.props;
        return (
            <AntMenu>
                {menuUserItems.map(item => (
                    <AntMenu.Item onClick={() => toggleMenuItem(item)}>{item}</AntMenu.Item>
                ))}
                <Divider orientation='left'><SettingOutlined /></Divider>
                {menuAdminItems.map(item => (
                    <AntMenu.Item onClick={() => toggleMenuItem(item)}>{item}</AntMenu.Item>
                ))}
                <AddItemButton/>
            </AntMenu>
        );
    }
}

const mapDispatchToProps = {
    toggleMenuItem
}

export default connect(null, mapDispatchToProps)(Menu);