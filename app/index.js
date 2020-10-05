const PROJECTS = '/projects'
const HOME = '/'

const init = () => {
  
  const mainPage = document.querySelector("#main-page")
  const projectsPage = document.querySelector("#projects-page")
  const pages = [mainPage, projectsPage]
  const projectDisplay = document.querySelector("#project-display")
  const projectsButton = document.querySelector("#projects-btn")
  const homeButton = document.querySelector("#home-btn")
  var settingProjectDetailOpen

  const projects = {
    1: {
      title: "Chess Web App",
      image: "chessapp.png",
      description: `This project is a web application where you can play chess against other users\
        and track your performance. I wrote the logic, and the backend for the game in python, with the help\
        of the Django web framework. I built out the front of the app with React and used Redux for state management.\
        The code for this app, and a link to a live version can\
        be found below.`,
      tech: "Django, React, Docker, AWS",
      github: "https://github.com/kentblock/chess",
      link: "http://chess-app.xyz"
    },
    2: {
      title: "Stock Market Web App",
      image: "fakeimage.png",
      description: `This project is a web application which simulates buying and selling stocks, charts historical stock\
        price data, and displays some fundamental company data. I built a RESTful API using Django, and the Django Rest Framework,\
        as my backend for this app. I built out the frontend using Vue.js. You can find\
        links to a live version and the code for this project below.`,
      tech: "Django, Vue, Docker, AWS",
      github: "https://github.com/kentblock/stock-app",
      link: "http://stock-app.xyz"
    },
    3: {
      title: "MHSGV Mobile App",
      image: "fakeimage.png",
      description: `I am working under the guidance of a Senior Mobile Developer to help build a\
        mobile app for the Mental Health Society of Greater Victoria. The app's main purpose is to\
        provide users with a comprehensive list of mental health resources in the Victoria area. It\
        also provides filters to help narrow down the resources best suited to a particular user. This app is still\
        in development but the first version will be on the app store very shortly.`,
      tech: "iOS, Swift",
      github: null,
      link: null
    }
  }
  
  document.body.addEventListener('click', () => {
    if (projectDisplay.style.visibility == "visible" && !settingProjectDetailOpen) {
      projectDisplay.style.visibility = "hidden"
    }
    settingProjectDetailOpen = false
  })

  homeButton.addEventListener('click', () => {
    goToPage(mainPage, HOME)
  })

  projectsButton.addEventListener('click', () => {
    goToPage(projectsPage, PROJECTS)
  })

  window.addEventListener('popstate', (e) => {
    if (e.target.location.pathname == window.location.pathname) {
      showPage(mainPage)
    }
  })

  const createCard = key => {
    const project = projects[key]
    const cardsContainer = document.querySelector("#cards-container")
    const cardImg = document.createElement("img")
    const card = document.createElement("div")
    const cardTitle = document.createElement("h3")
    const cardText = document.createElement("p")
  
    card.className = "card"
    cardTitle.className = "card-title"
    cardText.className = "card-text"
    cardImg.className = "card-img"
    cardImg.src = project.image
    cardImg.className = "card-img"
    cardTitle.innerText = project.title
    cardText.innerText = project.description
  
    card.appendChild(cardTitle)
    cardsContainer.appendChild(card)
    card.appendChild(cardText)
    card.appendChild(cardImg)
    card.addEventListener('click', () => {
      setProjectDisplay(key)
      projectDisplay.style.visibility = "visible"
      settingProjectDetailOpen = true
    })
  }
  
  Object.keys(projects).forEach(projKey => {
    createCard(projKey)
  })
  
  const hideAllPage = () => {
    pages.forEach(page => {
      page.style.visibility = "hidden"
    })
  }
  
  const showPage = page => {
    hideAllPage()
    page.style.visibility = "visible"
  }
  
  const projectDescription = document.querySelector("#description")
  const projectImage = document.querySelector("#project-detail-img")
  const projectTitle = document.querySelector("#project-display-title")
  const projectTech = document.querySelector("#project-tech")
  const ghLink = document.querySelector("#project-gh-link")
  const siteLink = document.querySelector("#project-site-link")

  const setProjectDisplay = id => {
    const project = projects[id]
    projectDescription.innerText = project.description
    projectImage.src = project.image
    projectTitle.innerText = project.title
    projectTech.innerText = project.tech
    ghLink.style.color = "white"
    siteLink.style.color = "white"
    if (project.github) {
      ghLink.href = project.github
      ghLink.style.color = "black"
    }
    if (project.link) {
      siteLink.href = project.link
      siteLink.style.color = "black"
    }
  }
  console.log(window.location.pathname)
  if (window.location.pathname == PROJECTS) {
    showPage(projectsPage)
  } else {
    showPage(mainPage)
  }
  
  const goToPage = (page, path) => {
    showPage(page)
    window.history.pushState({}, "", `${path}`)
  }

  window.onpopstate = (event) => {
    window.history.replaceState({}, "", "/")
  }

}

window.onload = init

