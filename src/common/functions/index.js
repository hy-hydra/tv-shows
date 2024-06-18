// Common Functions
import moment from 'moment';

export const formatDate = (date, format) => {
    return moment(date).format(format);
}

export const convertMoney = (value) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(value)) >= 1.0e+9
        ? (Math.abs(Number(value)) / 1.0e+9).toFixed(2) + " Billion"
        // Six Zeroes for Millions 
        : Math.abs(Number(value)) >= 1.0e+6
        ? (Math.abs(Number(value)) / 1.0e+6).toFixed(2) + " Million"
        // Three Zeroes for Thousands
        : Math.abs(Number(value)) >= 1.0e+3
        ? (Math.abs(Number(value)) / 1.0e+3).toFixed(2) + " K"
        : Math.abs(Number(value));
}

export const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h}h ${m}m`;
}