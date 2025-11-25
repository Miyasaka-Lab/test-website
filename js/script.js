// script.js

function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    var isVisible = answer.style.display === 'block';

    // 他の回答を非表示にする
    var allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(function(ans) {
        ans.style.display = 'none';
    });

    // 他のアイコンをリセットする
    var allIcons = document.querySelectorAll('.icon');
    allIcons.forEach(function(icon) {
        icon.textContent = '+';
    });

    // クリックされた回答の表示を切り替える
    if (!isVisible) {
        answer.style.display = 'block';
        element.querySelector('.icon').textContent = '-';
    } else {
        element.querySelector('.icon').textContent = '+';
    }
}


//===============================================
//Slideshow
//===============================================

let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".slide");

  // すべてのスライドを非表示にする
  slides.forEach(slide => {
    slide.style.display = "none";
  });

  // 次のスライドを表示
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  // 3秒ごとに次のスライドへ
  setTimeout(showSlides, 3000);
}

// ページ読み込み時にスライドショーを開始
document.addEventListener("DOMContentLoaded", showSlides);

//===============================================
//Slider
//===============================================
// document.addEventListener("DOMContentLoaded", function () {
//     let reviewIndex = 0;
//     const reviews = document.querySelectorAll(".reviews-content");
//     const totalReviews = reviews.length;
//     const prevButton = document.querySelector(".review-prev");
//     const nextButton = document.querySelector(".review-next");

//     function showReview(index) {
//         reviews.forEach((review, i) => {
//             if (i === index) {
//                 review.classList.add("active");
//             } else {
//                 review.classList.remove("active");
//             }
//         });
//     }

//     prevButton.addEventListener("click", function () {
//         reviewIndex = (reviewIndex - 1 + totalReviews) % totalReviews;
//         showReview(reviewIndex);
//     });

//     nextButton.addEventListener("click", function () {
//         reviewIndex = (reviewIndex + 1) % totalReviews;
//         showReview(reviewIndex);
//     });

//     // 自動でスライドする場合（3秒ごと）
//     setInterval(() => {
//         reviewIndex = (reviewIndex + 1) % totalReviews;
//         showReview(reviewIndex);
//     }, 5000);
// });

document.addEventListener("DOMContentLoaded", function () {
    let reviewIndex = 0;
    const reviews = document.querySelectorAll(".reviews-content");
    const totalReviews = reviews.length;
    const prevButton = document.querySelector(".review-prev");
    const nextButton = document.querySelector(".review-next");

    function showReview(index) {
        reviews.forEach((review, i) => {
            // 非表示にする
            review.style.opacity = 0;
            review.style.transform = "translateX(100%)";  // 右に移動

            if (i === index) {
                review.style.opacity = 1;
                review.style.transform = "translateX(0)";  // 中央に移動
            } else if (i === (index - 1 + totalReviews) % totalReviews) {
                // 前のレビューは左に移動
                review.style.transform = "translateX(-100%)";
            }
        });
    }

    prevButton.addEventListener("click", function () {
        reviewIndex = (reviewIndex - 1 + totalReviews) % totalReviews;
        showReview(reviewIndex);
    });

    nextButton.addEventListener("click", function () {
        reviewIndex = (reviewIndex + 1) % totalReviews;
        showReview(reviewIndex);
    });

    // 自動でスライドする場合（5秒ごと）
    // setInterval(() => {
    //     reviewIndex = (reviewIndex + 1) % totalReviews;
    //     showReview(reviewIndex);
    // }, 5000);

    // 初期表示
    showReview(reviewIndex);
});


//===============================================
//hamburger-menu
//===============================================

// document.addEventListener("DOMContentLoaded", function () {
//     const hamburger = document.getElementById("hamburger-menu");
//     const navList = document.getElementById("nav-list");
//     const header = document.querySelector("header");

//     hamburger.addEventListener("click", function () {
//         navList.classList.toggle("show");  // メニューの表示・非表示を切り替え
//         hamburger.classList.toggle("active");  // バツ印に切り替え
//         header.classList.toggle("active"); // 背景画像の切り替え

//         // `.subpage` クラスがある場合、アイコンの色を変更
//         if (header.classList.contains("subpage")) {
//             document.querySelectorAll(".hamburger .bar").forEach(bar => {
//                 bar.style.backgroundColor = "#fff";
//             });
//         } else {
//             document.querySelectorAll(".hamburger .bar").forEach(bar => {
//                 bar.style.backgroundColor = "#333";
//             });
//         }

//         // `.subpage` の場合、メニュー開閉に応じて `menu-open` クラスを切り替える
//         if (header.classList.contains("subpage")) {
//             header.classList.toggle("menu-open", navList.classList.contains("show"));
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const navList = document.getElementById("nav-list");
    const header = document.querySelector("header");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("show");  // メニューの表示・非表示を切り替え
        hamburger.classList.toggle("active");  // バツ印に切り替え
        header.classList.toggle("active"); // 背景を適用

        // `.subpage` クラスがある場合、アイコンの色を変更
        document.querySelectorAll(".hamburger .bar").forEach(bar => {
            bar.style.backgroundColor = header.classList.contains("subpage") ? "#fff" : "#333";
        });

        // `.subpage` の場合、メニュー開閉に応じて `menu-open` クラスを切り替える
        if (header.classList.contains("subpage")) {
            header.classList.toggle("menu-open", navList.classList.contains("show"));
        }
    });
});






