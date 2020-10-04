const init = () => {

  const mainPage = document.querySelector("#main-page")
  const projectsPage = document.querySelector("#projects-page")
  const pages = [mainPage, projectsPage]
  const projectDisplay = document.querySelector("#project-display")
  const linkToProjects = document.querySelector("#projects-link")
  const navBarIcon = document.querySelector("#bars-icon")
  const navBox = document.querySelector("#nav-box")
  var settingNavBoxOpen
  var settingProjectDetailOpen

  const projects = {
    1: {
      title: "Chess Web App",
      image: "chessapp.png",
      description: "A Chess App",
      tech: "Django, React, Docker, AWS",
      github: "https://github.com/kentblock/chess",
      link: "livesitelink"
    },
    2: {
      title: "Stock Market Web App",
      image: "fakeimage.png",
      description: "A Stonk App",
      tech: "Django, Vue, Docker, AWS",
      github: "githublink",
      link: "livesitelink"
    },
    3: {
      title: "MHSGV Mobile Resource App",
      image: "fakeimage.png",
      description: "A Mobile App",
      tech: "iOS, Swift",
      github: null,
      link: null
    }
  }
  
  document.body.addEventListener('click', () => {
    if (navBox.style.visibility == "visible" && !settingNavBoxOpen) {
      navBox.style.visibility = "hidden"
    }
    if (projectDisplay.style.visibility == "visible" && !settingProjectDetailOpen) {
      projectDisplay.style.visibility = "hidden"
    }
    settingProjectDetailOpen = false
    settingNavBoxOpen = false
  })

  navBarIcon.addEventListener('click', () => {
    settingNavBoxOpen = true
    console.log("clicked on bars")
    navBox.style.visibility = "visible"
  })

  linkToProjects.addEventListener('click', () => {
    showPage(projectsPage, pages)
    history.pushState({}, "", window.location.pathname)
  })

  window.addEventListener('popstate', (e) => {
    if (e.target.location.pathname == window.location.pathname) {
      showPage(mainPage, pages)
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
  const projectLinks = document.querySelector("#project-link")
  const setProjectDisplay = id => {
    const project = projects[id]
    projectDescription.innerText = project.description
    projectImage.src = project.image
    projectTitle.innerText = project.title
    if (project.github) {
      
    }
  }
  showPage(mainPage)
}

window.onload = init

