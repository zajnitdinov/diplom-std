import React, {Component} from 'react';
import {Divider, Menu as AntMenu} from "antd";
import {connect} from "react-redux";
import {toggleMenuItem} from "../../actions";

const menuUserItems = ['Сегодня', 'Завтра', 'Неделя', 'Месяц'];
const menuAdminItems = ['Все задачи', 'Все мероприятия', 'Все сотрудники'];

class Menu extends Component {
    render() {
        const {toggleMenuItem} = this.props;
        return (
            <AntMenu>
                {menuUserItems.map((item, idx) => (
                    <AntMenu.Item key={idx} onClick={() => toggleMenuItem(item)}>
                        {item}
                    </AntMenu.Item>
                ))}
                <Divider/>
                {menuAdminItems.map((item, idx) => (
                    <AntMenu.Item  key={idx+4} onClick={() => toggleMenuItem(item)}>
                        {item}
                    </AntMenu.Item>
                ))}
            </AntMenu>
        );
    }
}

const mapDispatchToProps = {
    toggleMenuItem
}

export default connect(null, mapDispatchToProps)(Menu);