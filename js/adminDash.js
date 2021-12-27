function openTab(tabtype, tabName) {
  var i, tabs;
  // console.log(tabtype, tabName);

  tabs = document.getElementsByClassName(tabtype);
  for (i = 0; i < tabs.length; i++) {
    // console.log(tabs[i].id, tabName);
    if (tabs[i].id == tabName) {
      tabs[i].classList.remove("hide");
    } else {
      tabs[i].classList.add("hide");
      // if (tabName == "smalltab") {
      //     tabs[i].classList.add("selected")

      // }
    }
  }
}

function closeAdminForm() {
  console.log("hide");

  console.log(document.getElementsByClassName("admin-form-card"));
  document.getElementsByClassName("admin-form-card").style.display = "none";

  //  .style.display = "none";
}
