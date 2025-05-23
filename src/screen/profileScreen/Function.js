export function modListingArr(arrData) {
    let respArr = [];
    if (arrData) {
        if (arrData.length > 0) {
            for (let i = 0; i < arrData.length; i++) {
                let modObj = {}
                if (arrData[i].app_id == undefined || arrData[i].app_id == null) {
                    modObj["app_id"] = ""
                } else {
                    modObj["app_id"] = arrData[i].app_id
                }
                if (arrData[i].fk_kid_id == undefined || arrData[i].fk_kid_id == null) {
                    modObj["fk_kid_id"] = ""
                } else {
                    modObj["fk_kid_id"] = arrData[i].fk_kid_id
                }
                if (arrData[i].kid_profile_image == undefined || arrData[i].kid_profile_image == null) {
                    modObj["kid_profile_image"] = ""
                } else {
                    modObj["kid_profile_image"] = arrData[i].kid_profile_image
                }
                if (arrData[i].app_name == undefined || arrData[i].app_name == null) {
                    modObj["app_name"] = ""
                } else {
                    modObj["app_name"] = arrData[i].app_name
                }
                if (arrData[i].app_icon == undefined || arrData[i].app_icon == null) {
                    modObj["app_icon"] = ""
                } else {
                    modObj["app_icon"] = arrData[i].app_icon
                }
                if (arrData[i].app_package_name == undefined || arrData[i].app_package_name == null) {
                    modObj["app_package_name"] = ""
                } else {
                    modObj["app_package_name"] = arrData[i].app_package_name
                }
                if (arrData[i].status == undefined || arrData[i].status == null) {
                    modObj["status"] = ""
                } else {
                    modObj["status"] = arrData[i].status
                }

                modObj["check"] = false
                respArr.push(modObj);
            }
        }
    }
    return respArr
}
