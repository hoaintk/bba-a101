// Chọn cấp bậc trong game

let rank = "gold"; 

if (rank === "bronze") {
    console.log("Bạn đang ở cấp bậc thấp nhất!");
} else if (rank === "silver") {
    console.log("Bạn đã có một số lợi ích!");
} else if (rank === "gold") {
    console.log("Bạn nhận được nhiều phần thưởng hơn!");
} else if (rank === "diamond") {
    console.log("Bạn thuộc top người chơi xuất sắc!");
} else {
    console.log("Cấp bậc không hợp lệ.");
}

switch (rank) {
    case "bronze":
        console.log("Bạn đang ở cấp bậc thấp nhất!");
        break;
    case "silver":
        console.log("Bạn đã có một số lợi ích!");
        break;
    case "gold":
        console.log("Bạn nhận được nhiều phần thưởng hơn!");
        break;
    case "diamond":
        console.log("Bạn thuộc top người chơi xuất sắc!");
        break;
    default:
        console.log("Cấp bậc không hợp lệ.");
}
