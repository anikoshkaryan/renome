$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});
$(document).ready(function () {
    /*hamburger_menu*/
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
        $(".menu-list").slideUp("slow");


    });
    /*hamburger_menu*/
    /*menu_dishes_modal*/

    $(".menu-dishes-item-picture").click(function () {
        $(".modal").addClass("open");
        $(".modal-input").val(1);
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
        $(".modal").removeClass("open");
    });
    $(".modal-content").click(function (event) {
        event.stopPropagation();

    });
    /*menu_dishes_modal*/
    /*reservations_form*/

    $("#form_container").validate(
        {
            rules: {
                firstname: {
                    required: true,
                },
                lastname: "required",
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true,
                    minlength: 2
                },
                message: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                email: "Please enter a valid email address",
                subject: "Please enter a subject",
                message: "Please enter your message"
            }
        }
    );
    /*reservations_form*/
    /*shopping-cart*/

    $(".message-btn button").click(function (event) {
        event.preventDefault();
    });


    $(".modal-btn").click(function () {
        let $current = $(".card_number").text();
        $(".card_number").text(Number($(".modal-input").val()) + Number($current));
    });
    /*shopping-cart*/
    /*watch-calendar*/

    let now = new Date();
    $("input[name = 'calendar']").val(`${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`);
    $("input[name = 'time']").val(`${now.getHours()}:${now.getMinutes()}`);

    $("input[name = 'calendar']").datepicker();
    $("input[name = 'time']").ptTimeSelect();
    let selectPeople = $('[name = "people"]');
    function setNum() {
        for (let i = 1; i <= 60; i++) {
            let option = document.createElement("option");
            selectPeople.append(option);
            option.value = i;
            option.innerText = i;
        }
    }
    setNum();
    /*watch-calendar*/
    /*dropDawn menu for menu-section-desc*/
    $(".menu-sections-desc").click(function (ev) {
        ev.stopPropagation();
        let list = $(this).closest("div").find(".menu-list");
        $(".menu-list").not(list).slideUp("slow");
        list.slideToggle("slow");

    });
    $(".menu-list").click(function (ev) {
        ev.stopPropagation();
    });
    /*dropDawn menu for menu-section-desc*/
    /*slider*/

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    })
    /*slider end*/


});