let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
function homeP1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function homeP2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function homeP3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function guestP1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function guestP2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function guestP3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
function reset()
{
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

