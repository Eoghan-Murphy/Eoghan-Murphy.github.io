describe("undo button test suite", function() {

  it("pressing undo makes message display", function(){
    var undoMessage = $("#undoMessage")
    expect(undoMessage.text()).toEqual("")

    //body of undo function
    $("#undoMessage").text('Recent Changes Undone');
    setTimeout( function() {
      $( "#undoMessage" ).fadeOut( "slow", function() {
        $("#undoMessage").text('');
      });
    }, 3000 );

    expect(undoMessage.text()).toEqual("Recent Changes Undone")

  });

})
