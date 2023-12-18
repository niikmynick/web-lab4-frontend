import {showError} from "./warner";

export function validate(x, y, r) {
    let flag = true;
    let error_message = "";

    if (!(parseInt(x) >= -3 && parseInt(x) <= 3) || (x.trim().search(/[^0-9.-]/) !== -1) || x.trim() === "") {
        flag = false;
        error_message += "You can use X only in range (-3 ... 3)<br>";
    }

    if (!(parseInt(y) > -3 && parseInt(y) < 5) || (y.trim().search(/[^0-9.-]/) !== -1) || y.trim() === "") {
        flag = false;
        error_message += "You can use Y only in range (-3 ... 5)<br>";
    }

    if ( (r.trim().search(/[^0-9.-]/) !== -1) || r.trim() === "" ) {
        flag = false;
        error_message += "R must be a number <br>";
    }

    if (!flag) {
        showError(error_message);
    }

    return flag;
}