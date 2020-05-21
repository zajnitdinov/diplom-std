import React, {Component} from 'react';
import {Drawer} from "antd";
import {connect} from 'react-redux';
import {closeInfo} from "../../actions";

class InfoWindow extends Component {
    render() {
        const { visible, closeInfo } = this.props;
        return (
            <Drawer
                title='Сделать исправления на сайте'
                width={520}
                placement="right"
                visible={visible}
                onClose={closeInfo}
            >
                <span>Добавить новый раздел</span><br/><br/>
                <span><b>Дата создания: </b>8 мая 2020, 23:50</span><br/><br/>
                <span><b>Выполнить до: </b>10 мая 2020, 23:50</span>
            </Drawer>
        );
    }
}

const mapStateToProps = ({ infoWindow }) => {
    return {
        visible: infoWindow.visible
    }
}

const mapDispatchToProps = {
    closeInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoWindow);