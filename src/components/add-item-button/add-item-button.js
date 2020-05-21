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
                style={{position: 'absolute', bottom: '30px', left: '80px'}}
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