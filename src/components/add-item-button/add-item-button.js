import React, {Component} from 'react';
import {Button} from "antd";
import {openModalAddItem} from "../../actions";
import {connect} from "react-redux";

class AddItemButton extends Component {
    render() {
        const {openModalAddItem} = this.props;
        return (
            <Button
                onClick={openModalAddItem}
                style={{top: '-10px', left: '10px'}}
                type="primary"
                shape="circle"
            >+</Button>
        );
    }
}

const mapDispatchToProps = {
    openModalAddItem
}

export default connect(null, mapDispatchToProps)(AddItemButton);