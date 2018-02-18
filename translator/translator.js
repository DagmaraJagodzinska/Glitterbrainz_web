var jsonPaths = {
    pol: 'translator/translations/pol.json',
    nor: 'translator/translations/nor.json',
    eng: 'translator/translations/eng.json'
};

var langCodes = {
    pol: 'pl',
    nor: 'no',
    norb: 'nb'
};

window.onload = function() {
    var defaultLang = getCookie("defaultLang");

    if(defaultLang) {
        getTranslation(defaultLang)
    }

    if (window.navigator.language !== langCodes.pol) {
        var language = (window.navigator.language === langCodes.nor || window.navigator.language === langCodes.norb) ? langCodes.nor : langCodes.eng;
        getTranslation(language)
    }
};

var getTranslation = function(language) {
    var translationPath = language === langCodes.nor ? jsonPaths.nor : language === langCodes.pol ? jsonPaths.pol : jsonPaths.eng;
    fetch(translationPath)
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            translate(json);
            setTranslationDropdown(language);
            setCookie("defaultLang", language, 100)
        });
};


var translate = function (translation) {
    translation.forEach(function(element) {
        document.getElementById(element.key).innerHTML = element.translation;
    });
};


var setTranslationDropdown = function(settingLang) {

    document.getElementById('lang').innerHTML = settingLang.toUpperCase();

    var firstLink = document.getElementById('first-link');
    firstLink.innerHTML = (settingLang === "pl" || settingLang === "no") ? "EN" : "PL";
    firstLink.setAttribute("onclick", ((settingLang === "pl" || settingLang === "no") ? "getTranslation('en')" : "getTranslation('pl')"));

    var secondLink = document.getElementById('second-link');
    secondLink.innerHTML = (settingLang === "pl" || settingLang === "en") ? "NO" : "PL";
    secondLink.setAttribute("onclick", ((settingLang === "pl" || settingLang === "en") ? "getTranslation('no')" : "getTranslation('pl')"));

};
