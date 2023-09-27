
// Mảng dữ liệu
var arrData = [
    {
        question:"question 1",
        answers: {
            a: "answer 11", b: "answer 12", c: "answer 13", d: "answer 14"
        },
        correctAnswer: "a"
    },
    {
        question:"question 2",
        answers: {
            a: "answer 21", b: "answer 22", c: "answer 23", d: "answer 24"
        },
        correctAnswer: "d"
    },
    {
        question:"question 3",
        answers: {
            a: "answer 31", b: "answer 32", c: "answer 33", d: "answer 34"
        },
        correctAnswer: "a"
    },
    {
        question:"question 4",
        answers: {
            a: "answer 41", b: "answer 42", c: "answer 43", d: "answer 44"
        },
        correctAnswer: "b"
    },
    {
        question:"question 5",
        answers: {
            a: "answer 51", b: "answer 52", c: "answer 53", d: "answer 54"
        },
        correctAnswer: "a"
    },
    {
        question:"question 6",
        answers: {
            a: "answer 61", b: "answer 62", c: "answer 63", d: "answer 64"
        },
        correctAnswer: "a"
    },
    {
        question:"question 7",
        answers: {
            a: "answer 71", b: "answer 72", c: "answer 73", d: "answer 74"
        },
        correctAnswer: "c"
    },
    {
        question:"question 8",
        answers: {
            a: "answer 81", b: "answer 82", c: "answer 83", d: "answer 84"
        },
        correctAnswer: "d"
    },
    {
        question:"question 9",
        answers: {
            a: "answer 91", b: "answer 92", c: "answer 93", d: "answer 94"
        },
        correctAnswer: "a"
    },
    {
        question:"question 10",
        answers: {
            a: "answer 101", b: "answer 102", c: "answer 103", d: "answer 104"
        },
        correctAnswer: "b"
    },
    {
        question:"question 11",
        answers: {
            a: "answer 111", b: "answer 112", c: "answer 113", d: "answer 114"
        },
        correctAnswer: "b"
    },
    {
        question:"question 12",
        answers: {
            a: "answer 121", b: "answer 122", c: "answer 123", d: "answer 124"
        },
        correctAnswer: "a"
    },
    {
        question:"question 13",
        answers: {
            a: "answer 131", b: "answer 132", c: "answer 133", d: "answer 134"
        },
        correctAnswer: "c"
    },
    {
        question:"question 14",
        answers: {
            a: "answer 141", b: "answer 142", c: "answer 143", d: "answer 144"
        },
        correctAnswer: "d"
    },
    {
        question:"question 15",
        answers: {
            a: "answer 151", b: "answer 152", c: "answer 153", d: "answer 154"
        },
        correctAnswer: "b"
    },
    {
        question:"question 16",
        answers: {
            a: "answer 161", b: "answer 162", c: "answer 163", d: "answer 164"
        },
        correctAnswer: "b"
    },
    {
        question:"question 17",
        answers: {
            a: "answer 171", b: "answer 172", c: "answer 173", d: "answer 174"
        },
        correctAnswer: "c"
    },
    {
        question:"question 18",
        answers: {
            a: "answer 181", b: "answer 182", c: "answer 183", d: "answer 184"
        },
        correctAnswer: "d"
    },
    
];
var countDown
var countNext = 0;
function NextQuestion() {

    // 
    var x = countNext++

    var boxQuestion =  `
        <p class="question" id="question">Question ${x+2}: ${arrData[x].question}</p>
        <div class="list-answer1 pb-5" id="list-answer1">
            <div class="ans1 d-flex justify-content-center align-items-center" id="ans1">
                <input type="radio" name="question" id="q${0}"><label>${arrData[x].answer[0]}</label>
            </div>
            <div class="ans1 d-flex justify-content-center align-items-center" id="ans1">
                <input type="radio" name="question" id="q${1}"><label>${arrData[x].answer[1]}</label>
            </div>
            <div class="ans1 d-flex justify-content-center align-items-center" id="ans1">
                <input type="radio" name="question" id="q${2}"><label>${arrData[x].answer[2]}</label>
            </div>
            <div class="ans1 d-flex justify-content-center align-items-center" id="ans1">
                <input type="radio" name="question" id="q${3}"><label>${arrData[x].answer[3]}</label>
            </div>
        </div>
    `;

    var box = document.createElement("div")

    box.setAttribute("id","setup"+(x+1))
    box.setAttribute("class","col-sm-4 border border-2 border-dark")
    box.innerHTML = boxQuestion

    var x = document.getElementById("box-question")
    x.appendChild(box)

    var removePreQues = document.getElementById("setup"+(countNext-1))
    removePreQues.classList.add("d-none")

    // Tạo Previous Button
    var preButton =    
    `
    <div class="previous-button" onclick="PreQuestion(${countNext})">
        <span class="btn btn-none border border-1 border-dark">Previous Question</span>
    </div>
    `
    console.log(countNext)

    // Xét điều kiện xuất hiện các prebutton 
    if (countNext == 1) {
        var pre = document.createElement("div")
        pre.setAttribute("id","prebut"+countNext)
        pre.setAttribute("class","d-block")
        pre.innerHTML = preButton
    
        var y = document.getElementById("previous-button")
        y.appendChild(pre)
    } else if (countNext > 1) {
        var pre = document.createElement("div") 
        pre.setAttribute("id","prebut"+countNext)
        pre.setAttribute("class","d-block")
        pre.innerHTML = preButton
    
        var y = document.getElementById("previous-button")
        y.appendChild(pre)

        console.log("next"+countNext)
        var hidePreButton = document.getElementById("prebut"+(countNext-1))
        hidePreButton.classList.remove("d-block")
        hidePreButton.classList.add("d-none")
    }


    // Xét điều kiện nhấn
    if (countNext > 0 && countNext < 20) {
        var showPreButton = document.getElementById("previous-button")
        showPreButton.classList.remove("d-none")
    }
    console.log(countNext)
    if (countNext === 19) {
        var showNextButton = document.getElementById("next-button")
        showNextButton.classList.add("d-none")
        var showSubmit = document.getElementById("submit-button")
        showSubmit.classList.remove("d-none")
    }
   
}

// console.log(countDown)
function PreQuestion(x) {
    console.log(x)
    for (let i = 0; i < arrData.length; i++) {
        if (x === i ) {

            var removePreQues = document.getElementById("setup"+(x))
            removePreQues.classList.add("d-none")

            var showPreQues = document.getElementById("setup"+(x-1))
            showPreQues.classList.remove("d-none")

            var showPreButton = document.getElementById("prebut"+(x-1))
            showPreButton.classList.add("d-block")
            showPreButton.classList.remove("d-none")

            var hidePreButton = document.getElementById("prebut"+x)
            hidePreButton.classList.add("d-none")
            hidePreButton.classList.remove("d-block")

        }
        
    }
    
}

(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // // if answer is correct
        // if(userAnswer === currentQuestion.correctAnswer){
        //   // add to the number of correct answers
        //   numCorrect++;
  
        //   // color the answers green
        //   answerContainers[questionNumber].style.color = 'lightgreen';
        // }
        // // if answer is wrong or blank
        // else{
        //   // color the answers red
        //   answerContainers[questionNumber].style.color = 'red';
        // }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = arrData
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
  