  




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


  // -------------------------------------------------------------------------

    // Sliding part start - bhanu
    let i = 0;
    function slideImage() {
      let point1 = document.getElementById("point1");
      let point2 = document.getElementById("point2");
      let point3 = document.getElementById("point3");
      let point4 = document.getElementById("point4");
      let point5 = document.getElementById("point5");
      let leftMove = document.getElementById("leftMoveSlider");
      let rightMove = document.getElementById("rightMoveSlider");

      let slider_main_div = document.getElementById("slider_main_div");
  
      let div = document.createElement("div");
      div.setAttribute('class','.smooth');
      let arr = [
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626714490_skinstation-banner-web.png",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626775010_web-home-page-1298-px-_418-px.jpg",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626705125_tfs_web.jpg",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626705285_carmesi_web.jpg",
        "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626705429_garnier_web.jpg",
      ];
      let image = document.createElement("img");

      // 5 Second interval set here
      function setInt() {
        setInterval(function () {
          i++;
          if (i == arr.length) {
            i = 0;
          }
          // Function For bullet point
          arrayIndexsAtOnce(i)
          image.src = arr[i];
          div.append(image);
        }, 5000);
      }
      setInt();

      // Left Move Slider by Left Arrow
      function leftMoveSlider() {
        isClickPrev = true;
        i--;
        if (i == -1) {
          i = arr.length - 1;
        }
        // Function For bullet point
        arrayIndexsAtOnce(i)
        image.src = arr[i];
        div.append(image);
      }

      // Right Move Slider by Right Arrow
      function rightMoveSlider() {
        i++;
        if (i == arr.length) {
          i = 0;
        }
        // Function For bullet point
        arrayIndexsAtOnce(i)
        image.src = arr[i];
        div.append(image);
      }

      // Slide by clicking on bullet-1
      function point1Fun(){
        i = 0;
        // Function For bullet point
        arrayIndexsAtOnce(i)
        image.src = arr[i];
        div.append(image);
      }

      // Slide by clicking on bullet-2
      function point2Fun(){
        i = 1;
        // Function For bullet point
        arrayIndexsAtOnce(i)
        image.src = arr[i];
        div.append(image);
      }

      // Slide by clicking on bullet-3
      function point3Fun(){
        i = 2;
        // Function For bullet point
        arrayIndexsAtOnce(i)
        image.src = arr[i];
        div.append(image);
      }

      // Slide by clicking on bullet-4
      function point4Fun(){
        i = 3;
        // Function For bullet point
        arrayIndexsAtOnce(i)
        image.src = arr[i];
        div.append(image);
      }

      // Slide by clicking on bullet-5
      function point5Fun(){
        i = 4;
        // Function For bullet point
        arrayIndexsAtOnce(i)
        image.src = arr[i];
        div.append(image);
      }


      // Left & Right Arrow shift
      leftMove.addEventListener("click", leftMoveSlider);
      rightMove.addEventListener("click", rightMoveSlider);

      // Shift by click on code
      point1.addEventListener("click", point1Fun)
      point2.addEventListener("click", point2Fun)
      point3.addEventListener("click", point3Fun)
      point4.addEventListener("click", point4Fun)
      point5.addEventListener("click", point5Fun)

      // To Reduce code complexity checking every if sending the color according
      function arrayIndexsAtOnce(i){
          if(i == 0){ return arr0Index()}
          else if(i == 1){ return arr1Index()}
          else if(i == 2){ return arr2Index()}
          else if(i == 3){return arr3Index()}
          else if(i == 4){return arr4Index()}
      }
   

      // Below are function to check, set & remove bullet colors [for array of 5 length]
      function arr0Index(){
         point1.setAttribute('id','firstBullet')
         point2.removeAttribute('id','firstBullet')
         point3.removeAttribute('id','firstBullet')
         point4.removeAttribute('id','firstBullet')
         point5.removeAttribute('id','firstBullet') 
      }
      function arr1Index(){
         point1.removeAttribute('id','firstBullet')
         point2.setAttribute('id','firstBullet')
         point3.removeAttribute('id','firstBullet')
         point4.removeAttribute('id','firstBullet')
         point5.removeAttribute('id','firstBullet')
      }
      function arr2Index(){
        point1.removeAttribute('id','firstBullet')
        point2.removeAttribute('id','firstBullet')
        point3.setAttribute('id','firstBullet')
        point4.removeAttribute('id','firstBullet')
        point5.removeAttribute('id','firstBullet')
      }
      function arr3Index(){
        point1.removeAttribute('id','firstBullet')
        point2.removeAttribute('id','firstBullet')
        point3.removeAttribute('id','firstBullet')
        point4.setAttribute('id','firstBullet')
        point5.removeAttribute('id','firstBullet') 
      }
      function arr4Index(){
        point1.removeAttribute('id','firstBullet')
        point2.removeAttribute('id','firstBullet')
        point3.removeAttribute('id','firstBullet')
        point4.removeAttribute('id','firstBullet')
        point5.setAttribute('id','firstBullet') 
      }

      slider_main_div.append(div);
    }

slideImage();
    
// Sliding part end

// ------------------------------------------------------------------

