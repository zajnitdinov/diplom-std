import React, {Component} from 'react';
import {Space, Table} from "antd";
import {connect} from "react-redux";

class EventList extends Component {
    columns = [
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Организатор',
            dataIndex: 'creator',
            key: 'creator'
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record) => {
                const {status} = record;
                const {header} = this.props;
                if (header === 'Все мероприятия'){
                    return(
                        <Space size='middle'>
                            <a href='!#'>Список участников</a>
                            <a href='!#'>Изменить</a>
                            <a href='!#'>Удалить</a>
                        </Space>
                    )
                }
                if (status) {
                    return(
                        <Space size='middle'>
                            <span>Вы приняли приглашение</span>
                            <a href="!#">Отменить</a>
                        </Space>
                    )
                } else {
                    return(
                        <a href="!#">Принять приглашение</a>
                    )
                }
            }
        }
    ];
    render() {
        return (
            <Table
                style={{padding: '10px', marginBottom: '20px'}}
                columns={this.columns}
                //dataSource={events}
                pagination={false}
            />
        );
    }
}

const mapStateToProps = ({content: {header, data}}) => {
    return {header};
};

export default connect(mapStateToProps)(EventList);