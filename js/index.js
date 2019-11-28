window.onload = function () {
    let oToolbar = document.querySelector(".toolbar");
    let oTop = document.querySelector(".top");
    let oNav = document.querySelector(".nav");
    let navUp = document.querySelector(".nav-up");
    let navDown = document.querySelector(".nav-down");
    new fullpage('#fullpage', {
        // options here
        // sectionsColor: ['#0198da', '#21a360', '#e78a09', '#000', '#0198da', '#f0f', '#000'],
        verticalCentered: false,
        onLeave: function (origin, destination, direction) {
            if (destination.isFirst) {
                oToolbar.style.display = "block";
                oTop.style.top = "42px";
                oNav.style.display = "none";
            } else {
                oToolbar.style.display = "none";
                oTop.style.top = "0px";
                oNav.style.display = "block";
            }
        },
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
        menu: '#nav',
    });

    navUp.onclick = function () {
        fullpage_api.moveSectionUp();
    };
    navDown.onclick = function () {
        fullpage_api.moveSectionDown();
    };

    initSection4Animat();
};

function initSection4Animat() {
    let oLis = document.querySelectorAll(".weather-list>li");
    let oImages = document.querySelectorAll(".weather-list>li>img");
    let title_sub = document.querySelectorAll(".title-sub");
    for (let i=0; i<oLis.length; i++) {
        let li = oLis[i];
        // 鼠标移入事件
        li.onmouseenter = function () {
            oLis[0].style.width = "22%";
            oLis[1].style.width = "22%";
            oLis[2].style.width = "22%";
            oLis[i].style.width = "56%";
            oImages[i].style.opacity = "1";
            title_sub[i].style.opacity = "0";
            if (i === 0) {
                oImages[0].style.left = "0";
            } else if (i === 2) {
                oImages[2].style.right = "0";
            }
        };
        li.onmouseleave = function() {
            oLis[0].style.width = "33%";
            oLis[1].style.width = "34%";
            oLis[2].style.width = "33%";
            oImages[i].style.opacity = "0.6";
            title_sub[i].style.opacity = "1";
            if (i === 0) {
                oImages[0].style.left = "-150px";
            } else if (i === 2) {
                oImages[2].style.right = "-150px";
            }
        }
    }
}