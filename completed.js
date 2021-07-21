/*---------NEW LAUNCHES START--------*/
  var newLaunchSpan = document.getElementsByClassName("newlaunchbutton");
  var newLaunchDiv = document.getElementsByClassName("new_launch_img_div");

  var l = 0;
  newLaunchSpan[1].onclick = () => {
    l++;
    for (var i of newLaunchDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-120px";
      }
      if (l > 1) {
        l = 1;
      }
    }
  };
  newLaunchSpan[0].onclick = () => {
    l--;
    for (var i of newLaunchDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-120px";
      }
      if (l < 0) {
        l = 0;
      }
    }
};
/*--------NEW LAUNCHES END-------*/
  
/*-------GOOD VIBES START-----*/
  var goodvibesSpan = document.getElementsByClassName("goodvibesbutton");
  var goodvibesDiv = document.getElementsByClassName("goodvibes_img_div");

  var l = 0;
  goodvibesSpan[1].onclick = () => {
    l++;
    for (var i of goodvibesDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1450px";
      }
      if (l == 6) {
        i.style.left = "-1740px";
      }
      if (l == 7) {
        i.style.left = "-2030px";
      }
      if (l == 8) {
        i.style.left = "-2320px";
      }
      if (l == 9) {
        i.style.left = "-2610px";
      }
      if (l == 10) {
        i.style.left = "-2900px";
      }
      if (l == 11) {
        i.style.left = "-3020px";
      }

      if (l > 11) {
        l = 11;
      }
    }
  };

  goodvibesSpan[0].onclick = () => {
    l--;
    for (var i of goodvibesDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1450px";
      }
      if (l == 6) {
        i.style.left = "-1740px";
      }
      if (l == 7) {
        i.style.left = "-2030px";
      }
      if (l == 8) {
        i.style.left = "-2320px";
      }
      if (l == 9) {
        i.style.left = "-2610px";
      }
      if (l == 10) {
        i.style.left = "-2900px";
      }
      if (l == 11) {
        i.style.left = "-3020px";
      }

      if (l < 0) {
        l = 0;
      }
    }
};
  
/*------GOOD VIBES END--------*/

/*-----PURPLLE PICKS START------*/
  var purpllepicksSpan = document.getElementsByClassName("purpllepicksbutton");
  var pirpllepicksDiv = document.getElementsByClassName("purpllepicks_img_div");

  var l = 0;
  purpllepicksSpan[1].onclick = () => {
    l++;
    for (var i of pirpllepicksDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1280px";
      }

      if (l > 5) {
        l = 5;
      }
    }
  };

  purpllepicksSpan[0].onclick = () => {
    l--;
    for (var i of pirpllepicksDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1280px";
      }

      if (l < 0) {
        l = 0;
      }
    }
  };

/*-----PURPLLE PICKS END-------*/

/*-----TOP BRANDS FOR YOU START-----*/
 var topbrandsSpan = document.getElementsByClassName("topbrandsbutton");
 var topbrandsDiv = document.getElementsByClassName("topbrands_img_div");

 var l = 0;
 topbrandsSpan[1].onclick = () => {
   l++;
   for (var i of topbrandsDiv) {
     if (l == 0) {
       i.style.left = "0px";
     }
     if (l == 1) {
       i.style.left = "-290px";
     }
     if (l == 2) {
       i.style.left = "-580px";
     }
     if (l == 3) {
       i.style.left = "-870px";
     }
     if (l == 4) {
       i.style.left = "-1160px";
     }
     if (l == 5) {
       i.style.left = "-1450px";
     }
     if (l == 6) {
       i.style.left = "-1740px";
     }
     if (l == 7) {
       i.style.left = "-2030px";
     }
     if (l == 8) {
       i.style.left = "-2320px";
     }
     if (l == 9) {
       i.style.left = "-2610px";
     }
     if (l == 10) {
       i.style.left = "-2900px";
     }
     if (l == 11) {
       i.style.left = "-3020px";
     }

     if (l > 11) {
       l = 11;
     }
   }
 };

 topbrandsSpan[0].onclick = () => {
   l--;
   for (var i of topbrandsDiv) {
     if (l == 0) {
       i.style.left = "0px";
     }
     if (l == 1) {
       i.style.left = "-290px";
     }
     if (l == 2) {
       i.style.left = "-580px";
     }
     if (l == 3) {
       i.style.left = "-870px";
     }
     if (l == 4) {
       i.style.left = "-1160px";
     }
     if (l == 5) {
       i.style.left = "-1450px";
     }
     if (l == 6) {
       i.style.left = "-1740px";
     }
     if (l == 7) {
       i.style.left = "-2030px";
     }
     if (l == 8) {
       i.style.left = "-2320px";
     }
     if (l == 9) {
       i.style.left = "-2610px";
     }
     if (l == 10) {
       i.style.left = "-2900px";
     }
     if (l == 11) {
       i.style.left = "-3020px";
     }

     if (l < 0) {
       l = 0;
     }
   }
 };

/*-----TOP BRANDS FOR YOU END-----*/

/*-----BRAND STORES START-----*/

var brandstoresSpan = document.getElementsByClassName("brandstoresbutton");
var brandstoresDiv = document.getElementsByClassName("brandstores_img_div");

var l = 0;
brandstoresSpan[1].onclick = () => {
  l++;
  for (var i of brandstoresDiv) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-290px";
    }
    if (l == 2) {
      i.style.left = "-580px";
    }
    if (l == 3) {
      i.style.left = "-870px";
    }
    if (l == 4) {
      i.style.left = "-1160px";
    }
    if (l == 5) {
      i.style.left = "-1450px";
    }
    if (l == 6) {
      i.style.left = "-1740px";
    }
    if (l == 7) {
      i.style.left = "-2030px";
    }
    if (l == 8) {
      i.style.left = "-2320px";
    }
    if (l == 9) {
      i.style.left = "-2610px";
    }
    if (l == 10) {
      i.style.left = "-2900px";
    }
    if (l == 11) {
      i.style.left = "-3020px";
    }

    if (l > 11) {
      l = 11;
    }
  }
};

brandstoresSpan[0].onclick = () => {
  l--;
  for (var i of brandstoresDiv) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-290px";
    }
    if (l == 2) {
      i.style.left = "-580px";
    }
    if (l == 3) {
      i.style.left = "-870px";
    }
    if (l == 4) {
      i.style.left = "-1160px";
    }
    if (l == 5) {
      i.style.left = "-1450px";
    }
    if (l == 6) {
      i.style.left = "-1740px";
    }
    if (l == 7) {
      i.style.left = "-2030px";
    }
    if (l == 8) {
      i.style.left = "-2320px";
    }
    if (l == 9) {
      i.style.left = "-2610px";
    }
    if (l == 10) {
      i.style.left = "-2900px";
    }
    if (l == 11) {
      i.style.left = "-3020px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

/*-----BRAND STORES END-----*/