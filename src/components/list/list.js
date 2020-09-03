import React from 'react';
import {Button, Empty, Input, Space, Table} from "antd";
import './list.css';
import {SearchOutlined} from "@ant-design/icons";
import Highlighter from "react-highlight-words";

class List extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
        data: [],
        selectedRowKeys: []
    }
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                text
            ),
    });
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };
    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    columns = (type) => {
        const tasksUser = [
            {
                title: 'Название',
                dataIndex: 'title',
                key: 'title',
                onFilter: (value, record) => record.title.indexOf(value) === 0,
                sorter: (a, b) => a.title.localeCompare(b.title)
            },
            {
                title: 'Дата выполнения',
                dataIndex: 'complete_date',
                key: 'complete_date',
                sorter: (a, b) => new Date(a.complete_date) - new Date(b.complete_date),
            },
            {
                title: 'Создатель',
                dataIndex: 'creator',
                key: 'creator'
            }
        ];
        const tasksAdmin = [
            {
                title: 'Название',
                dataIndex: 'title',
                key: 'title',
                onFilter: (value, record) => record.title.indexOf(value) === 0,
                sorter: (a, b) => a.title.localeCompare(b.title),
                ...this.getColumnSearchProps('title')
            },{
                title: 'Дата выполнения',
                dataIndex: 'complete_date',
                key: 'complete_date',
                sorter: (a, b) => new Date(a.complete_date) - new Date(b.complete_date),
            },{
                title: 'Дата создания',
                dataIndex: 'created_date',
                key: 'created_date',
                sorter: (a, b) => new Date(a.created_date) - new Date(b.created_date),
                defaultSortOrder: '',
            },{
                title: 'Создатель',
                dataIndex: 'creator',
                key: 'creator',
                filters: [
                    {
                        text: 'Аксютин Павел Александрович',
                        value: 'Аксютин П.А.'
                    },{
                        text: 'Козырев Юрий Владимирович',
                        value: 'Козырев Ю.В.'
                    },{
                        text: 'Пекарская Татьяна Павловна',
                        value: 'Пекарская Т.П.'
                    },
                ],
                onFilter: (value, record) => record.creator.indexOf(value) === 0,
            },{
                title: 'Назначено',
                dataIndex: 'executor',
                key: 'executor',
                filters: [
                    {
                        text: 'Зайнитдинов Роберт Ринатович',
                        value: 'Зайнитдинов Роберт Ринатович'
                    }
                ]
            },{
                title: 'Действия',
                dataIndex: 'actions',
                key: 'actions',
                render: () => (
                    <Space size='middle'>
                        <a href='!#'>Удалить</a>
                        <a href="!#">Изменить</a>
                    </Space>
                )
            }
        ];
        const eventUser = [
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
                    return(<a href="!#">Принять приглашение</a>)
                }
            }
        ];
        const eventAdmin = [
            {
                title: 'Название',
                dataIndex: 'title',
                key: 'title',
            },{
                title: 'Дата',
                dataIndex: 'date',
                key: 'date',
            }, {
                title: 'Организатор',
                dataIndex: 'creator',
                key: 'creator'
            }, {
                title: 'Действия',
                dataIndex: 'actions',
                key: 'actions',
                render: () => {
                    return(
                            <Space size='middle'>
                                <a href='!#'>Список участников</a>
                                <a href='!#'>Изменить</a>
                                <a href='!#'>Удалить</a>
                            </Space>
                        )
                }
            }
        ];
        const employees = [
            {
                title: 'ФИО',
                dataIndex: 'fullname',
                key: 'fullname'
            },{
                title: 'Должность',
                dataIndex: 'position',
                key: 'position'
            }
        ];
        const {admin} = this.props;
        switch (type) {
            case 'events':
                return admin ? eventAdmin : eventUser;
            case 'tasks':
                return admin ? tasksAdmin : tasksUser;
            case 'employees':
                return employees;
        }
    }
    render(){
        const {type, data} = this.props;
        return (
            <div>
                <AddButton/>
                <Table
                    columns={this.columns(type)}
                    locale={{emptyText: <Empty description='Нет задач'/>}}
                    dataSource={data}
                    bordered
                    pagination={false}
                />
            </div>
        );
    }
};

const AddButton = () => {
    return (
        <Button
            type="primary"
            style={{marginLeft: 10, marginTop: 5}}
        >
            +
        </Button>
    )
}

export default List;