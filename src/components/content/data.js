function convertTime(str){
    return new Date(str).toLocaleDateString("ru");
}
const data = {
    tasks: [
        {
            "id": 2,
            "title": "Обновить ПО для антивируса",
            "description": null,
            "created_date": convertTime("2020-07-03T14:27:26.000Z"),
            // "creator": 2,
            "creator": "Козырев Ю.В.",
            "complete_date": convertTime("2020-07-08T21:00:00.000Z"),
            "executor": "Аксютин П.А."
        },
        {
            "id": 1,
            "title": "Записать скринкаст",
            "description": "Учителям требуется освоиться в новой программе",
            "created_date": convertTime("2020-07-03T14:27:24.000Z"),
            // "creator": 3,
            "creator": "Аксютин П.А.",
            "complete_date": convertTime("2020-07-05T21:00:00.000Z"),
            "executor": "Зайнитдинов Р.Р."
        },
        {
            "id": 3,
            "title": "Отправить документы",
            "description": null,
            "created_date": convertTime("2020-07-03T15:09:01.000Z"),
            // "creator": 3,
            "creator": "Аксютин П.А.",
            "complete_date": convertTime("2020-07-08T15:09:21.000Z"),
            "executor": "Зайнитдинов Р.Р."
        },
        {
            "id": 4,
            "title": "Отправить задания",
            "description": null,
            "created_date": convertTime("2020-08-05T15:09:01.000Z"),
            // "creator": 3,
            "creator": "Аксютин П.А.",
            "complete_date": convertTime("2020-08-05T15:09:21.000Z"),
            "executor": "Зайнитдинов Р.Р."
        }
    ],
    events: [
        {
            "id": 1,
            "title": "Собрание учителей",
            "date": convertTime("2020-08-05T15:09:21.000Z"),
            "creator": "Козырев Ю.В."
        }
    ],
    employees: [
        {
            "id": 1,
            "fullname": "Козырев Юрий Владимирович",
            "position": "Директор"
        },{
            "id": 2,
            "fullname": "Аксютин Павел Александрович",
            "position": "Заместитель директора по информатизации"
        },{
            "id": 3,
            "fullname": "Зайнитдинов Роберт Ринатович",
            "position": "Инженер"
        }
    ]
};

export default data;