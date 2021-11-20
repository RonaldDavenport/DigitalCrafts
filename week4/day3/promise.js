console.log("js is hooked up")

async function getNbaPlayers(){
    //create a variable
    // await fetch(URL goes in here)
    // mus conver to json data
    const playerStats = document.querySelector(".playerStats")
    const nbaPlayers = await fetch("https://www.balldontlie.io/api/v1/players");
    const jsonnbaPlayers = await nbaPlayers.json();
    const player1 = document.createElement("p")
    const firstbutton= document.querySelector(".FirstName")
    const secondbutton= document.querySelector(".LastName")
    const thirdbutton= document.querySelector(".AllNames")


    player1.innerText = jsonnbaPlayers;

    // for(const aboutPlayer in jsonnbaPlayers.data[0]){
    //     console.log(aboutPlayer);
    //     playerStats.append(aboutPlayer)
    // }
    function getFirstName(){
    for(const  aboutPlayer2 of jsonnbaPlayers.data){
        console.log(aboutPlayer2.first_name)
        // playerStats.append(aboutPlayer2.first_name)
        // playerStats.append(aboutPlayer2.last_name)
        const element = document.createElement("div")
        const element1 = document.createElement("div")
        const flex = document.createElement("div")
        element.className = "element"
        flex.className="flex"
        element1.className="element1"
        flex.append(element.element1)
        element.innerText=(aboutPlayer2.first_name)
        // element1.innerText=(aboutPlayer2.last_name)

        // element.innerText=(aboutPlayer2.last_name)
        playerStats.append(element)
      

    }


}
function getLastName(){
    for(const  aboutPlayer3 of jsonnbaPlayers.data){
        console.log(aboutPlayer3.last_name)
        // playerStats.append(aboutPlayer2.first_name)
        // playerStats.append(aboutPlayer2.last_name)
        // const element = document.createElement("div")
        const element1 = document.createElement("div")
        // const flex = document.createElement("div")
        // element.className = "element"
        // flex.className="flex"
        element1.className="element1"
        // flex.append(element.element1)
        // element.innerText=(aboutPlayer2.first_name)
        element1.innerText=(aboutPlayer3.last_name)

        // element.innerText=(aboutPlayer2.last_name)
        playerStats.append(element1)
      

    }

}
// secondbutton.addEventListener("click", () => getLastName());
firstbutton.addEventListener("click", () => getFirstName());
secondbutton.addEventListener("click", () => getLastName())


    // // playerStats.append(aboutPlayer2)
    // console.log(player1.first_name)

    // console.log(jsonnbaPlayers.data[0,1].first_name.last_name)
    // return jsonnbaPl
}

getNbaPlayers()

