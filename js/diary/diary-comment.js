
window.addEventListener('load', function () {

    let section = document.querySelector(".diary-view-section");
    let commentBtns = section.querySelectorAll(".comment-btn");
    let commentSections = section.querySelectorAll(".comment-section");

    for (let i = 0; i < commentBtns.length; i++) {
        commentBtns[i].onclick = function (e) {
            e.preventDefault();
            commentSections[i].style.display = "block";
        }
    }
});
