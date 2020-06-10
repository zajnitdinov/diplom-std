import React, {Component} from 'react';
import {Calendar} from "antd";
import './month-task-list.css';

function getListData(value) {
    let listData;
    switch (value.date()) {
        case 25:
            listData = [
                {
                    title: 'Записать скринкаст для учителей',
                    date: 'Понедельник, 25 мая',
                    creator: 'Пекарская Татьяна Павловна'
                }
            ];
            break;
        case 24:
            listData = [
                {
                    title: 'Отправить запрос в Отдел образования',
                    date: 'Завтра, 24 мая',
                    creator: 'Пекарская Татьяна Павловна'
                }
            ];
            break;
        case 23:
            listData = [
                {
                    title: 'Написать рецензию к статье',
                    date: 'Сегодня, 23 мая',
                    creator: 'Козырев Юрий Владимирович'
                },
                {
                    title: 'Отправить отчёт по практике',
                    date: 'Сегодня, 23 мая',
                    creator: 'Аксютин Павел Александрович'
                }
            ];
            break;
        default:
    }
    return listData || [];
}

function dateCellRender(value) {
    const listData = getListData(value);
    if (listData.length > 0){
        return (
            <span style={{fontSize: '50px', textAlign: 'center'}}>
                {listData.length} {listData.length >= 2 ? ": 1" : null}
            </span>
        );
    }
}

function getMonthData(value) {
    if (value.month() === 5) {
        return 1394;
    }
}

function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
        <section>{num}</section>
    ) : null;
}


class MonthTaskList extends Component {
    render() {
        return (
            <div style={{margin: '10px'}}>
                <Calendar
                    dateCellRender={dateCellRender}
                    monthCellRender={monthCellRender}
                />
            </div>
        );
    }
}

export default MonthTaskList;