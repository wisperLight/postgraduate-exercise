import request from './common/request';

const BASE_URL = 'http://49.234.89.20:3000/notice';

// 为某题添加或更新笔记
export function saveNotice (data) {
    return request(`${BASE_URL}/saveNotice`, {
        method: 'POST',
        data
    })
}