import * as types from '@/store/mutation-types'
import axios from 'axios'
import qs from 'qs'
import { MessageBox } from 'mint-ui'

// 获取url中的参数
export const getRequest = () => {
	let url = location.search; //获取url中"?"符后的字串
        let theRequest = new Object();
        if (url.indexOf("?") != -1) {
            let str = url.substr(1);
            let strs = str.split("&");
            for(let i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
}

// 封装axios方法
export const axiosHttp = (url = '', data = {}, method = 'POST') => {

	return new Promise ((resolve, reject) => {

		url = types.PUBLICPATH + url;
		method = method.toUpperCase();
		
		// get请求
		if ( method == 'GET' ) {
			axios.get(url).then((res) => {
				if ( res.data.cn == 0 ) {
					resolve(res.data.data);
				} else {
					reject(res.data.message);
				}
			}).catch((error) => {
	           throw new Error(error)
	        })
		}

		// post请求
		if ( method == 'POST' ) {
			axios.post(url, qs.stringify(data)).then((res) => {
				if ( res.data.cn == 0 ) {
					resolve(res.data.data);
				} else {
					reject(res.data.message);
				}
			}).catch((error) => {
	            throw new Error(error)
	        })
		}
	})
}
