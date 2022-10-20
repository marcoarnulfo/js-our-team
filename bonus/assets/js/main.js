console.log("hello");
/*
Utilizzando i dati forniti, creare un array di 
oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti 
informazioni: nome, ruolo e foto.
*/

/* MILESTONE 0

- Creare un array di oggetti con le informaizoni fornite.

*/

const team = [
    { 
        Name: 'Wayne Barnett',
        Role: 'Founder & CEO',
        Image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        Name: 'Angela Caroll',
        Role: 'Chief Editor',
        Image: 'angela-caroll-chief-editor.jpg'
    },
    {
        Name: 'Waleter gordon',
        Role: 'Chief Editor',
        Image: 'angela-caroll-chief-editor.jpg'
    },
    {
        Name: 'Angela Lopez',
        Role: 'Social Media Manager',
        Image: 'angela-lopez-chief-editor.jpg'
    },
    {
        Name: 'Scott Estrada',
        Role: 'Developer',
        Image: 'scott-estrada-chief-editor.jpg'
    },
    {
        Name: 'Barbara Ramos',
        Role: 'Grafic designer',
        Image: 'barbara-ramos-chief-editor.jpg'
    }
]


console.log(team);
/* MILESTONE 1

- Stampare su console le informazioni di nome, ruolo e la stringa della foto

*/

/*
for (let index = 0; index < team.length; index++) {
    const element = team[index];
    //console.log(element);
}
*/
const h2Element = document.querySelector("h2")
const ulElement = document.querySelector("ul")

for (const key in team) {
    const secondEl = team[key];
    //console.log(secondEl.Name);
    //console.log(secondEl.Role);
    //console.log(secondEl.Image);
    const liElement = document.createElement("li")
    const secondLi = document.createElement("li")
    const terzoLi = document.createElement("li")
    console.log(liElement);
    ulElement.append(liElement)
    liElement.append(secondEl.Name)
    ulElement.append(secondLi)
    secondLi.append(secondEl.Role)
    ulElement.append(terzoLi)
    terzoLi.append(secondEl.Image)
}
/* MILESTONE 1

- Stampare le stesse informazioni su DOM sottoforma di stringhe

*/