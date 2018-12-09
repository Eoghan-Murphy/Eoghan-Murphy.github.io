$(document).ready(function(){

//used session storage so it wasnt AS permanent
  if (typeof(Storage) !== "undefined") {
    if(sessionStorage.accessList == null){
      sessionStorage.accessList = JSON.stringify([]);
    }
  }

  var disabilitydict = {
                  "NearSighted" : ToggleBigText,
                  "Dyslexic"    : ToggleDyslexia,
                  "ADHD"        : ToggleADHD
  };
    var list = JSON.parse(sessionStorage.accessList)
    for(var index in list){
      disabilitydict[list[index]]();
  }

  $(".switchCV").click(function(){
      $("#education").toggleClass("hidden");
      $("#workandproject").toggleClass("hidden");
  });

  $("#AccessibilityBttn").click(function(){
    $("#AccessibilityBttn").toggleClass("selected")
    $("#AccessibilityMenu").toggleClass("hidden");
  });

  $("#BigTextBttn").click(function(){
    ToggleBigText();
    toggleLocalStorage("NearSighted");
  });

  $("#DyslexiaBttn").click(function(){
    ToggleDyslexia();
    toggleLocalStorage("Dyslexic");
  });

  $("#ADHDBttn").click(function(){
    ToggleADHD();
    toggleLocalStorage("ADHD");
  });

  $(document).on('click', '#undoBttn',function(){
    $("#undoMessage").text('Recent Changes Undone');
    setTimeout( function(){
      $( "#undoMessage" ).fadeOut( "slow", function() {
        $("#undoMessage").text('');
      });
  }  , 3000 );
  })

});

function ToggleBigText() {
    $("#BigTextBttn").toggleClass("selected");
    $("body").toggleClass("bigText");
}

function ToggleDyslexia(){
  $("#DyslexiaBttn").toggleClass("selected");
  $("body").toggleClass("dyslexia");
  console.log(sessionStorage.accessList)
}

function ToggleADHD(){
  $("#ADHDBttn").toggleClass("selected");
  $("body").toggleClass("adhd");
}

function toggleLocalStorage(s){

  if (typeof(Storage) !== "undefined") {
      var list = JSON.parse(sessionStorage.accessList);
      var index = list.indexOf(s)

      if (index > -1) {
        list.splice(index, 1);
      }
      else{
        list.push(s);
      }
      sessionStorage.accessList = JSON.stringify(list)
  };
}
