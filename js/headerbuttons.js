document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = "../index.html";
  });
 
  document.getElementById("boardButton").addEventListener("click", function() {
    window.location.href = "html/board.html";
  });

  document.getElementById("portoButton").addEventListener("click", function() {
    window.location.href = "https://portoseguro.ba.gov.br";
  });

// Fale conosco button scrolling
  document.getElementById('faleConosco').addEventListener('click', function() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
  