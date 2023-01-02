import axios from "axios";

const baseUrl = "http://localhost:8082/score" // 本地调试
// const baseUrl = "http://121.248.114.514:8081/nanlin-sql" // prod

export function queryScoreSheetByEmployeeNumberAndPassword(employeeNumber, password) {
    return axios({
        baseURL: baseUrl,
        method: 'get',
        url: '/scoreSheet/get?employeeNumber='+employeeNumber + "&password=" + password,
        // headers: {"": ""}
    });
}

export function saveScoreSheet(scoreSheet) {
    return axios({
        baseURL: baseUrl,
        method: 'put',
        url: '/scoreSheet/save',
        data: scoreSheet,
    });
}