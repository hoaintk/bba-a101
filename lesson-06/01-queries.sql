--  Lấy toàn bộ dữ liệu cho bảng languages
select * from languages;

-- Lấy ra dữ liệu bảng collections, limit 20 phần tử
select * from collections limit 20;

-- Tìm các cuốn sách (bảng books) có năm xuất bản lớn hơn 2000 
select name from books where publishedYear > 2000;
select * from books where publishedYear > 2000;

--  Tìm các cuốn sách có chứa từ tình yêu trong mô tả (description)
select * from books where description like '%tình yêu%';

-- Lấy ra dữ liệu bảng users, sắp xếp theo id giảm dần
select * from users order by id desc;