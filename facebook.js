
var settings = document.querySelector(".settings_menu");

function settingsMenu()
{
    settings.classList.toggle("settings_menu_height");   
}

var dark = document.getElementById("dark_btn");

dark_btn.onclick = function()
{
    dark.classList.toggle("dark_btn_on");
    document.body.classList.toggle("dark_theme");

    if(localStorage.getItem("theme") == "light")
    {
        localStorage.setItem("theme" , "dark");
    }
    else
    {
        localStorage.setItem("theme" , "light");
    }

}


//local Storage 

// localStorage.setItem("theme","dark");
// localStorage.getItem("theme");

if(localStorage.getItem("theme") == "light")
{
    dark.classList.remove("dark_btn_on");
    document.body.classList.remove("dark_theme");
}
else if(localStorage.getItem("theme") == "dark")
{
    dark.classList.add("dark_btn_on");
    document.body.classList.add("dark_theme");
}
else
{
    localStorage.setItem("theme" , "light");
}


