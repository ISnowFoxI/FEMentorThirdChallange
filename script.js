

const questionContainer = document.querySelector('.questionsContainer')

 questionContainer.addEventListener('click', (event) => {
     let liElement = event.target.closest("li");
     if(liElement.className=="questions") {
    liElement.className ="questions questionsOpen"
        
    }
    else {
        liElement.className ="questions"
    }
  });


