window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)

}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 831) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndReachOrPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
  sectionTopReachOrPassedTargetLine && !sectionEndReachOrPassedTargetLine
  
  const sectionId = section.getAttribute('id')
  const menuItem = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuItem.classList.remove('active')
  if (sectionBoundaries) {
    menuItem.classList.add('active')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800
}).reveal(
  `#home, 
  #home img, 
  #home .stats, 
  #services, 
  #services header, 
  #services .card,
  #about,
  #about header,
  #about .content`
)
