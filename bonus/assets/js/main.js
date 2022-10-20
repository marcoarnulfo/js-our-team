
const team = [
    { 
        Name: 'Wayne Barnett',
        Role: 'Founder & CEO',
        Image: "./assets/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        Name: 'Angela Caroll',
        Role: 'Chief Editor',
        Image: "./assets/img/angela-caroll-chief-editor.jpg" 
    },
    {
        Name: 'Waleter gordon',
        Role: 'Chief Editor',
        Image: "./assets/img/walter-gordon-office-manager.jpg"
    },
    {
        Name: 'Angela Lopez',
        Role: 'Social Media Manager',
        Image: "./assets/img/angela-lopez-social-media-manager.jpg"
    },
    {
        Name: 'Scott Estrada',
        Role: 'Developer',
        Image: "./assets/img/scott-estrada-developer.jpg"
    },
    {
        Name: 'Barbara Ramos',
        Role: 'Grafic designer',
        Image: "./assets/img/barbara-ramos-graphic-designer.jpg"
    }
]

console.log(team);


/*
for (let index = 0; index < team.length; index++) {
    const element = team[index];
    //console.log(element);
}
*/
const h2Element = document.querySelector("h2")
const ulElement = document.querySelector("ul")
const immagine = document.querySelector("img")

const row = document.querySelector(".row")

for (const key in team) {
    const secondEl = team[key];
    //console.log(secondEl.Name);
    //console.log(secondEl.Role);
    //console.log(secondEl.Image);
    const col = document.createElement("div")
    col.classList.add("col", "mt-5")
    const nameElement = document.createElement("h4")
    nameElement.classList.add("pt-2")
    const roleElement = document.createElement("div")
    roleElement.classList.add("fst-italic")
    const imageElement = document.createElement("img")
    row.append(col)
    col.append(imageElement, nameElement, roleElement)
    imageElement.src = secondEl.Image
    nameElement.append(secondEl.Name)
    roleElement.append(secondEl.Role)

    //const liElement = document.createElement("li") // nome
    //const secondLi = document.createElement("li") // ruolo
    //const terzoLi = document.createElement("li") // immagine
    
    
    //ulElement.append(liElement, secondLi, terzoLi)
    //liElement.append(secondEl.Name)
    //secondLi.append(secondEl.Role)
    //terzoLi.append(secondEl.Image)
    //terzoLi.append(test)

}
/*
const immagine = document.querySelector("img");
immagine.src = team[3]
*/
/*
    BONUS 1: Trasformare la stringa foto in una immagine effettiva
    BONUS 2: Organizzare i singoli membri in card/schede
*/