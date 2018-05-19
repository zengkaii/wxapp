// opt没有传该传的
import * as Mock from './mock'

const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data: {},
    header: {
        'Content-Type': 'application/json'
    },
    methods: 'GET',
    dataType: 'json'
    
}
let util = {
    request(opt) {
        // 生成对象
        let options = Object.assign({},DEFAULT_REQUEST_OPTIONS, opt);
        // console.log(options);
        let {url, data, header, methods, dataType, mock=false} = options
        // console.log(url, data, header, methods, dataType, mock);
        return new Promise((resolve, reject) => {
            if (mock) {
                let res = {
                    statusCode: 200,
                    data: Mock[url]
                }
                resolve(res.data);
                return
            }
            wx.request({
                url,
                data,
                header,
                methods,
                dataType,
                success(res) {
                    resolve(res.data)
                },
                fail(err) {
                    reject(err)
                }
            })
        });
    }
}
export default util