let teamoneshootbutton = document.querySelector("#teamone-shoot-button")
let teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button")
let teamOnenumshots = document.querySelector("#teamone-numshots")
let teamTwonumshots = document.querySelector("#teamtwo-numshots")
let resetbutton = document.querySelector("#reset-button")
let numresets = document.querySelector("#num-resets")
let goalnums1 = document.querySelector("#teamone-numgoals")
let goalnums2 = document.querySelector("#teamtwo-numgoals")

teamoneshootbutton.addEventListener("click", function () {
    console.log("+ button clicked")
    let newTeamOneNumShots = Number(teamOnenumshots.innerHTML) + 1;
    teamOnenumshots.innerHTML = newTeamOneNumShots;

    var g = Math.random(1);
    if (g > 0.5) {
        newgoalnums1 = Number(goalnums1.innerHTML) + 1;
        goalnums1.innerHTML = newgoalnums1;
    }

})


teamtwoshootbutton.addEventListener("click", function () {
    console.log("+ button clicked")
    let newTeamTwoNumshots = Number(teamTwonumshots.innerHTML) + 1;
    teamTwonumshots.innerHTML = newTeamTwoNumshots;

    var g = Math.random(1);
    if (g > 0.5) {
        newgoalnums2 = Number(goalnums2.innerHTML) + 1;
        goalnums2.innerHTML = newgoalnums2;
    }
})

resetbutton.addEventListener("click", function () {
    console.log(" button reset")
    let resetnumberup = Number(numresets.innerHTML) + 1;
    numresets.innerHTML = resetnumberup;
    
})