// general settings

var setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var deleteCoookie = function () {
    document.cookie = "gbcookiesConfirm=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


// functional settings

var checkCookie = function () {
    var cookiesConfirm = getCookie("gbcookiesConfirm");
    if (cookiesConfirm !== "true") { showCookiesMessage() }
}


var hideCookiesMessage = function() {
    document.getElementById('cookies-info').style.display = 'none';
}

var showCookiesMessage = function () {
    document.getElementById('cookies-info').style.display = 'block';
}

var agreeCookies = function() {
    document.getElementById('cookies-info').style.display = 'none';
    setCookie('gbcookiesConfirm', 'true' , 365);
}



