/* ------------------- Dark / Light Mode Toggle -------------------*/

var isDark = true;

var primaryColor = '#ee7425';

var whiteColor = '#FFFFFF';
var blackColor = '#000000'

var shadowColor = '#231F20';
var bgDarkColor = '#404040';
var bgLightColor = '#ededed';

updateMode();

function toggleMode() {
    isDark = !isDark;
    updateMode();
}

function updateMode() {
    if (isDark) {
        primaryColor = '#ee7425'
        whiteColor = '#FFFFFF';
        shadowColor = '#231F20';
    }
    else {
        primaryColor = '#ee7425';
        whiteColor = '#000000';
        shadowColor = '#FFFFFF';
    }

    document.documentElement.style.setProperty('--clr-primary', primaryColor);

    document.documentElement.style.setProperty('--clr-F', whiteColor);
    document.documentElement.style.setProperty('--clr-0', blackColor);

    document.documentElement.style.setProperty('--clr-shadow', shadowColor);
}
