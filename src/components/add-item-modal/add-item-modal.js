import React, {Component} from 'react';
import {Form, Modal, Input, DatePicker, Select} from "antd";
import {connect} from "react-redux";
import {closeModalAddItem} from "../../actions";

const OPTIONS = ['Зайнитдинов Роберт Ринатович', 'Аксютин Павел Александрович']

class AddItemModal extends Component {
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
        const { visible, closeModalAddItem } = this.props;
        const { selectedItems } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
        return (
            <Modal
                title='Добавить задачу'
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
                        <DatePicker />
                    </Form.Item>
                    <Form.Item>
                        <Select
                            mode="multiple"
                            placeholder="Выберите сотрудников"
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
            </Modal>
        );
    }
}

const mapStateToProps = ({ modalAddItem }) => {
    return {
        visible: modalAddItem.visible
    }
}

const mapDispatchToProps = {
    closeModalAddItem
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal);