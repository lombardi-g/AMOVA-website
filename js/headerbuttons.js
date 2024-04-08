document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = "../index.html";
  });
 
  document.getElementById("boardButton").addEventListener("click", function() {
    window.location.href = "html/board.html";
  });

  document.getElementById("portoButton").addEventListener("click", function() {
    window.location.href = "https://sites.google.com/view/amova-website/in%C3%ADcio";
  });

// Fale conosco button scrolling
  document.getElementById('faleConosco').addEventListener('click', function() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
  
