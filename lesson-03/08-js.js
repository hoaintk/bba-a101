// Lựa chọn phương tiện di chuyển

let vehicle = "car"; 

if (vehicle === "bike") {
    console.log("Mất khoảng 15 phút");
} else if (vehicle === "car") {
    console.log("Mất khoảng 10 phút");
} else if (vehicle === "bus") {
    console.log("Mất khoảng 30 phút");
} else if (vehicle === "train") {
    console.log("Mất khoảng 45 phút");
} else {
    console.log("Phương tiện không hợp lệ.");
}

switch (vehicle) {
    case "bike":
        console.log("Mất khoảng 15 phút");
        break;
    case "car":
        console.log("Mất khoảng 10 phút");
        break;
    case "bus":
        console.log("Mất khoảng 30 phút");
        break;
    case "train":
        console.log("Mất khoảng 45 phút");
        break;
    default:
        console.log("Phương tiện không hợp lệ.");
}

