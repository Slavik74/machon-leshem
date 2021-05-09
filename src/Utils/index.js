export const formatTime = (secs)=> {
    var date = new Date(0);
    date.setSeconds(Number(secs));
    return date.toISOString().substr(11, 8);
}