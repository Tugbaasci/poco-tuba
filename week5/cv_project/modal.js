var openModalBtn = document.getElementById("openModalBtn");

// Modal'ı seç
var modal = document.getElementById("myModal");

// Modal'ı kapatma butonunu seç
var closeBtn = document.getElementsByClassName("close")[0];

// Modal'ı açma butonuna tıklama olayı ekle
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Modal'ı kapatma butonuna tıklama olayı ekle
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Kullanıcı modal dışına tıkladığında, modalı kapat
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}