window.addEventListener("load", function () {
    let header = document.querySelector(".header")
    let delBtn = header.querySelector(".del-btn");

    let deleteModal = document.getElementById("delete-modal");
    let confirmYes = deleteModal.querySelector(".del-confirm-yes");
    let confirmNo = deleteModal.querySelector(".del-confirm-no");

    delBtn.addEventListener("click", function () {
        deleteModal.style.display = "block";
    });

    confirmNo.addEventListener("click", function () {
        // 등록 처리
        deleteModal.style.display = "none"; // 모달창 닫기
    });

    confirmYes.addEventListener("click", function () {
        // 등록 처리
        deleteModal.style.display = "none"; // 모달창 닫기
    });
});