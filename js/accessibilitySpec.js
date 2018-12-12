describe("Accessiblity dropdown test suite", function() {

  it("pressing dyselxia adds relevant tag to session storage", function(){
    sessionStorage.accessList = JSON.stringify([]);
    ToggleDyslexia();
    toggleLocalStorage("Dyslexic");

    var list = JSON.parse(sessionStorage.accessList);

    expect(list).toEqual(["Dyslexic"])
    sessionStorage.accessList = JSON.stringify([]);
  });

  it("pressing dyslexiaBttn when dyslexic tag already added, removes it", function(){
    sessionStorage.accessList = JSON.stringify([]);
    ToggleDyslexia();
    toggleLocalStorage("Dyslexic");
    ToggleDyslexia();
    toggleLocalStorage("Dyslexic");
    var list = JSON.parse(sessionStorage.accessList);
    expect(list).toEqual([])
  });

  it("pressing all buttons adds all tags", function(){
    sessionStorage.accessList = JSON.stringify([]);
    ToggleDyslexia();
    toggleLocalStorage("Dyslexic");
    ToggleADHD();
    toggleLocalStorage("ADHD");
    ToggleBigText();
    toggleLocalStorage("NearSighted");
    var list = JSON.parse(sessionStorage.accessList);
    expect(list).toEqual(["Dyslexic", "ADHD", "NearSighted"])
    sessionStorage.accessList = JSON.stringify([]);
  })

})
