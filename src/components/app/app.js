import React from 'react';
import {Layout} from "antd";
import Menu from "../menu";
import Header from "../header";
import TaskList from "../task-list";
import Username from "../username";
import InfoWindow from "../info-window";
import AddItemModal from "../add-item-modal";

const {Sider, Content} = Layout;

const App = () => {
    return (
        <Layout style={{height: '100vh'}}>
            <Sider theme='light'>
                <Username/>
                <Menu/>
            </Sider>
            <Content>
                <Header/>
                <TaskList/>
                <InfoWindow/>
            </Content>
            <AddItemModal/>
        </Layout>
    );
}

export default App;
