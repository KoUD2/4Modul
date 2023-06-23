const element = document.getElementsByClassName("round_form1");
const element2 = document.getElementsByClassName("round_form2");
const element3 = document.getElementsByClassName("round_form3");
const element4 = document.getElementsByClassName("tri_game_1");
const element5 = document.getElementsByClassName("tri_game_2");
const element6 = document.getElementsByClassName("tri_game_3");
const element7 = document.getElementsByClassName("club_game_1");
const element8 = document.getElementsByClassName("sdvs");
const element9 = document.getElementsByClassName("diamond_game_1");
const element10 = document.getElementsByClassName("club_game_2");
const element11 = document.getElementsByClassName("heart_game_1");
const element12 = document.getElementsByClassName("spade_game_2");
const element13 = document.getElementsByClassName("diamond_game_2");

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

function moveElement() {
  
  const horizontalDirection = Math.random() > 0.5 ? 1 : -1; 
  const verticalDirection = Math.random() > 0.5 ? 1 : -1;

  const currentX = element[0].offsetLeft;
  const currentY = element[0].offsetTop;
  const current2X = element2[0].offsetLeft;
  const current2Y = element2[0].offsetTop;
  const current3X = element3[0].offsetLeft;
  const current3Y = element3[0].offsetTop;
  const current4X = element4[0].offsetLeft;
  const current4Y = element4[0].offsetTop;
  const current5X = element5[0].offsetLeft;
  const current5Y = element5[0].offsetTop;
  const current6X = element6[0].offsetLeft;
  const current6Y = element6[0].offsetTop;
  const current7X = element7[0].offsetLeft;
  const current7Y = element7[0].offsetTop;
  const current8X = element8[0].offsetLeft;
  const current8Y = element8[0].offsetTop;
  const current9X = element9[0].offsetLeft;
  const current9Y = element9[0].offsetTop;
  const current10X = element10[0].offsetLeft;
  const current10Y = element10[0].offsetTop;
  const current11X = element11[0].offsetLeft;
  const current11Y = element11[0].offsetTop;
  const current12X = element12[0].offsetLeft;
  const current12Y = element12[0].offsetTop;
  const current13X = element13[0].offsetLeft;
  const current13Y = element13[0].offsetTop;


  const newX = currentX + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY = currentY + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX2 = current2X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY2 = current2Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX3 = current3X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY3 = current3Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX4 = current4X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY4 = current4Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX6 = current6X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY6 = current6Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX7 = current7X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY7 = current7Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX8 = current8X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY8 = current8Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX9 = current9X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY9 = current9Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX10 = current10X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY10 = current10Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX11 = current11X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY11 = current11Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX12 = current12X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY12 = current12Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX13 = current13X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY13 = current13Y + verticalDirection * Math.floor(Math.random() * 10 * 10);
  const newX5 = current5X + horizontalDirection * Math.floor(Math.random() * 10 * 10);
  const newY5 = current5Y + verticalDirection * Math.floor(Math.random() * 10 * 10);

  
  if (newX >= 0 && newX <= screenWidth - element[0].offsetWidth) {
    element[0].style.left = newX + 'px';
  }
  if (newY >= 0 && newY <= screenHeight - element[0].offsetHeight) {
    element[0].style.top = newY + 'px';
  }
  if (newX2 >= 0 && newX2 <= screenWidth - element2[0].offsetWidth) {
    element2[0].style.left = newX2 + 'px';
  }
  if (newY2 >= 0 && newY2 <= screenHeight - element2[0].offsetHeight) {
    element2[0].style.top = newY2 + 'px';
  }
  if (newX3 >= 0 && newX3 <= screenWidth - element3[0].offsetWidth) {
    element3[0].style.left = newX3 + 'px';
  }
  if (newY3 >= 0 && newY3 <= screenHeight - element3[0].offsetHeight) {
    element3[0].style.top = newY3 + 'px';
  }
  if (newX4 >= 0 && newX4 <= screenWidth - element4[0].offsetWidth) {
    element4[0].style.left = newX4 + 'px';
  }
  if (newY4 >= 0 && newY4 <= screenHeight - element4[0].offsetHeight) {
    element4[0].style.top = newY4 + 'px';
  }
  if (newX5 >= 0 && newX5 <= screenWidth - element5[0].offsetWidth) {
    element5[0].style.left = newX5 + 'px';
  }
  if (newY5 >= 0 && newY5 <= screenHeight - element5[0].offsetHeight) {
    element5[0].style.top = newY5 + 'px';
  }
  if (newX6 >= 0 && newX6 <= screenWidth - element6[0].offsetWidth) {
    element6[0].style.left = newX6 + 'px';
  }
  if (newY6 >= 0 && newY6 <= screenHeight - element6[0].offsetHeight) {
    element6[0].style.top = newY6 + 'px';
  }
  if (newX7 >= 0 && newX7 <= screenWidth - element7[0].offsetWidth) {
    element7[0].style.left = newX7 + 'px';
  }
  if (newY7 >= 0 && newY7 <= screenHeight - element7[0].offsetHeight) {
    element7[0].style.top = newY7 + 'px';
  }
  if (newX8 >= 0 && newX8 >= screenWidth - element8[0].offsetWidth) {
    element8[0].style.left = newX8 + 'px';
  }
  if (newY8 >= 0 && newY8 >= screenHeight - element8[0].offsetHeight) {
    element8[0].style.top = newY8 + 'px';
  }
  if (newX9 >= 0 && newX9 <= screenWidth - element9[0].offsetWidth) {
    element9[0].style.left = newX9 + 'px';
  }
  if (newY9 >= 0 && newY9 <= screenHeight - element9[0].offsetHeight) {
    element9[0].style.top = newY9 + 'px';
  }
  if (newX10 >= 0 && newX10 <= screenWidth - element10[0].offsetWidth) {
    element10[0].style.left = newX10 + 'px';
  }
  if (newY10 >= 0 && newY10 <= screenHeight - element10[0].offsetHeight) {
    element10[0].style.top = newY10 + 'px';
  }
  if (newX11 >= 0 && newX11 <= screenWidth - element11[0].offsetWidth) {
    element11[0].style.left = newX11 + 'px';
  }
  if (newY11 >= 0 && newY11 <= screenHeight - element11[0].offsetHeight) {
    element11[0].style.top = newY11 + 'px';
  }1
  if (newX12 >= 0 && newX12 <= screenWidth - element12[0].offsetWidth) {
    element12[0].style.left = newX12 + 'px';
  }
  if (newY12 >= 0 && newY12 <= screenHeight - element12[0].offsetHeight) {
    element12[0].style.top = newY12 + 'px';
  }
  if (newX13 >= 0 && newX13 <= screenWidth - element13[0].offsetWidth) {
    element13[0].style.left = newX13 + 'px';
  }
  if (newY13 >= 0 && newY13 <= screenHeight - element13[0].offsetHeight) {
    element13[0].style.top = newY13 + 'px';
  }
}

setInterval(moveElement, 1000);

$(document).ready(function(){
    $('.diamond_game_2').click(function(){
        
    });
}(jQuery));