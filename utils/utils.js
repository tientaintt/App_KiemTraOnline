import { flags } from "realm";
import { displayNameInvalid, emailInvalid, emailRegex, passwordInvalid, passwordRegex, userNameInvalid, usernameRegex } from "./Constant";

export const secondsDiff = (firstDate, secondsDate) => {
    var seconds = Math.ceil((firstDate.getTime() - secondsDate.getTime()) / 1000);
    return seconds;
}

export const isCurrentDay = (date) => {


    const dateToCheck = new Date();

    const givenDate = new Date(date);
    const isToday = givenDate.getDate() === dateToCheck.getDate() &&
        givenDate.getMonth() === dateToCheck.getMonth() &&
        givenDate.getFullYear() === dateToCheck.getFullYear();
    
    return isToday;
}

export const convertDateToMiliseconds = (date) => {
    var dateChange = new Date(date);
    return dateChange.getTime();
}

export const setFormatDateYYYYMMDD = (milliseconds) => {
    var date = new Date(milliseconds);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var formattedDay = day.toString().padStart(2, '0');
    var formattedMonth = month.toString().padStart(2, '0');
    var formattedHours = hours.toString().padStart(2, '0');
    var formattedMinutes = minutes.toString().padStart(2, '0');
    return year + '-' + formattedMonth + '-' + formattedDay + ' ' + formattedHours + ':' + formattedMinutes;
}

export const getFormattedDateTimeByMilisecond = (milliseconds) => {
    return convertMillisecondsToTime(milliseconds) + ' ' + getFormattedDate(milliseconds)
}

export function getFormattedDate(milliseconds) {
    var date = new Date(milliseconds);

    var day = date.getDate();
    var month = date.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0, nên cần cộng 1
    var year = date.getFullYear();

    // Định dạng ngày, tháng, năm thành chuỗi có 2 chữ số
    var formattedDay = day.toString().padStart(2, '0');
    var formattedMonth = month.toString().padStart(2, '0');

    // Trả về chuỗi ngày tháng năm trong định dạng DD/MM/YYYY
    return formattedDay + '/' + formattedMonth + '/' + year;
}

export function convertMillisecondsToTime(milliseconds) {
    var date = new Date(milliseconds);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    // var seconds = date.getSeconds();

    // Định dạng giờ, phút, giây thành chuỗi có 2 chữ số
    var formattedHours = hours.toString().padStart(2, '0');
    var formattedMinutes = minutes.toString().padStart(2, '0');
    //var formattedSeconds = seconds.toString().padStart(2, '0');

    // Trả về chuỗi thời gian trong định dạng HH:MM:SS
    return formattedHours + ':' + formattedMinutes;
}
export const StandardizedParam = (page, sortType, column, size, search, url) => {
    let urlParam = url;
    let queryParams = [];

    if (page) {
        queryParams.push(`page=${page}`);
    }
    if (sortType) {
        queryParams.push(`sortType=${sortType}`);
    }
    if (column) {
        queryParams.push(`column=${column}`);
    }
    if (size) {
        queryParams.push(`size=${size}`);
    }
    if (search) {
        queryParams.push(`search=${search}`);
    }
    if (queryParams.length > 0) {
        urlParam += '?' + queryParams.join('&');
    }
    return urlParam
}
export const validationInput = (data, typeInput, setError) => {
    switch (typeInput) {
        case 'username':
            if (!data.match(usernameRegex)) {

                setError(userNameInvalid)
                return false
            }
            break;
        case 'password':
            if (!data.match(passwordRegex)) {
                setError(passwordInvalid);
                return false;
            }
            break;
        case 'displayname':
            if (data == null) {

                setError(displayNameInvalid);
                return false;
            }
            break;
        case 'email':
            if (!data.match(emailRegex)) {
                setError(emailInvalid)
                return false;
            }
            break;

    }
    setError(null);
    return true;
}