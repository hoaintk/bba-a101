// Chọn idol K-pop để nghe nhạc

let idol = "blackpink"; 

if (idol === "bts") {
    console.log("Nghe ngay 'Dynamite'!");
} else if (idol === "blackpink") {
    console.log("Thử 'How You Like That' nào!");
} else if (idol === "exo") {
    console.log("Đừng bỏ lỡ 'Love Shot'!");
} else if (idol === "twice") {
    console.log("Bật ngay 'The Feels' nào!");
} else {
    console.log("Idol không có trong danh sách.");
}

switch (idol) {
    case "bts":
        console.log("Nghe ngay 'Dynamite'!");
        break;
    case "blackpink":
        console.log("Thử 'How You Like That' nào!");
        break;
    case "exo":
        console.log("Đừng bỏ lỡ 'Love Shot'!");
        break;
    case "twice":
        console.log("Bật ngay 'The Feels' nào!");
        break;
    default:
        console.log("Idol không có trong danh sách.");
}

