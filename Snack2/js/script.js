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

squadre.forEach(squadra => {
    squadra.puntiFatti = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
    squadra.falliSubiti = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
});

const squadreEFalli = newArray(squadre);
console.log(squadreEFalli)

