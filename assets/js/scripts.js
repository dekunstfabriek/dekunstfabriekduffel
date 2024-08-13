// terug linken naar vorige pagina
    function goBack() {
      window.history.back();
    }
// headroom
if (document.documentElement.clientWidth < 1024) {
    // ZET HIER HET SCRIPT TUSSEN ALS JE WILT DAT HET PAS WERKT BIJ EEN SCREENWIDTH VAN MINDER DAN 1024px
var myElement = document.getElementById("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
    tolerance: {
        down : 4,
        up : 12
    },
    offset:
        200
});
// met volgende functie werkt headroom niet bij de kunstfabriek page
var el = document.getElementById('kunstfabriek');
if (el == null) {
    headroom.init();
}
else {
    headroom.destroy();
}
}
// let op: dit heb ik moeten veranderen om het goed te laten werken:
// Z-indexen veranderd bij headroom-classen en hamburger-classes en navigation
// op de "body" heb ik top: 140px moeten plaatsen
// @media toegevoegd voor .header--fixed en body (in navigation.scss
