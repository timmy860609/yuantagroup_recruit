// 獲取元素
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const inputField = document.getElementById('input-field');
const idNumberRadio = document.getElementById('ID-number');
const passportRadio = document.getElementById('passport');
const backToTopButton = document.getElementById('backToTop');

// 開啟選單時禁止背景滾動
function openMenu() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // 禁止背景滾動
}

// 關閉選單時恢復背景滾動
function closeMenu() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // 恢復背景滾動
}

// 點擊漢堡圖示開啟選單，並阻止預設行為
hamburger.addEventListener('click', function (event) {
    event.preventDefault(); // 阻止預設行為
    openMenu();
});

// 點擊遮罩關閉選單
overlay.addEventListener('click', closeMenu);

// 點擊關閉按鈕關閉選單
closeBtn.addEventListener('click', closeMenu);

// GoToTop 功能
// 當用戶滾動頁面時，顯示或隱藏按鈕
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add('show'); // 添加顯示類
    } else {
        backToTopButton.classList.remove('show'); // 移除顯示類
    }
};

// 點擊按鈕時，平滑滾動到頁面頂部
backToTopButton.addEventListener('click', function (e) {
    e.preventDefault(); // 阻止預設行為

    window.scrollTo({
        top: 0, // 滾動到頁面的最上方
        behavior: 'smooth' // 平滑滾動
    });
});

// 更新 placeholder 根據選擇的單選框
document.querySelectorAll('input[name="styleToggle"]').forEach(radio => {
    radio.addEventListener('change', () => {
        inputField.placeholder = radio.id === 'ID-number' 
            ? '請輸入身分證字號' 
            : '請輸入護照號碼';
    });
});

// 新增功能：同步控制 sidebar 和 overlay
document.addEventListener("DOMContentLoaded", () => {
    // 點擊 overlay 關閉選單
    overlay.addEventListener('click', closeMenu);

    // 點擊 close 按鈕關閉選單
    closeBtn.addEventListener('click', closeMenu);

    // 強制關閉條件：當視窗寬度超過 1023px 時
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1023) {
            closeMenu();
        }
    });

    // 初始化檢查視窗大小，避免進入頁面時寬度超過 1023px 但未關閉 overlay
    if (window.innerWidth > 1023) {
        closeMenu();
    }
});
