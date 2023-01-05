import axios from "axios";

const baseUrl = "http://localhost:8082/score" // 本地调试
// const baseUrl = "http://121.248.150.34:8082/score" // prod

export function queryScoreSheetByEmployeeNumberAndPassword(employeeNumber, password) {
    return axios({
        baseURL: baseUrl,
        method: 'get',
        url: '/scoreSheet/get?employeeNumber='+employeeNumber + "&password=" + password,
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