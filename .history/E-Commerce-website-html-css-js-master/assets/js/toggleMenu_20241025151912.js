// < !--JS for Toggle menu-- >
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

// copyright section change by year
let copyrightElem = document.getElementById('copyright-text');
let currentYear = new Date().getFullYear()
let fullText = `Copyright ${currentYear} - introidx`;
copyrightElem.innerText = fullText;

// Chọn hình ảnh chính và tất cả các hình ảnh nhỏ
var ProductImg = document.getElementById("ProductImg");
var smallImg = document.getElementsByClassName("small-img");

// Lặp qua từng hình ảnh nhỏ và thêm sự kiện click
for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function () {
    ProductImg.src = smallImg[i].src; // Đổi hình ảnh chính thành hình ảnh nhỏ được nhấp
  };
}
