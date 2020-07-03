import React, {Component} from 'react';
import {Button, Input, Space, Table} from 'antd';
import Highlighter from 'react-highlight-words';
import {connect} from "react-redux";
import {SearchOutlined} from '@ant-design/icons';
import DatabaseService from "../../services/database-service";

class TaskList extends Component {
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
    columnsUser = [
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
            onFilter: (value, record) => record.title.indexOf(value) === 0,
            sorter: (a, b) => a.title.length - b.title.length,
            sortDirections: ['descend']
        },
        {
            title: 'Дата выполнения',
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => a.date.length - b.date.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Создатель',
            dataIndex: 'creator',
            key: 'creator'
        }
    ];
    columnsAdmin = [
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
            onFilter: (value, record) => record.title.indexOf(value) === 0,
            sorter: (a, b) => a.title.length - b.title.length,
            sortDirections: ['descend'],
            ...this.getColumnSearchProps('title')
        },
        {
            title: 'Дата выполнения',
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => a.date.length - b.date.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Создатель',
            dataIndex: 'creator',
            key: 'creator',
            filters: [
                {
                    text: 'Аксютин Павел Александрович',
                    value: 'Аксютин Павел Александрович'
                },{
                    text: 'Козырев Юрий Владимирович',
                    value: 'Козырев Юрий Владимирович'
                },{
                    text: 'Пекарская Татьяна Павловна',
                    value: 'Пекарская Татьяна Павловна'
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
    ]
    componentDidMount() {
        this.props.fetchTasks(this.props.id);
    }
    getDataByDay = () => {
        const {header, data} = this.props;
        const today = data.filter(el => el.date === '23 мая');
        const tomorrow = data.filter(el => el.date === '24 мая');
        return header === 'Сегодня' ? today : header === 'Завтра' ? tomorrow : data;
    }
    onSelectChange = selectedRowKeys => {
        console.log(selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const {header} = this.props;
        const {selectedRowKeys} = this.state;
        return (
            <Table
                rowSelection={{selectedRowKeys, onChange: this.onSelectChange}}
                style={{padding: '10px'}}
                pagination={false}
                columns={header === 'Все задачи' ? this.columnsAdmin : this.columnsUser}
                dataSource={this.getDataByDay()}
            />
        );
    }
}

const mapStateToProps = ({user: {id}, content: {data, header}}) => {
    return {
        data, header, id
    }
};

const mapDispatchToProps = dispatch => {
    const db = new DatabaseService();
    return {
        fetchTasks: async (id) => dispatch({
            type: 'FETCH_TASKS_SUCCESS',
            payload: await db.getUserTasks(1)
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);