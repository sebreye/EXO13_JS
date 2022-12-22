let tab = ["sebastian", "brandon", "mohamed", "denis", "charlotte", "yassine", "quentin", "idrisse","victor", "vitor", "laurent", "enide", "fadia", "adil", "shahin"]

for ( let i = 0; i<tab.length; i++){
    console.log(`bonjour ${tab[i]}`);
}

let nb = prompt("entrez un nombre :")

for (let i = 0; i <= nb; i++) {

    console.log(i);
}
let tab2 = ["sebastian", "brandon", "mohamed", "denis", "charlotte", "yassine", "quentin", "idrisse","victor", "vitor", "laurent", "enide", "fadia", "adil", "shahin"]
tab2.forEach(element => console.log('bonjour'+ ' '+ element));

let tab3 = ["jeux", "pc", "fruits", "élément", "carte"]
tab3.forEach(element => console.log(element))