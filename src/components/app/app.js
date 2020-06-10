import React from 'react';
import {Layout} from "antd";
import Menu from "../menu";
import Header from "../header";
import TaskList from "../task-list";
import Username from "../username";
import AddItemModal from "../add-item-modal";
import EventList from "../event-list";
import {connect} from "react-redux";
import MonthTaskList from "../month-task-list";
import EmployeesList from "../employees-list";
import AuthorizationModal from "../authorization-modal";

const {Sider, Content} = Layout;

const App = ({header}) => {
    return (
        <Layout style={{height: '100vh'}}>
            <AuthorizationModal/>
            <Sider theme='light'>
                <Username/>
                <Menu/>
            </Sider>
            <Content>
                <Header/>
                <ShowList header={header}/>
            </Content>
            <AddItemModal/>
        </Layout>
    );
}

const ShowList = ({header}) => {
    if (header === 'Все сотрудники'){
        return <EmployeesList/>
    }
    if (header === 'Все мероприятия'){
        return <EventList/>
    }
    if (header === 'Месяц'){
        return <MonthTaskList/>
    } else {
        return (
            <React.Fragment>
                {(header === 'Сегодня') ? <EventList/> : null}
                <TaskList/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({content: {header}}) => {
    return {header};
}

export default connect(mapStateToProps)(App);