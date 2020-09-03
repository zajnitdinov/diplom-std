import React from 'react';
import List from "../list";
import {connect} from "react-redux";
import {Calendar} from "antd";
import data from "./data";

const Content = ({header}) => {
    const defaultList = () => {
        return(
            <div>
                <List type='events' data={data.events}/>
                <List type='tasks' data={data.tasks}/>
            </div>
        )
    }
    switch (header) {
        case 'Сегодня':
            return defaultList();
        case 'Завтра':
            return defaultList();
        case 'Неделя':
            return defaultList();
        case 'Месяц': return <Calendar/>
        case 'Все мероприятия': return <List type='events' data={data.events} admin={true}/>
        case 'Все задачи': return <List type='tasks' data={data.tasks} admin={true}/>
        case 'Все сотрудники': return <List type='employees' data={data.employees} admin={true}/>
        default:
            return defaultList();
    }
};

const mapStateToProps = ({content: {header}}) => {
    return {
        header
    }
}

export default connect(mapStateToProps)(Content);