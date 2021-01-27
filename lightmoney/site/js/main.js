$(document).ready(function () {
    $('body').on("click", ".blockoPayBtn", function () {
        var name = $(this).parent('.wrapper-buy-item__block').find(".buy-item__block__title").text();
        var price = $(this).data("price");
        var modal = $(this).data("modal");
        $.ajax({
            type: 'POST',
            url: '/ajax/step.php?id=' + modal,
            success: function (data) {
                $(".form-block-modal").html(data);
            },
            error: function (xhr, str) {
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
        $('#blockoPayModal .body-modal-title').text(name);
        $('.result .price-block').text(price);
        $('.result .modal-id-block').text(modal);
        $('#blockoPayModal').modal();

    })

    $('body').on("click", ".protect", function () {
        if ($(this).hasClass('active')) {
            var newprice = parseInt($('.result .price-block').text()) - 5;
            $('.es-list-on').hide();
            $('.es-list-off').show();
            $('#blockoPayModal .modal-logo-default').show();
            $('#blockoPayModal .body-modal-title').hide();
            $('#blockoPayModal .modal-logo').hide();
            $('#blockoPayModal .protect-act').hide();
            $('.protect').removeClass("active");
            $('.modalOrderBtn').removeClass("btn-blue");

        } else {
            var newprice = parseInt($('.result .price-block').text()) + 5;
            $('.es-list-on').show();
            $('.es-list-off').hide();
            $('#blockoPayModal .modal-logo-default').hide();
            $('#blockoPayModal .body-modal-title').show();
            $('#blockoPayModal .modal-logo').show();
            $('#blockoPayModal .protect-act').show();
            $('.protect').addClass("active");
            $('.modalOrderBtn').addClass("btn-blue");


        }
        $('.result .price-block').text(newprice);
    })

    $("#blockoPayModal").on("hide.bs.modal", function () {
        $('#blockoPayModal .body-modal-title').text();
        $('.result .price-block').text();
        $('.result .modal-id-block').text();
        if ($('.protect').hasClass('active')) {
            $('.modalOrderBtn').removeClass("btn-blue");
            $('.es-list-on').hide();
            $('.es-list-off').show();
            $('#blockoPayModal .modal-logo-default').show();
            $('#blockoPayModal .body-modal-title').hide();
            $('#blockoPayModal .modal-logo').hide();
            $('#blockoPayModal .protect-act').hide();
            $('.protect').removeClass("active");
        }
    });
    $('body').on("submit", "#modalOrderAddForm", function () {
        AddOrder();
    })
    $('body').on("click", "#copy", function () {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#pay_adress').text().trim()).select();
        document.execCommand("copy");
        $temp.remove();

        $(this).text('Сopied!');
    })
    function AddOrder() {

        $('.tlt-box').hide();
        $('.protect').hide();
        var i = $('#blockoPayModal .body-modal-title').text();
        var j = $('.result .price-block').text();
        $("#element-send").val(i);
        $("#price-send").val(j);
        var msg = $('#modalOrderAddForm').serialize();
        $.ajax({
            type: 'POST',
            url: '/ajax/addOrder.php',
            data: msg,
            success: function (data) {
                $(".form-block-modal").html(data);
            },
            error: function (xhr, str) {
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    }
})
function simple_tooltip(target_items, name) {
    $(target_items).each(function (i) {
        $("body").append("<div class='" + name + "' id='" + name + i + "'><p>" + $(this).attr('title') + "</p></div>");
        var my_tooltip = $("#" + name + i);

        $(this).removeAttr("title").mouseover(function () {
            my_tooltip.css({ opacity: 0.9, display: "none" }).fadeIn(400);
        }).mousemove(function (kmouse) {
            my_tooltip.css({ left: kmouse.pageX + 35, top: kmouse.pageY - 50 });
        }).mouseout(function () {
            my_tooltip.fadeOut(400);
        });
    });
}
$(document).ready(function () {
    simple_tooltip("a#tlt", "tooltip");
});
