// Chọn gói cước Spotify

let package = "premium"; 

if(package === "free") {
    console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
} else if (package === "premium") {
    console.log("Không quảng cáo, nghe nhạc offline!");
} else if (package === "family") {
    console.log("Gói dùng cho nhiều thành viên!");
} else if (package === "student") {
    console.log("Ưu đãi dành riêng cho sinh viên!");
} else {
    console.log("Gói cước không hợp lệ.");
}


switch (package) {
    case "free":
        console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
        break;
    case "premium":
        console.log("Không quảng cáo, nghe nhạc offline!");
        break;
    case "family":
        console.log("Gói dùng cho nhiều thành viên!");
        break;
    case "student":
        console.log("Ưu đãi dành riêng cho sinh viên!");
        break;
    default:
        console.log("Gói cước không hợp lệ.");
        }