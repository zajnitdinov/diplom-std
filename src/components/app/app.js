import React from 'react';
import {Layout} from "antd";
import Menu from "../menu";
import Header from "../header";
import Username from "../username";
import {connect} from "react-redux";
import Content from "../content";

const {Sider, Content: AntContent} = Layout;

const App = () => {
    return (
        <Layout style={{height: '100vh'}}>
            <Sider theme='light'>
                <Username/>
                <Menu/>
            </Sider>
            <AntContent>
                <Header/>
                <Content/>
            </AntContent>
        </Layout>
    );
}

const mapStateToProps = ({content: {header}}) => {
    return {header};
}

export default connect(mapStateToProps)(App);