/// <reference path="C:\Users\Lord-Mallam\Documents\Visual Studio 2013\Projects\LuminiousPortal\LuminiousPortal\scripts/jquery-1.11.3.min.js" />

function sendFileMultiPro(file, container, size, collection) {

    var formData = new FormData();
    jQuery.each(file, function (i, filex) {
        formData.append('file-' + i, filex);
    });

    $.ajax({
        type: 'post',
        async: false,
        url: '/usercontrols/fileuploader.ashx?size=' + size,
        data: formData,
        success: function (status) {
            if (status != 'error') {
                
                var collectN = JSON.parse(status);
                for (i = 0; i < collectN.length; i++) {
                    var p = "";
                    var o = collectN[i];
                    var p = collectN[i].Path;
                    var my_path = "/usercontrols/temp/" + collectN[i].Path;
                    var sp = collectN[i].Path.split(".");
                    $("<div id='image_" + sp[0] + "' class='imageContainer corner5-bottom corner5-top'><div id='item_" + sp[0] + "' class='imageItem corner5-top'></div><div class='imagePanel corner5-bottom'><div id='d_" + sp[0] + "' onclick=\"doIsDefault('" + sp[0] + "')\" class='defaultItem' title='Mark as default'></div><div onclick=\"doDelete('" + sp[0] + "')\" class='deleteItem' title='Delete image'></div></div></div>").appendTo($('#' + container));
                    $("#item_" + sp[0]).css("background-image", "url(" + my_path + ")");
                    var col = $('#' + collection).val();
                    var pageCollection = JSON.parse(col);
                    var im = { "id": sp[0], "path": my_path, "file": collectN[i].File, "operation": "add", "isdefault": false };
                    pageCollection.push(im);
                    $('#' + collection).val(JSON.stringify(pageCollection));
                }
                
            }
        },
        processData: false,
        contentType: false,
        error: function (e) {

            var div = "<div>Something went wrong displaying your image</div>";
            var confirmbox = $(div).dialog({
                modal: true,

                buttons: { "Ok": function () { $(this).dialog("close"); } },
                title: "Okra"
            });

        }
    });
}

function loadPage(collection,container) {
    var col = $('#' + collection).val();
    var pageCollection = JSON.parse(col);
    for (i = 0; i < pageCollection.length; i++) {
        if (pageCollection[i].isdefault) {
            $("<div id='image_" + pageCollection[i].id + "' class='imageContainer corner5-bottom corner5-top'><div id='item_" + pageCollection[i].id + "' class='imageItem corner5-top'></div><div class='imagePanel corner5-bottom'><div id='d_" + pageCollection[i].id + "' onclick=\"doIsDefault('" + pageCollection[i].id + "')\" class='defaultItem-selected' title='Mark as default'></div><div onclick=\"doDelete('" + pageCollection[i].id + "')\" class='deleteItem' title='Delete image'></div></div></div>").appendTo($('#' + container));
        } else {
            $("<div id='image_" + pageCollection[i].id + "' class='imageContainer corner5-bottom corner5-top'><div id='item_" + pageCollection[i].id + "' class='imageItem corner5-top'></div><div class='imagePanel corner5-bottom'><div id='d_" + pageCollection[i].id + "' onclick=\"doIsDefault('" + pageCollection[i].id + "')\" class='defaultItem' title='Mark as default'></div><div onclick=\"doDelete('" + pageCollection[i].id + "')\" class='deleteItem' title='Delete image'></div></div></div>").appendTo($('#' + container));
        }
        
        $("#item_" + pageCollection[i].id).css("background-image", "url(" + pageCollection[i].path + ")");
    }
}

function doDelete(id) {
    var nam = $('#ImageCollectionNameHidden').val();
    var col = $('#' + nam).val();
    var pageCollection = JSON.parse(col);
    for (i = 0; i < pageCollection.length; i++) {
        if (pageCollection[i].id == id) {
            pageCollection[i].operation = "delete";
            $('#image_' + pageCollection[i].id).remove();
            break;
        }
    }
}

function doIsDefault(id) {
    var nam = $('#ImageCollectionNameHidden').val();
    var col = $('#' + nam).val();
    var pageCollection = JSON.parse(col);
    for (i = 0; i < pageCollection.length; i++) {
        if (pageCollection[i].id == id) {
            pageCollection[i].isdefault = true;
            $('#d_' + pageCollection[i].id).addClass("defaultItem-selected");
            
        } else {
            pageCollection[i].isdefault = false;
            $('#d_' + pageCollection[i].id).removeClass("defaultItem-selected")
        }
    }
}

function itemClearAll() {

    var div = "<div>Are you sure you want to delete all images?</div>";
    var confirmbox = $(div).dialog({
        modal: true,
        buttons: {
            "Yes": function () {
                clearall();
                $(this).dialog("close");

            },
            "No": function () {
                $(this).dialog("close");
            }
        }
    });
}

function clearall() {
    var nam = $('#ImageCollectionNameHidden').val();
    var col = $('#' + nam).val();
    var pageCollection = JSON.parse(col);
    for (i = 0; i < pageCollection.length; i++) {
       
            pageCollection[i].operation = "delete";
            $('#image_' + pageCollection[i].id).remove();
           
        
    }
}


function sendFile(file, uploadcontrol, displayimage, hiddenfile, size) {
    var upid = uploadcontrol;
    var did = displayimage;
    var formData = new FormData();
    var xc = $('#' + upid)[0].files[0];
    formData.append('file', xc);
    $.ajax({
        type: 'post',
        url: '/usercontrols/fileuploader.ashx?size=' + size,
        data: formData,
        success: function (status) {
            if (status != 'error') {
                var collectN = JSON.parse(status);
                var my_path = "/usercontrols/temp/" + collectN[0].Path;
                $("#" + did).attr("src", my_path);
                $("#" + hiddenfile).val(my_path);
            }
        },
        processData: false,
        contentType: false,
        error: function (e) {

            var div = "<div>Something went wrong displaying your image</div>";
            var confirmbox = $(div).dialog({
                modal: true,

                buttons: { "Ok": function () { $(this).dialog("close"); } },
                title: "Okra"
            });

        }
    });
}

function sendFileMulti(file, container, size) {

    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
        type: 'post',
        async: false,
        url: '/usercontrols/fileuploader.ashx?size=' + size,
        data: formData,
        success: function (status) {
            if (status != 'error') {
                var collectN = JSON.parse(status);
                var my_path = "/usercontrols/temp/" + collectN[0].Path;
                $('<img src="' + my_path + '" alt="" class="imageuploader-image-multi-small" />').appendTo($('#' + container));

            }
        },
        processData: false,
        contentType: false,
        error: function (e) {

            var div = "<div>Something went wrong displaying your image</div>";
            var confirmbox = $(div).dialog({
                modal: true,

                buttons: { "Ok": function () { $(this).dialog("close"); } },
                title: "Okra"
            });

        }
    });
}