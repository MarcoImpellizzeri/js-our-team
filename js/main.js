"use strict"

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// NOME:                 RUOLO:                  FOTO:
// - Wayne Barnett	     - Founder & CEO	     - wayne-barnett-founder-ceo.jpg
// - Angela Caroll	     - Chief Editor	         - angela-caroll-chief-editor.jpg
// - Walter Gordon	     - Office Manager	     - walter-gordon-office-manager.jpg
// - Angela Lopez	     - Social Media Manager	 - angela-lopez-social-media-manager.jpg
// - Scott Estrada	     - Developer	         - scott-estrada-developer.jpg
// - Barbara Ramos	     - Graphic Designer	     - barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        profile_pick: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        profile_pick: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        profile_pick: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        profile_pick: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        profile_pick: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        profile_pick: "img/barbara-ramos-graphic-designer.jpg"
    }
];

console.log(teamMembers);

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe 

const teamMembersList = document.querySelector(".team-cards-container");

for (let i = 0; i < teamMembers.length; i++) {
    const singleTeamMember = teamMembers[i];

    teamMembersList.innerHTML +=
    `<div class="col col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="card my-card-bg" style="width: 18rem;">
            <img class="card-img-top" src="${singleTeamMember.profile_pick}" alt="Immagine del profilo">           
            <div class="card-body text-center text-light">
                <h5 class="card-title">${singleTeamMember.name}</h5>
                <p class="card-text">${singleTeamMember.role}</p>
            </div>
        </div>    
    </div>`;
    console.log("name:", singleTeamMember.name, "role:", singleTeamMember.role, "profile pickture:", singleTeamMember.profile_pick);
};


