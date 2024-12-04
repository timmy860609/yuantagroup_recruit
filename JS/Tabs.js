function showTab(tabIndex) {
    const contents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');

    // 隱藏所有 tab 內容
    contents.forEach((content, index) => {
        content.classList.remove('active');
        tabs[index].classList.remove('active');
    });

    // 顯示選中的 tab 內容
    document.querySelectorAll('.tab-content')[tabIndex].classList.add('active');
    tabs[tabIndex].classList.add('active');
}

