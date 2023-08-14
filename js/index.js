//Bài 1
document.getElementById("handleSo").onclick = function () {
  // B1: xác định input
  var so1 = +document.getElementById("so1").value;
  var so2 = +document.getElementById("so2").value;
  var so3 = +document.getElementById("so3").value;
  var temp; //biến gán tạm thời
  // B2: xử lý
  if (so1 > so2) {
    temp = so1;
    so1 = so2;
    so2 = temp;
  }
  if (so1 > so3) {
    temp = so1;
    so1 = so3;
    so3 = temp;
  }
  if (so2 > so3) {
    temp = so2;
    so2 = so3;
    so3 = temp;
  }
  // B3: xuất kết quả ra màn hình.
  document.getElementById("resultSo").innerHTML = `
    <p>Dãy số tăng dần lần lượt : ${so1} ${so2} ${so3}</p>
  `;
};

//Bài 2
document.getElementById("handleHello").onclick = function () {
  // B1: xác định input
  var hello = document.getElementById("hello").value;
  var html;
  // B2: xử lý
  switch (hello) {
    case (html = "B"):
      html = "Chào mừng người trụ cột gia đình";
      break;
    case (html = "M"):
      html = "Chào mừng người nấu ăn ngon nhất";
      break;
    case (html = "A"):
      html = "Chào mừng thiếu niên trúng tuyển ĐH Harvard";
      break;
    case (html = "E"):
      html = "Chào mừng thiếu nữ xinh đẹp nhất cõi trần";
      break;
    default:
      html = "Vui lòng nhập đúng mã người sử dụng";
  }
  // B3: xuất kết quả ra màn hình.
  document.getElementById("resultHello").innerHTML = html;
};
//Bài 3
document.getElementById("handleNumber").onclick = function () {
  // B1: xác định input
  var num1 = +document.getElementById("num1").value;
  var num2 = +document.getElementById("num2").value;
  var num3 = +document.getElementById("num3").value;
  var countEven = 0; // biến đếm chẵn
  var countOdd = 0; // biến đếm lẻ
  // B2: xử lý
  if (num1 % 2 == 0) countEven++;
  else countOdd++;
  if (num2 % 2 == 0) countEven++;
  else countOdd++;
  if (num3 % 2 == 0) countEven++;
  else countOdd++;
  // B3: xuất kết quả ra màn hình.
  document.getElementById("resultNumber").innerHTML = `
    <p>Có ${countEven} số chẵn</p>
    <p>Có ${countOdd} Số lẻ</p>
  `;
};
//Bài 4
document.getElementById("handleTG").onclick = function () {
  // B1: xác định input
  var canh1 = +document.getElementById("canh1").value;
  var canh2 = +document.getElementById("canh2").value;
  var canh3 = +document.getElementById("canh3").value;
  // B2: xử lý
  if (
    canh1 + canh2 <= canh3 ||
    canh1 + canh3 <= canh2 ||
    canh2 + canh3 <= canh1
  )
    html = "Tam giác không hợp lê. Vui lòng nhập lại cạnh";
  else if (
    canh1 * canh1 + canh2 * canh2 == canh3 * canh3 ||
    canh1 * canh1 + canh3 * canh3 == canh2 * canh2 ||
    canh2 * canh2 + canh3 * canh3 == canh1 * canh1
  )
    html = "Đây là tam giác vuông";
  else if (canh1 == canh2 && canh2 == canh3) html = "Đây là tam giác đều";
  else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3)
    html = "Đây là tam giác cân";
  else html = "Đây là tam giác thường";
  // B3: xuất kết quả ra màn hình.
  document.getElementById("resultTG").innerHTML = html;
};
