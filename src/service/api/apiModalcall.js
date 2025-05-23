import axios from "axios";
import { ApiConfigUrl } from ".";

export function ApiCall(uriName, payload) {
    return new Promise(async function (resolved, reject) {
        try {
            if (ApiConfigUrl.APP_LAST_URI[uriName].method == "POST") {
                axios.post(ApiConfigUrl.APP_LAST_URI[uriName].path, payload)
                    .then(res => {
                        let response = res.data;
                        resolved(response);
                    })
                    .catch(error => {
                        // handle error
                        console.log("error", error);
                        reject(error);
                    })
            }
        } catch (e) {
            reject(e);
        }
    })
}