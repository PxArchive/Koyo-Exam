/* ------------------- Dark / Light Mode Toggle -------------------*/

var isDark = true;

var primaryColor = '#ee7425';

var whiteColor = '#FFFFFF';
var blackColor = '#000000'

var shadowColor = '#231F20';
var bgDarkColor = '#404040';
var bgLightColor = '#ededed';

var navImage = "url(assets/halftone-shadow.svg)";
var darkImage = "url(assets/toggle-dark.svg)";

updateMode();

function toggleMode() {
    isDark = !isDark;
    updateMode();
}

function updateMode() {
    if (isDark) {
        primaryColor = '#ee7425'
        whiteColor = '#FFFFFF';
        blackColor = '#000000';
        shadowColor = '#231F20';

        navImage = "url(assets/halftone-shadow.svg)";
        darkImage = "url(assets/toggle-dark.svg)";

        document.documentElement.style.setProperty('--brightness', 0);
        document.documentElement.style.setProperty('--invert', 0);
    }
    else {
        primaryColor = '#ee7425';
        whiteColor = '#000000';
        blackColor = '#FFFFFF';
        shadowColor = '#ededed';

        navImage = "url(assets/Halftone3-lightgrey.png)";
        darkImage = "url(assets/toggle-light.svg)";

        document.documentElement.style.setProperty('--brightness', 900);
        document.documentElement.style.setProperty('--invert', 1);
    }

    document.documentElement.style.setProperty('--clr-primary', primaryColor);

    document.documentElement.style.setProperty('--clr-F', whiteColor);
    document.documentElement.style.setProperty('--clr-0', blackColor);

    document.documentElement.style.setProperty('--clr-shadow', shadowColor);


    document.documentElement.style.setProperty('--nav-image', navImage);
    document.documentElement.style.setProperty('--darktoggle-image', darkImage);

    //document.getElementsByClassName("nav-halftone").dataset
}
