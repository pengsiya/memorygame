var checked = document.querySelectorAll("td.check");
checked.forEach((item) => {
    item.onclick = clickedGoodTile;
})

function clickedGoodTile () {
    this.classList.add('clicked');
}