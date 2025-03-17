// Tính giảm giá theo sự kiện mua sắm

let suKien = "blackfriday"; 

if (suKien === "blackfriday") {
    console.log("Giảm 50% toàn bộ sản phẩm!");
} else if (suKien === "cybermonday") {
    console.log("Giảm 40% cho sản phẩm công nghệ!");
} else if (suKien === "christmas") {
    console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
} else {
    console.log("Không có ưu đãi nào.");
}

switch (suKien) {
    case "blackfriday":
        console.log("Giảm 50% toàn bộ sản phẩm!");
        break;
    case "cybermonday":
        console.log("Giảm 40% cho sản phẩm công nghệ!");
        break;
    case "christmas":
        console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
        break;
    default:
        console.log("Không có ưu đãi nào.");
}

