$(document).ready(function () {
    document.querySelector('.hamburger-menu').addEventListener('click', function (event) {
        event.stopPropagation();
        document.querySelector('.main-nav').classList.toggle('open');
        document.querySelector('.hamburger-menu').classList.toggle('open');
    });
    $(".main-nav a").click(function () {
        let id = $(this).attr("href");
        let scrollElem = $(id);
        let offsetTop = $(scrollElem).offset().top;
        $("html, body").animate({
            scrollTop: offsetTop - 200,
        }, 1000);
    });
    $("body").click(function () {
        $(".main-nav").removeClass("open");
        $(".hamburger-menu").removeClass("open");

    });
    $(".menu-dishes-item-picture").click(function () {
        $(".modal").addClass("open");
        let img = $(this).closest(".menu-dishes-item").attr("data-picture");
        let title = $(this).closest(".menu-dishes-item").find(".small-title").text();
        let text = $(this).closest(".menu-dishes-item").find(".menu-desc").text();
        let price = $(this).closest(".menu-dishes-item").find(".price").text();
        setDishInfo(img, title, text, price);
    });

    function setDishInfo(img, title, text, price) {
            $(".modal-image img").attr("src", img);
            $(".modal-title").text(title);
             $(".modal-price").text(price);
             $(".modal-text").text(text);

    }

    $(".close-button").click(function () {
        $(".modal").removeClass("open");
    });
    $(".modal").click(function (event) {
        event.stopPropagation();
        $(".modal").removeClass("open");
    })
});