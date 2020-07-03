import React, {Component} from 'react';
import {Space, Table} from "antd";

class EmployeesList extends Component {
    columns = [
        {
            title: 'ФИО',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Должность',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Количество задач',
            dataIndex: 'count',
            key: 'count'
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            render: () => {
                return (
                    <Space size='middle'>
                        <a href="!#">Посмотреть задачи</a>
                        <a href="!#">Изменить</a>
                        <a href="!#">Удалить</a>
                    </Space>
                )
            }
        }
    ];
    render() {
        return (
            <Table
                style={{padding: '10px', marginBottom: '20px'}}
                columns={this.columns}
                //dataSource={employees}
                pagination={false}
            />
        );
    }
}

export default EmployeesList;