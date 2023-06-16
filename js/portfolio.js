const getProjectDetails = (project) => {
  const projectDetails = {
    Tonic: {
      name: 'Online Course',
      details: ['Courses', 'Fullstack dev', '2022'],
      description:
        `The Capstone project for the 1st module on Microverse.
         This project built with HTML, Bootstrap, CSS, and JavaScript.`,
      image:
        '<img src="./src-image/training-3207841_640.jpg" alt="Tonic project screenshot" class="popup-project-image" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'CSS'],
      live_server: 'https://karam084.github.io/online-courses-capstone/',
      source: 'https://github.com/karam084/online-courses-capstone',
    },

    360: {
      name: 'Awesome Books',
      details: ['Books', 'Fullstack dev', '2022'],
      description:
        `This is web app that allows users to enter information about their favorite books. 
        Data displayed on the UI depends on the local storage. The data entered by the user are stored in local storage and can be removed from localStorage. 
        This is a crud application and it is build with JavaScript, HTML and CSS.`,
      image:
        '<img src="./src-image/2301.i121.021.S.m005.c13.isometric library infographics.jpg" alt="Tonic project screenshot" class="popup-project-image" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'CSS'],
      live_server: 'https://karam084.github.io/awesome-books-es6/',
      source: 'https://github.com/karam084/awesome-books-es6',
    },

    Uber: {
      name: 'ToDoList',
      details: ['ToDoList', 'Frontend Developer', '2022'],
      description:
        `To Do List is a single page web app that lets users manage a simple list of tasks.
         Users can add and remove tasks from the list. It was coded using standard technologies like HTML5,
          CSS3 and JavaScript; and has an object-oriented approach using a model view presenter pattern.`,

      image:
        '<img src="./src-image/notes-7353278_640.png" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'CSS'],
      live_server: 'https://karam084.github.io/ToDoList/src',
      source: 'https://github.com/karam084/ToDoList',
    },

    Stories: {
      name: 'Budget App',
      details: ['Budget', 'Backend', '2023'],
      description:
        `A budget app built with Ruby on Rails and PostgreSQL.
         After signing in the user is able to add categories and see how much has been spent in each added category. 
         Can add transactions after selecting the category that they fell under and assign more categories.`,
      image:
        '<img src="./src-image/mortgage-3580537_640.jpg" class="popup-project-image" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'Rails'],
      live_server: 'https://budget-app-ohsx.onrender.com/',
      source: 'https://github.com/karam084/budget-app',
    },
  };

  return projectDetails[project];
};

const closeMenu = document.querySelectorAll('.mobile-menu-toggle');

closeMenu.forEach((element) => {
  element.addEventListener('click', () => {
    const overlay = document.querySelector('.menu-overlay');
    overlay.classList.toggle('hide-menu');

    const hamburgerMenu = document.querySelector('.mobile-menu');
    hamburgerMenu.classList.toggle('hide-hamburger');
  });
});

const popup = document.getElementById('popup');

const seeProjectButton = document.querySelectorAll('.see-project-button');
seeProjectButton.forEach((element) => {
  element.addEventListener('click', () => {
    popup.style.display = 'block';

    const projectDetails = getProjectDetails(element.id);
    document.getElementById('popup-project-title').innerHTML = projectDetails.name;
    let details = '';

    Object.keys(projectDetails.details).forEach((key) => {
      details += `<span class="client-name">${projectDetails.details[key]}</span> `;
      details += ' <i class="fas fa-circle divider"></i> ';
    });

    document.getElementById('popup-project-info').innerHTML = details;
    document.getElementById('popup-project-image-holder').innerHTML = projectDetails.image;
    document.getElementById('popup-project-description').innerHTML = projectDetails.description;

    let popupProjectStack = '';
    Object.keys(projectDetails.technologies).forEach((key) => {
      popupProjectStack += `<span class="label">${projectDetails.technologies[key]}</span>`;
    });

    document.getElementById('popup-project-stack').innerHTML = popupProjectStack;
    document.getElementById('see-live-btn').addEventListener('click', () => {
      window.location.href = projectDetails.live_server;
    });

    document.getElementById('see-source-btn').addEventListener('click', () => {
      window.location.href = (projectDetails.source.open());
    });
  });
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  popup.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};
