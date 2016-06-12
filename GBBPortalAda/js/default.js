/// <reference path="jquery-2.1.1.min.js" />
$(document).ready(function () {
    var wrap = $("#container-main"); 
    var menu = $("#headerDiv");
    var bodyDiv = $("#bodyDiv");

    $(window).scroll(function (e) {
        if (this.scrollY > 36) {
            menu.addClass("menu-fixed");
            bodyDiv.addClass("menu-bodyDiv");

        } else {
            menu.removeClass("menu-fixed");
            bodyDiv.removeClass("menu-bodyDiv");

        }

    });
});