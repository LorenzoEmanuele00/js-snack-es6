const biciclette = [
    {
        nome: "mount",
        peso: 30
    },
    {
        nome: "city",
        peso: 20
    },
    {
        nome: "cross",
        peso: 25
    },
    {
        nome: "race",
        peso: 10
    }
];

const [bicicletta1] = biciclette;
pesoLeggero = bicicletta1.peso;
nomeLeggero = bicicletta1.nome;

biciclette.forEach((bici) => {
    const {peso} = bici;
    const {nome} = bici;
    if (pesoLeggero > peso) {
        pesoLeggero = peso;
        
        nomeLeggero = nome;
    }
});

document.querySelector("h2").innerHTML = `la bicicletta più leggera è: ${nomeLeggero}, con un peso di: ${pesoLeggero}`;
console.log(nomeLeggero)
