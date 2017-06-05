Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

var startTime;
var intervalId;

function updateTimer() {
    var now = new Date();
    var differenceInMillis = now.getTime() - startTime.getTime();

    var newDate = zeroDate(new Date());
    newDate.setTime(newDate.getTime() + differenceInMillis);
    var milli = newDate.getMilliseconds(),
        sec = newDate.getSeconds(),
        min = newDate.getMinutes(),
        hou = newDate.getHours();

    var tags = ["h", "m", "s", "mi"];
    var corr = [hou.pad(2), min.pad(2), sec.pad(2), milli];

    for (var i = 0; i < tags.length; i++) {
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
    }
}

function initTimer() {
    startTime = new Date();
    updateTimer();
    if(!intervalId)
    {
        intervalId = window.setInterval("updateTimer()", 1);
    }
}

function resetTimer() {
    window.clearInterval(this.intervalId);
    this.intervalId = undefined;
    resetDocumentTime();
}

function resetDocumentTime() {
    var tags = ["h", "m", "s", "mi"];
    var zero = 0;
    var corr = [zero.pad(2), zero.pad(2), zero.pad(2), zero.pad(3)];

    for (var i = 0; i < tags.length; i++) {
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
    }
}

function zeroDate(date) {
    date.setMilliseconds(0);
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);

    return date;
}