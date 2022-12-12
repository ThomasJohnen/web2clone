import 'bootstrap/dist/css/bootstrap.min.css';
import '../../stylesheets/main.css';
// import {setAuthenticatedUser} from '../../utils/auths'
// import Navigate from '../Router/Navigate'
import userPicture from '../../img/profile.png';


const homePage = renderHomePage();

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = homePage;
};

function renderHomePage(){
  const main = document.querySelector('main');

  // Création de la partie qui contiendra les 3 sections

  const mainWrapper = document.createElement('div'); 
  mainWrapper.className ='d-flex justify-content-between';
  main.appendChild(mainWrapper);
    
  getJSONTasksAndDisplay();
  getJSONEnnemiesAndDisplay();
  renderTaskForm();

  // Création de la partie qui contiendra le header
  const header = document.createElement('header');
  mainWrapper.appendChild(header) // Ajout du header dans le mainWrapper
  const partieGauche = document.createElement('div');
  const partieDroite = document.createElement('div');
  header.appendChild(partieGauche);
  header.appendChild(partieDroite);


  // ajout des bouttons modals dans la partie de gauche du header
  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'btn btn-primary';
  buttonRegister.setAttribute('data-bs-toggle', 'modal');
  buttonRegister.setAttribute('data-bs-target', '#staticBackdrop');
  buttonRegister.innerHTML = 'Login modal';
  partieGauche.appendChild(buttonRegister);
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'btn btn-primary';
  buttonLogin.setAttribute('data-bs-toggle', 'modal');
  buttonLogin.setAttribute('data-bs-target', '#staticBackdrop2');
  buttonLogin.innerHTML = 'Register modal';
  partieGauche.appendChild(buttonLogin);

  // ajout du titre dans la partie de droite du header
  const buttonEnnemy = document.createElement('button');
  buttonEnnemy.className = 'btn btn-primary';
  buttonEnnemy.type = 'button';
  buttonEnnemy.setAttribute('data-bs-toggle', 'offcanvas');
  buttonEnnemy.setAttribute('data-bs-target', '#offcanvasRight');
  buttonEnnemy.setAttribute('aria-controls', 'offcanvasRight');
  buttonEnnemy.innerHTML = 'Ennemis'
  partieDroite.appendChild(buttonEnnemy);


  // ---------------------------------------------------------------------------

  // Création de la Colonne de gauche 

  const mainLeftRow = document.createElement('div');
  mainLeftRow.className ='col-2 colonneLeft';
  const firstInnerLeftRow = document.createElement('div'); // Création de la première partie de la colonne de gauche
  firstInnerLeftRow.className ='shadow mb-5 bg-body rounded';
  firstInnerLeftRow.id ='innerColLeft'
  mainLeftRow.appendChild(firstInnerLeftRow); // Rattachement de la première section dans la colonne
  
  const secondInnerLeftRow = document.createElement('div'); // Création de la seconde partie de la colonne de gauche
  secondInnerLeftRow.className ='shadow mb-5 bg-body rounded';
  secondInnerLeftRow.id = 'innerColLeft2';
  mainLeftRow.appendChild(secondInnerLeftRow); // Rattachement de la seconde section dans la colonne de gauche

  mainWrapper.appendChild(mainLeftRow); // Rattachement de la colonne de gauche dans le mainWrapper

 // ---------------------------------------------------------------------------

 

 

  // ---------------------------------------------------------------------------


  // Création du formulaire de création de tâche dans la seconde partie de la colonne de gauche

  const divTitreFormulaire = document.createElement('div'); // div du titre et de la création du titre de la tâche
  secondInnerLeftRow.appendChild(divTitreFormulaire);
  const titleForm = document.createElement('h3'); // Insertion du titre
  titleForm.innerText = 'Créer une tâche :';
  divTitreFormulaire.appendChild(titleForm);
  const inputTitleTask = document.createElement('input'); // Création du champs pour créer le titre de la tâche
  inputTitleTask.className = "form-control form-control-sm";
  inputTitleTask.type = "radio";
  inputTitleTask.name = "flexRadioDefault";
  inputTitleTask.id = "flexRadioDefault1";
  divTitreFormulaire.appendChild(inputTitleTask);

  const divBouttonRadio1= document.createElement('div'); // Création de la div du premier boutton radio
  divBouttonRadio1.className = 'form-check';
  secondInnerLeftRow.appendChild(divBouttonRadio1);

  const inputRadioCheck1 = document.createElement('input'); // Création du input du bouton radio 1 ! 
  inputRadioCheck1.className = 'form-check-input';
  inputRadioCheck1.type = 'radio';
  inputRadioCheck1.name = 'flexRadioDefault';
  inputRadioCheck1.id = 'flexRadioDefault1';
  /* inputRadioCheck.checked;  Il faut trouver comment passer le input en check ! */
  // divBouttonRadio1.appendChild(inputRadioCheck1);
  
  const labelRadioCheck1 = document.createElement('label'); // Création du label du bouton radio 1 !
  labelRadioCheck1.className = 'form-check-label';
  /* labelRadioCheck1.for || Comment fait on le for ? */
  labelRadioCheck1.innerText = 'Default radio';
  // divBouttonRadio1.appendChild(labelRadioCheck1);

  const divBouttonRadio2= document.createElement('div'); // Création de la div du second boutton radio
  divBouttonRadio2.className = 'form-check';
  secondInnerLeftRow.appendChild(divBouttonRadio2);

  const inputRadioCheck2 = document.createElement('input'); // Création du input du bouton radio 2 ! 
  inputRadioCheck2.className = 'form-check-input';
  inputRadioCheck2.type = 'radio';
  inputRadioCheck2.name = 'flexRadioDefault';
  inputRadioCheck2.id = 'flexRadioDefault2';
  /* inputRadioCheck.checked; Il faut trouver comment passer le input en check ! */
  divBouttonRadio2.appendChild(inputRadioCheck2);

  const labelRadioCheck2 = document.createElement('label'); // Création du label du bouton radio 2 !
  labelRadioCheck1.className = 'form-check-label';
  /* labelRadioCheck1.for || Comment fait on le for ? */
  labelRadioCheck2.innerText = 'Default radio';
  divBouttonRadio2.appendChild(labelRadioCheck2);





  // ---------------------------------------------------------------------------

  // Création de la colonne centrale

  const mainCentralRow = document.createElement('div');
  mainCentralRow.className = 'col-7 colonne';
  mainWrapper.appendChild(mainCentralRow);

  // Création de la div qui contiendra le titre de la tâche que l'on édite

  const firstInnerCentralRow = document.createElement('div');
  firstInnerCentralRow.className = 'shadow p-3 mb-5 bg-body rounded';
  mainCentralRow.appendChild(firstInnerCentralRow);

  // Ajout du titre dans cette première divc

  const firstCentralTitleTask = document.createElement('h2');
  firstCentralTitleTask.innerText = 'Tâche n°1'; // Provisoire mais on doit récupérer la tâche qu'on veut éditer !
  firstInnerCentralRow.appendChild(firstCentralTitleTask);
  
  // Création de la seconde div

  const secondInnerCentralRow = document.createElement('div');
  secondInnerCentralRow.innerText = 'shadow p-3 mb-5 bg-body rounded';
  mainCentralRow.appendChild(secondInnerCentralRow);

  // Ajout d'un titre dans la seconde div

  const secondCentralTitleTask = document.createElement('h2');
  secondCentralTitleTask.innerText = 'Contenu';
  mainCentralRow.appendChild(secondCentralTitleTask);


  // ---------------------------------------------------------------------------

  // Création de l'offCanvas
  const offCanvas = document.createElement('div');
  offCanvas.className = 'offcanvas offcanvas-end';
  offCanvas.tabIndex = '-1';
  offCanvas.id = 'offcanvasRight';
  offCanvas.ariaLabelledby = 'offcanvasRightLabel';
  mainWrapper.appendChild(offCanvas);

  // Création interne de l'offCanvas
  const offCanvasHeader = document.createElement('div');
  offCanvasHeader.className = 'offcanvas-header';
  offCanvas.appendChild(offCanvasHeader);
  const offCanvasTitle = document.createElement('h5');
  offCanvasTitle.id = 'offcanvasRightLabel';
  offCanvasTitle.innerText = 'partie jeu !';
  offCanvasHeader.appendChild(offCanvasTitle);
  const offCanvasButton = document.createElement('button');
  offCanvasButton.className = 'btn-close text-reset';
  offCanvasButton.type = 'button';
  offCanvasButton.dataBsDismiss = 'offcanvas';
  offCanvasButton.ariaLabel = 'Close';
  offCanvasHeader.appendChild(offCanvasButton);
  const offCanvasBody = document.createElement('div');
  offCanvasBody.className = 'offcanvas-body';
  offCanvas.appendChild(offCanvasBody);

 
  // Création de la première section 

 const firstInnerRightRow = document.createElement('div');
 firstInnerRightRow.className = 'shadow mb-5 bg-body rounded';
 firstInnerRightRow.id = 'innerColRight';

 // Il faut encore ajouter les ennemis !
 offCanvasBody.appendChild(firstInnerRightRow);

 // Création de la seconde section

 const secondInnerRightRow = document.createElement('div');
 secondInnerRightRow.className = 'd-flex justify-content-between shadow mb-5 bg-body rounded';
 secondInnerRightRow.id = 'innerColRight2';
 offCanvasBody.appendChild(secondInnerRightRow);

 // Rajout de la div pour l'image
 const divUser = document.createElement('div');
 divUser.id = 'userPicture';
 // Rajout de l'image
 const image = new Image();
 image.src = userPicture;
 divUser.appendChild(image);
 secondInnerRightRow.appendChild(divUser);

 // Rajout de la div pour les progressbar
 const divProgressBares = document.createElement('div');
 divProgressBares.id = 'progressesBar';
  secondInnerRightRow.appendChild(divProgressBares);

  // Ajout de la première barre de progression

  const divFirstProgressBar = document.createElement('div');
  divFirstProgressBar.className = 'progress';
  const firstProgressBar = document.createElement('div');
  firstProgressBar.className ='progress-bar bg-success progress-bar-striped progress-bar-animated'; // Comment faire le reste des éléments ?
  firstProgressBar.innerText = '25%';
  divProgressBares.appendChild(divFirstProgressBar);
  divFirstProgressBar.appendChild(firstProgressBar);

  // Ajout de la première barre de progression

  const divSecondProgressBar = document.createElement('div');
  divSecondProgressBar.className = 'progress';
  const secondProgressBar = document.createElement('div');
  secondProgressBar.className ='progress-bar bg-success progress-bar-striped progress-bar-animated'; // Comment faire le reste des éléments ?
  secondProgressBar.innerText = '75%';
  divProgressBares.appendChild(divSecondProgressBar);
  divSecondProgressBar.appendChild(secondProgressBar);





  /*--------------------------------------------------------------------------*/
  async function getJSONTasksAndDisplay() {
    
    const response = await fetch('/api/taches');
    const data = await response.json();
  
    
    // Create a table element
    const table = document.querySelector('table');
  
    // eslint-disable-next-line no-restricted-syntax
    for(const key of Object.keys(data)) {
      const button = document.getElementById("valideTaskButtonID");
      const row = document.createElement('tr');
      const valueCel = document.createElement('td');
      const valueCelDelete = document.createElement('button');
      valueCel.datavalue = data[key];
      valueCel.textContent = JSON.stringify(data[key].title);
      valueCelDelete.textContent = "Delete Task";
      valueCelDelete.id = "td2";
      valueCelDelete.datavalue = data[key].id;
      button.datavalue = data[key].id;
      let buttonId = null;
      
      // delete the task 
      // eslint-disable-next-line func-names
      valueCelDelete.addEventListener("click", function() { 
        deleteTask(this.datavalue);
      });
  
      // Display the task title, content
      // eslint-disable-next-line func-names
      valueCel.addEventListener("click", function() { 
        document.getElementById("displayTache").innerHTML = this.datavalue.title;
        document.getElementById("displayContenu").innerHTML = this.datavalue.content;
        document.getElementById("valideTaskButtonID").innerHTML = "Valider la tache !" ;
        buttonId = this.datavalue.id;
      });
  
      
      // eslint-disable-next-line func-names
      button.addEventListener("click", () => { 
        valideTask(buttonId);
        deleteTask(buttonId);
      });
      
      row.appendChild(valueCel);
      row.appendChild(valueCelDelete);
      table.appendChild(row);
    }
  }
    
    function renderTaskForm() {
      const divForm = document.getElementById('innerColLeft2');
      const form = document.createElement('form');
      form.className = 'p-5';
      const title = document.createElement('input');
      title.type = 'text';
      title.id = 'title';
      title.placeholder = 'title of your task';
      title.required = true;
      title.className = 'form-control mb-3';
      const content = document.createElement('input');
      content.type = 'text';
      content.id = 'content';
      content.required = true;
      content.placeholder = 'Content of your task';
      content.className = 'form-control mb-3';
      const submit = document.createElement('input');
      submit.value = 'ajouter tache';
      submit.type = 'submit';
      submit.className = 'btn btn-danger';
      const difficulte1 = document.createElement('select');
      difficulte1.id = 'select';
      const option1 = document.createElement('option');
      option1.value = '1';
      option1.text = 'difficulte 1';
      const option2 = document.createElement('option');
      option2.value = '2';
      option2.text = 'difficulte 2';
      const option3 = document.createElement('option');
      option3.value = '3';
      option3.text = 'difficulte 3';
      difficulte1.appendChild(option1);
      difficulte1.appendChild(option2);
      difficulte1.appendChild(option3);
      difficulte1.className = 'form-control mb-3';
      form.appendChild(title);
      form.appendChild(content);
      form.appendChild(difficulte1);
      form.appendChild(submit);
      divForm.appendChild(form);
      form.addEventListener('submit', addTask);
      
    }
  
    // Add task 
    async function addTask(e) {
      e.preventDefault();
    
      const title = document.querySelector('#title').value;
      const content = document.querySelector('#content').value;
      const difficulte = document.querySelector('#select').value;
    
      const jsonOptions = {
        method: 'POST',
        body: JSON.stringify({
          title,
          content,
          difficulte
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
      const response = await fetch('/api/taches', jsonOptions);
    
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    
      const newTask = await response.json();
      
      window.location.reload()
      // eslint-disable-next-line no-console
      console.log('task add : ',newTask);
    
    }
  
     // Delete task 
    function deleteTask(e) {
      fetch(`/api/taches/${e}`, {
        method: 'DELETE'
      })
      .then(response => response.json());
      window.location.reload();
    }
  
    // Valide task 
    function valideTask(e) {
      fetch(`/api/taches/valide/${e}`, {
        method: 'POST'
      })
      .then(response => response.json());
    }
  
  // ------------------------------------ENNEMIS TABLE ---------------------------------------
  
  
   async function getJSONEnnemiesAndDisplay() {
      
    const response = await fetch('/api/auths/readAllEnemies/');
    const data = await response.json();
  
    
    // Create a table element
    const table = document.getElementById('table-ennemis');
  
    // eslint-disable-next-line no-restricted-syntax
    for(const key of Object.keys(data)) {
  
      const row = document.createElement('tr');
      const valueCel = document.createElement('td');
      
      valueCel.datavalue = data[key];
      valueCel.textContent = JSON.stringify(data[key].name);
      row.appendChild(valueCel);
      table.appendChild(row);
    }
  }
  
  
  /*
  async function onLogin(e) {
    e.preventDefault();
  
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  };
  */
  
  
  
  async function login(e) {
    e.preventDefault();
  
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    const jsonOptions = {
      method: 'GET',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await fetch('/api/auths', jsonOptions);
  
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  
    const loggedUser = await response.json();
    
    // eslint-disable-next-line no-console
    console.log('task add : ',loggedUser);
  }
  
  
  async function register(e) {
    e.preventDefault();
  
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    const jsonOptions = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await fetch('/api/auths', jsonOptions);
  
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  
    const authenticatedUser = await response.json();
    
    // eslint-disable-next-line no-console
    console.log('User add : ', authenticatedUser);
  }



  login();
  register();
  // FIN  
};



export default HomePage;
