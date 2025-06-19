
  const logo = document.getElementById("logo-click");

  logo.addEventListener("click", function (event) {
    event.stopPropagation();
    logo.classList.add("active");
  });

  document.addEventListener("click", function (event) {
    if (!logo.contains(event.target)) {
      logo.classList.remove("active");
    }
  });

  function updateVNTime() {
    const vnTime = new Date().toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    document.getElementById('vn-clock').innerText = vnTime;
  }
  setInterval(updateVNTime, 1000);
  updateVNTime();

  var typed = new Typed(".typing", {
    strings: [" 🖐️ CHÀO MỪNG BẠN ĐẾN VỚI WEBSITE.! ", " 👨‍💻 NGƯỜI SÁNG LẬP - THIÊN THANH OFFICIAL", " 🎮 TRÒ CHƠI - GRAND THEFT AUTO V", "💡HÃY CÙNG CHÚNG TÔI PHÁT TRIỂN BẢN MOD."],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 2000,
    showCursor: false,
    loop: false,
  });