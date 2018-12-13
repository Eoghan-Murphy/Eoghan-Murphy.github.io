$(document).ready(function(){

  $("#AccessibilityBttn").init();

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

$(document).on('click', '#employBtn', function(elem) {
  var item = $(this).parent();
  item.empty();

  $(item).append('<p class="employed">Accepted</p>');
});

$(document).on('click', '#rejectBtn', function(elem) {
  var item = $(this).parent();
  item.empty();

  $(item).append('<p class="rejected">Rejected</p>');
});

$(document).on('click', '#request', function(elem) {
  var item = $(this).parent();
  item.empty();

  $(item).append('<p class="requested">Requested</p>')
});

  $(document).on('click', '#undoBttn',function(){
    $("#jobMessage").text('Recent Changes Undone');
    setTimeout( function() {
        $("#jobMessage").text('');
    }, 3000 );

    for(var i = 1; i <= 3; i++)
    {
      var status = '#status' + i;
      var item = $(status);
      item.empty();

      $(item).append('<button id="employBtn">Employ</button> <button id="rejectBtn">Reject</button>');
    }
  })

  $(document).on('click', '#undoEmployBttn',function(){
    $("#jobMessage").text('Recent Changes Undone');
    setTimeout( function() {
        $("#jobMessage").text('');
    }, 3000 );

    for(var i = 1; i <= 3; i++)
    {
      var status = '#status' + i;
      var item = $(status);
      item.empty();

      $(item).append('<button id="request">Request Interview</button>');
    }
  })

  $(document).on('click', '#submitNewJob',function(){
    $("#jobMessage").text('New Job Added');
    setTimeout( function() {
        $("#jobMessage").text('');
    }, 3000 );
  })

  $(document).on('click', '#applyBtn',function(){
    $("#applyMessage").text('Success! Job Applied For!');
    setTimeout( function() {
        $("#applyMessage").text('');
    }, 3000 );
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
