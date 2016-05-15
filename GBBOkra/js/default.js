/// <reference path="jquery-2.1.1.min.js" />
$(document).ready(function () {
    $('#menuservice').mouseover(function () {
        $('#servicesdropdown').show();
    });
    $('#menuservice').mouseout(function () {
        $('#servicesdropdown').hide();
    });
    $('#servicesdropdown').mouseover(function () {
        $('#servicesdropdown').show();
        $('#menuservice').addClass('activemenu');
    });
    $('#servicesdropdown').mouseout(function () {
        $('#servicesdropdown').hide();
        $('#menuservice').removeClass('activemenu');
    });
});