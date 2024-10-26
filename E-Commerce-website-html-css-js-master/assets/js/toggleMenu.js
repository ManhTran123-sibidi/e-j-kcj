// Chọn tất cả các hình ảnh nhỏ
var smallImgs = document.querySelectorAll(".small-img");

// Lặp qua từng hình ảnh nhỏ và thêm sự kiện click
smallImgs.forEach(function (smallImg) {
  smallImg.onclick = function () {
    // Lấy id của sản phẩm từ thuộc tính data-product
    var productId = smallImg.getAttribute("data-product");
    // Tìm hình ảnh lớn tương ứng với sản phẩm
    var productImg = document.getElementById("ProductImg-" + productId);
    // Đổi hình ảnh lớn thành hình ảnh nhỏ được nhấp
    productImg.src = smallImg.src;
  };
});
