function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  $(document).ready(function() {
    $(".iframe1").click(function() {
      $("#frame1").toggle();
    });
  });
  $(document).ready(function() {
    $(".iframe2").click(function() {
      $("#frame2").toggle();
    });
  });
  $(document).ready(function() {
    $(".iframe3").click(function() {
      $("#frame3").toggle();
    });
  });
  $(document).ready(function() {
    $(".iframe4").click(function() {
      $("#frame4").toggle();
    });
  });
  

  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000)
};




var getHolidays = function () {
  var apiUrl = 'https://calendarific.com/api/v2/holidays?api_key=f4023e86e7bcf08b446daeeee7c4c8dcdc4897a8&country=US&year=2021';
  console.log(apiUrl);

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          displayHolidays(data,);
          // displayRepos([], user);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
};
var modalButton = document.getElementById("modalButton");

$( function() {$( "#dialog" ).dialog();
  $( "#dialog" ).dialog("close");
  $ ("#modalButton").on("click",function(){
    $( "#dialog" ).dialog("open");
    getHolidays();
  })
} );

var displayHolidays=function(data){
  
  for(var i=0;i<data.response.holidays.length; i++){
    var holiday= data.response.holidays[i]
    console.log(holiday);

    var body = document.getElementById("dialog");

    var listEl = document.createElement("ol");
    // Create ordered list items
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    
    li1.textContent = "Hi";
    li2.textContent = "How are you ";

    // //   li1.textContent = holiday.data[i].name;
    // li2.textContent = holiday.data[i].date;
    
    body.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);


  
   



  }
}


modalButton.addEventListener('click', displayHolidays);

// var createList = document.createElement("li");
// createList.innerHTML = displayHolidays; 
// createList.appendChild("#dialog");

