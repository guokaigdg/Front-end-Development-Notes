const daySpan = document.querySelector(".daySpan"),
  hourSpan = document.querySelector(".hourSpan"),
  minuteSpan = document.querySelector(".minuteSpan"),
  srcondSpan = document.querySelector(".secondSpan");
deadLine = new Date("2023-8-9 00:00"); //未来要开始的时间

function countDown() {
  const now = new Date();
  timeRemainning = deadLine - now; // 剩余倒计时
  let day, hour, minute, second;
  if (timeRemainning < 0) {
    return 0;
  }
  second = Math.floor(timeRemainning / 1000 % 60);
  minute = Math.floor(timeRemainning / 1000 / 60 % 60);
  hour = Math.floor(timeRemainning / 1000 / 60 / 60 % 24);
  day = Math.floor(timeRemainning / 1000 / 60 / 60 / 24);

  daySpan.innerHTML = day + "天";
  hourSpan.innerHTML = hour + "时";
  minuteSpan.innerHTML = minute + "分";
  srcondSpan.innerHTML = second + "秒";

  setTimeout(countDown, 1000);
}

countDown();
