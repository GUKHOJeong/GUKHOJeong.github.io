document.querySelector('.dropbtn').addEventListener('click', function() {
const dropdownContent = this.nextElementSibling;
dropdownContent.classList.toggle('show');
});

// 메뉴 외 다른 곳을 클릭하면 메뉴가 닫히도록 함
window.addEventListener('click', function(e) {
if (!e.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
    const openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
});