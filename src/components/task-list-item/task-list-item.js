import React, {Component} from 'react';
import {List, Checkbox} from "antd";
import {connect} from 'react-redux';
import {openInfo} from '../../actions';

class TaskListItem extends Component {
    render() {
        const { task, openInfo } = this.props;
        return (
            <List.Item onClick={openInfo}>
                <Checkbox/>
                <span style={{ width: '100%', marginLeft: 20 }}> {task.title} </span>
            </List.Item>
        );
    }
}

const mapDispatchToProps = {
    openInfo
}

export default connect(null, mapDispatchToProps)(TaskListItem);