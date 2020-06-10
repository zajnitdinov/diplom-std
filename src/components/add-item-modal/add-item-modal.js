import React, {Component} from 'react';
import {Form, Modal, Input, DatePicker, Select} from "antd";
import {connect} from "react-redux";
import {closeModalAddItem, fetchTasks} from "../../actions";
import DatabaseService from "../../services/database-service";

const options = ['Зайнитдинов Роберт Ринатович', 'Аксютин Павел Александрович', "Козырев Юрий Владимирович", "Пекарская Татьяна Павловна"];

class AddItemModal extends Component {
    render() {
        return (
            <Task {...this.props} />
        );
    }
}

class Task extends Component {
    state = {
        selectedItems: [],
        title: '',
        description: '',
        date: '',
        loading: false,
    };
    handleOk = async () => {
        const {title, description, date} = this.state;
        let req = await fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                title, description, date: new Date(date).toUTCString(), creator: 4
            })
        })
        await this.props.fetchTasks();
        this.props.closeModalAddItem();
    }
    render(){
        const { visible, closeModalAddItem, header } = this.props;
        const h = header === 'Все задачи' ? 'Добавить задачу' : header === 'Все мероприятия' ? 'Добавить мероприятие' : 'Добавить сотрудника';
        const { selectedItems } = this.state;
        const filteredOptions = options.filter(o => !selectedItems.includes(o));
        return(
            <Modal
                title={h}
                visible={visible}
                onOk={this.handleOk}
                onCancel={closeModalAddItem}>
                <Form layout='vertical'>
                    <Form.Item>
                        <Input onChange={(e) => {this.setState({title: e.target.value})}} placeholder="Название" />
                    </Form.Item>
                    <Form.Item>
                        <Input.TextArea onChange={(e) => {this.setState({title: e.target.value})}} placeholder='Описание'/>
                    </Form.Item>
                    <Form.Item>
                        <DatePicker onChange={(date) => {this.setState({date})}}/>
                    </Form.Item>
                    <Form.Item>
                        <Select
                            mode="multiple"
                            placeholder="Выберите сотрудников"
                            value={selectedItems}
                            onChange={(selectedItems) => {this.setState({selectedItems})}}
                            style={{ width: '100%' }}
                        >
                            {filteredOptions.map(item => (
                                <Select.Option key={item} value={item}>
                                    {item}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
class Events extends Component {
    state = {
        selectedItems: [],
        title: '',
        description: '',
    };

    handleChange = selectedItems => {
        this.setState({ selectedItems });
    };

    handleOk = () => {

    }
    render() {
        const { selectedItems } = this.state;
        const filteredOptions = options.filter(o => !selectedItems.includes(o));
        return (
            <Form layout='vertical'>
                <Form.Item>
                    <Input onChange={(e) => {this.setState({title: e.target.value})}} placeholder="Название" />
                </Form.Item>
                <Form.Item>
                    <Input.TextArea onChange={(e) => {this.setState({title: e.target.value})}} placeholder='Описание'/>
                </Form.Item>
                <Form.Item>
                    <DatePicker />
                </Form.Item>
                <Form.Item>
                    <Select
                        mode="multiple"
                        placeholder="Пригласить участников"
                        value={selectedItems}
                        onChange={this.handleChange}
                        style={{ width: '100%' }}
                    >
                        {filteredOptions.map(item => (
                            <Select.Option key={item} value={item}>
                                {item}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
        )
    }
}
class Employees extends Component {
    handleChange = selectedItems => {
        this.setState({ selectedItems });
    };

    handleOk = () => {

    }
    render() {
        return (
            <Form layout='vertical'>
                <Form.Item>
                    <Input onChange={(e) => {this.setState({title: e.target.value})}} placeholder="ФИО" />
                </Form.Item>
                <Form.Item>
                    <Input.TextArea onChange={(e) => {this.setState({title: e.target.value})}} placeholder='Должность'/>
                </Form.Item>
            </Form>
        )
    }
}

const mapStateToProps = ({ modalAddItem: {visible}, content: {header} }) => {
    return {
        visible, header
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModalAddItem: () => dispatch(closeModalAddItem()),
        fetchTasks: () => fetchTasks(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal);