const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
  };

const goToProjects = () => {
    document.getElementById("project-section").scrollIntoView({
        behavior: "smooth",
    });
  };


let nums = 0;
const darkMode = () => {
  document.getElementsByTagName('body')[0].classList.toggle('night');
  document.getElementsByClassName('header')[0].classList.toggle('night');
  document.getElementsByClassName('resume-button')[0].classList.toggle('night');
  document.getElementsByClassName('contact-button')[0].classList.toggle('night');
  document.getElementsByClassName('connect')[0].classList.toggle('night');
  document.getElementsByClassName('projects-grid')[0].classList.toggle('night');
  if (nums %2 === 0){
    document.querySelector('.moon-image').src="other/sun.png";}
  else{
    document.querySelector('.moon-image').src="other/moon.png";}
  nums++;
  }


    

