// Dự đoán kết quả trận bóng đá

let result = "draw";
if (result === "win") {
    console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
} else if (result === "draw") {
    console.log("Trận đấu hòa, thật đáng tiếc!");
} else if (result === "lose"){
    console.log("Thua rồi, nhưng đừng bỏ cuộc!");
} else {
    console.log("Giá trị không hợp lệ.");
}


switch (result) {
    case "win":
        console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
        break;
    case "draw":
        console.log("Trận đấu hòa, thật đáng tiếc!");
        break;
    case "lose":
        console.log("Thua rồi, nhưng đừng bỏ cuộc!");
        break;
    default:
        console.log("Giá trị không hợp lệ.");
}