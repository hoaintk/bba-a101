// Đặt món ăn nhanh

let food = "pizza"; 

if (food === "burger") {
    console.log("Giá: 5$");
} else if (food === "pizza") {
    console.log("Giá: 8$");
} else if (food === "sushi") {
    console.log("Giá: 12$");
} else if (food === "taco") {
    console.log("Giá: 6$");
} else {
    console.log("Món ăn không hợp lệ.");
}


switch (food) {
    case "burger":
        console.log("Giá: 5$");
        break;
    case "pizza":
        console.log("Giá: 8$");
        break;
    case "sushi":
        console.log("Giá: 12$");
        break;
    case "taco":
        console.log("Giá: 6$");
        break;
    default:
        console.log("Món ăn không hợp lệ.");
}
