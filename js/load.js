

var socialtags = [{
    img: "img/github.svg",
    link: "https://github.com/c9addy"
}, {
    img: "img/linkedin.svg",
    link: "https://www.linkedin.com/in/aditya-singh-ba71a2116/"
}, {
    img: "img/codechef.svg",
    link: "https://www.codechef.com/users/c9addy"
}, {
    img: "img/insta.svg",
    link: "https://www.instagram.com/c9addy/?hl=en"
}]

function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="` + socialtags[x].link + `"> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

loadSocialIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "light") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'light');
    }

}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "light") {
        element.classList.add("light-mode");
    } else {
        element.classList.remove("light-mode");
    }
}

checkDayNight()
