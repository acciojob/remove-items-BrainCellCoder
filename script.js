const btn = document.getElementById("btn");
btn.addEventListener("click", () =>{
  const colorSelect = document.getElementById('colorSelect');
  const selectedIndex = colorSelect.selectedIndex;
  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
})