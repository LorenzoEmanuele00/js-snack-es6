// FUNCTION
function newArray(teams) {
    newTeam = [];
    teams.forEach(team => {
        const{nome, falliSubiti} = team;
        const member = {
            nome,
            falliSubiti
        }
        newTeam.push(member);
    });
    return newTeam;
}

function rnd(teams) {
    teams.forEach(team => {
        team.puntiFatti = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
        team.falliSubiti = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
    });
}


// CODE
const squadre = [
    {
        nome: "pistoiese", 
        puntiFatti: 0, 
        falliSubiti: 0
    },
    {
        nome: "juventus", 
        puntiFatti: 0, 
        falliSubiti: 0
    },
    {
        nome: "milan", 
        puntiFatti: 0, 
        falliSubiti: 0
    },
    {
        nome: "napoli", 
        puntiFatti: 0, 
        falliSubiti: 0
    }
]


rnd(squadre);

// const squadreEFalli = newArray(squadre); funzione con forEach che crea nuovo array 
// console.log(squadreEFalli);

const newTeamMap = squadre.map((squadra) => { // funzione (arrow) con map che crea nuovo array
    const {nome, falliSubiti} = squadra;
    return {
        nome,
        falliSubiti
    };
})
console.log(newTeamMap)



