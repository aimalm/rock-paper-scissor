(function() {

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        console.log(playBtn);

        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        const sidebarLeft = document.querySelector(".sidebar_left")
        const sidebarRight = document.querySelector(".sidebar_right")
    
        playBtn.addEventListener("click", () => {
          introScreen.classList.add("fadeOut");
          match.classList.add("fadeIn");
          sidebarLeft.classList.add("fadeIn");
          sidebarRight.classList.add("fadeIn");

          console.log(1);
        });
      };
      startGame();


})();