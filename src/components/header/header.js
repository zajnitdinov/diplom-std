import React, {Component} from 'react';
import {Typography} from "antd";
import {connect} from "react-redux";

const {Title} = Typography;

class Header extends Component {
    render() {
        const {header} = this.props;
        return (
            <Title style={{marginTop: '10px', marginLeft: '10px'}}>
                {header}
            </Title>
        );
    }
}

const mapStateToProps = ({content}) => {
    return {
        header: content.header
    }
}

export default connect(mapStateToProps)(Header);