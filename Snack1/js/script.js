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

biciclette.forEach((bici) => {
    const {peso} = bici;

    if (pesoLeggero > peso) {
        pesoLeggero = peso;
        const {nome} = bici;
        nomeLeggero = nome;
    }
});

console.log(nomeLeggero)
