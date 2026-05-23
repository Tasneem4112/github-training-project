const text = "Front-End Developer | UI Designer";

let i = 0;

function typing(){

  if(i < text.length){

    document.querySelector(".typing").textContent += text.charAt(i);

    i++;

    setTimeout(typing,100);
  }

}

typing();


// REVEAL EFFECT

window.addEventListener("scroll", reveal);

function reveal(){

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element)=>{

    const windowHeight = window.innerHeight;

    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.classList.add("active");

    }

  });

}