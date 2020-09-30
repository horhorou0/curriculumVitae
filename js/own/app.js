let collapsedMenu = $(".navbar-toggler");
let mainMenu = $("#mainMenu");
function checkCollapsedMenu() {
  let attribute = collapsedMenu.attr("aria-expanded");
  if (attribute == "false") {
    mainMenu.removeClass("bg-primaire");
    mainMenu.addClass("bg-navbar-toggled");
  } else {
    mainMenu.addClass("bg-primaire");
    mainMenu.removeClass("bg-navbar-toggled");
  }
}

function showPhoneNumber() {
  $("#modalPhoneNumber").toggleClass("d-none animated fadeIn");
  $("#copyToClipBoard").toggleClass("d-none animated fadeIn");
}

function CopyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    // alert("text copied");
  }
}
