 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const scrolled = window.scrollY > 50; /* Change 50 to the desired scroll threshold */
    
    if (scrolled) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
  
  let textIndex = 0;
  let currentIndex = 0;
  
  function typeWriter(texts, element, speed, delay) {
      const interval = setInterval(function() {
          const text = texts[textIndex];
          if (currentIndex < text.length) {
              element.textContent += text.charAt(currentIndex);
              currentIndex++;
          } else {
              clearInterval(interval); // Stop typing this text
              setTimeout(function() {
                  deleteText(element, speed);
              }, delay);
          }
      }, speed);
  }
  
  function deleteText(element, speed) {
      let i = element.textContent.length - 1;
      const interval = setInterval(function() {
          if (i >= 0) {
              element.textContent = element.textContent.slice(0, -1);
              i--;
          } else {
              clearInterval(interval);
              // Move to the next text or start over
              typeNextText();
          }
      }, speed);
  }
  
  function typeNextText() {
      textIndex = (textIndex + 1) % texts.length;
      currentIndex = 0;
      typeWriter(texts, element, speed, delay);
  }
  
  // Define texts and initial parameters
  const texts = ["A Frontend Developer", "A Cloud Learner", "An IT Enthusiast"];
  const element = document.getElementById("typewriter");
  const speed = 100;
  const delay = 2000;
  
  // Call the function to start typing
  typeWriter(texts, element, speed, delay);