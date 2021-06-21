import moment from "moment"

//get current datetime
export const GET_CURRENT_DATETIME = (format = '') => {
    return moment().format(format)
}