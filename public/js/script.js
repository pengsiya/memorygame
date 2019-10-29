let td = document.querySelectorAll("td");
let bingo = true;
let goal_count;
setTimeout(() => {
    td.forEach((item) => {
        item.onclick = clickTile;
    })
}, 3000)

function clickTile () {
    if(goal_count == 0) return
    this.onclick = null
    let goal_count_str = document.getElementById('goal-count')
    goal_count = Number(goal_count_str.textContent)
    goal_count_str.textContent = String(--goal_count)
    if (this.classList.contains('check')) {
        if (goal_count > 0 || (goal_count == 0 && !bingo))
            this.classList.add('clicked');
        else {
            let tile = this.children[0];
            tile.style.display = "block";
            tile.classList.add('tile-pop');
        }
    }
    else {
        let tile = this.children[0]
        tile.style.display = "block";
        tile.classList.add('tile-pop');
        bingo = false;
    }
    if (goal_count == 0) {
        if (bingo) {
            let xhttp = new XMLHttpRequest();
            xhttp.open('POST', '/game/success')
            xhttp.send()
        } else {
            let xhttp = new XMLHttpRequest();
            xhttp.open('POST', '/game/failure')
            xhttp.send()
        }
        setTimeout(prepareNextRound, 1000)
    }
}

function prepareNextRound() {
    let checked = document.querySelectorAll("td.check");
    let wrong = false;
    checked.forEach((item) => {
        if (!item.classList.contains('clicked')
        && item.children[0].style.display == '') {
            item.classList.add('clicked')
            wrong = true;
        }
    })
    setTimeout(() => {
        window.location.href = '/game'
    }, wrong ? 2000 : 1000);
}