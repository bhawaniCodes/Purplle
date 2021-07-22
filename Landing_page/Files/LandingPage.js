  




// Scroll up Button Functionality
const scrolbtn = document.getElementById("btnScrollToTop");
  scrolbtn.addEventListener('click', scrolUp);
  function scrolUp(){
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth",
    })
  }
