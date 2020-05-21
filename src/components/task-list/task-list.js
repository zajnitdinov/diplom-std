import React, {Component} from 'react';
import {List} from 'antd';
import TaskListItem from "../task-list-item";
import DatabaseService from "../../services/database-service";

class TaskList extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        const db = new DatabaseService();
        db.getTasks()
            .then((data) => this.setState({tasks: data}));
    }

    render() {
        const {tasks} = this.state;
        return (
            <List
                size='large'
                style={{margin: 10}}
                bordered
                dataSource={tasks}
                renderItem={task => <TaskListItem task={task}/>}
            />
        );
    }
}

export default TaskList;