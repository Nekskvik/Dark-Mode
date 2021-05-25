let header = document.querySelector('header')
let footer = document.querySelector('footer')
let outerpages = document.querySelector('.outer')


let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {

  darkMode = localStorage.getItem('darkMode'); 

  if (darkMode !== 'enabled') {
    enableDarkMode();

  } else {  
    disableDarkMode(); 
  }
});


document.getElementById('outer-pages').addEventListener('click', () => {
  outerpages.style.display = "block"
  header.classList.toggle('borderbottom')
})
