
const team = [
    { 
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: "./assets/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: "./assets/img/angela-caroll-chief-editor.jpg" 
    },
    {
        name: 'Waleter gordon',
        role: 'Chief Editor',
        image: "./assets/img/walter-gordon-office-manager.jpg"
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: "./assets/img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: "./assets/img/scott-estrada-developer.jpg"
    },
    {
        name: 'Barbara Ramos',
        role: 'Grafic designer',
        image: "./assets/img/barbara-ramos-graphic-designer.jpg"
    }
]

console.log(team);

const immagine = document.querySelector("img")
const row = document.querySelector(".row")

for (const key in team) {
    const secondEl = team[key];
    const col = document.createElement("div")
    col.classList.add("col", "mt-5",)
    const nameElement = document.createElement("h4")
    nameElement.classList.add("pt-2")
    const roleElement = document.createElement("div")
    roleElement.classList.add("fst-italic",)
    const imageElement = document.createElement("img")
    row.append(col)
    col.append(imageElement, nameElement, roleElement)
    imageElement.src = secondEl.image
    nameElement.append(secondEl.name)
    roleElement.append(secondEl.role)
}
