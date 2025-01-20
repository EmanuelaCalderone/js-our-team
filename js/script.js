/* Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.*/

const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
];

//creo la variabile che conterrà la lista
const list = document.getElementById('cards-list');

//creo le card inizializzandole a una stringa vuota
let cards = "";

//con un ciclo itero per tutti gli oggetti dell'array
for (let i = 0; i < teamMembers.length; i++){
  //assegno una variabile a ogni oggetto
  let teamMember = teamMembers[i];
  
/*   let name = teamMember.name;
  let role = teamMember.role;
  let email = teamMember.email;
  let img = teamMember.img; */
 
  //destrutturo l'oggetto estrapolando i valori delle singole proprietà
  const { name, role, email, img } = teamMember;

  //aggiungo un li che contiene una card a ogni ciclo
  cards += `
    <li class=member>
    <div class="member-image">
        <img src="${img}" class="member-picture">
    </div>
    <div class="details">
      <h2 class="member-name">${name}</h2>
      <h3 class="member-role"> ${role}</h3>
      <h4 class="member-email">${email}</h4>
    </div>
    </li>`;   
} 
  
//aggiungo nell'html le class alla lista
list.innerHTML = cards;

 


