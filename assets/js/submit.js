const sb_btn = document.querySelector(".submit");
const thx_msg = document.querySelector(".thankyou_message");

function changeDisplay() {
  thx_msg.style.display = "flex";
}

sb_btn.addEventListener('click', changeDisplay);