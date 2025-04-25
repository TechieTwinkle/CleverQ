const questions = [
    {
        question: "Which Indian hockey player is considered one of the greatest in the history of the sport and helped India win three Olympic gold medals?",
        options: ["Dhanraj Pillay", "Dilip Tirkey", "Balbir Singh Sr.", "Dhyan Chand"],
        answer: 3,
        media: { type: "text" }
    },
    {
        question: "Who was the first Indian badminton player to win an Olympic silver medal?",
        options: ["Saina Nehwal", "P. V. Sindhu", "Prakash Padukone", "Kidambi Srikanth"],
        answer: 1,
        media: { type: "text" }
    },
    {
        question: "India won its first Kabaddi World Cup in 2004. How many World Cups has India won as of 2024?",
        options: ["7", "2", "3", "5"],
        answer: 0,
        media: { type: "text" }
    },
    {
        question: "Who is the first Indian tennis player to win a Grand Slam title?",
        options: ["Leander Paes", "Mahesh Bhupathi", "Rohan Bopanna", "Sania Mirza"],
        answer: 1,
        media: { type: "text" }
    },
    {
        question: "Which cricketer holds the record for the highest individual score in a Test match (400*)?",
        options: ["Don Bradman", "Sachin Tendulkar", "Brian Lara", "Ricky Ponting"],
        answer: 2,
        media: { type: "text" }
    },
    {
        question: "Who became the first driver to win 7 Formula 1 World Championships, equaling Michael Schumacher's record?",
        options: ["Lewis Hamilton", "Max Verstappen", "Sebastian Vettel", "Nico Rosberg"],
        answer: 0,
        media: { type: "text" }
    },
    {
        question: "Which country won the FIFA World Cup in 2022?",
        options: ["Germany", "Brazil", "Argentina", "France"],
        answer: 2,
        media: { type: "image", src: "../jpg/db7a68c0-345c-4b23-9e37-b07cf073ab4f.jpg" }
    },
    {
        question: "Who was the first Indian track and field athlete to win a gold medal at the Olympics?",
        options: ["P.T.Usha", "Neeraj Chopra", "Milkha Singh", "Anju Bobby George"],
        answer: 1,
        media: { type: "text" }
    },
    {
        question: "Who was the first Indian woman boxer to qualify for the Olympics and win a medal?",
        options: ["Lovlina Borgohain", "Sarita Devi", "Nikhat Zareen", "Mary Kom"],
        answer: 3,
        media: { type: "text" }
    },
    {
        question: "Who was the first Indian to become a chess Grandmaster?",
        options: ["Pentala Harikrishna", "Vishwanathan Anand", "Vidit Gujrathi", "Surya Shekhar Ganguly"],
        answer: 1,
        media: { type: "text" }
    }
];

const messages = [
    "You’re not just a quiz master, you're a *quiz superhero*! 🦸‍♂️ Keep going, Brainy is watching you crush it! 💥",
    "Woop woop! 🚨 You're on a roll! Keep answering like it's your second job! 💼✨",
    "You might just be the Einstein of quizzes. 🤓 Just don’t invent a time machine yet! ⏳",
    "Is it just me, or do you have a superpower? Is it *quiz answering*? 🦸‍♀️ Keep it up!",
    "I’d give you a 10/10 for effort, but you're already scoring more than that! ⭐️⭐️⭐️⭐️⭐️",
    "Your brain is doing jumping jacks right now... and winning! 💪 Keep it up!",
    "Oh wow, look at you go! If quizzing was an Olympic sport, you’d be wearing gold. 🥇",
    "Brainy says: *You’re a genius in the making*! Just don’t let the fame go to your head. 😎",
    "Another correct answer? You’re like a *quiz wizard*, casting spells of knowledge! 🔮✨",
    "If there was a *coolness meter*, you'd be off the charts right now! 🕶️ Keep it chill, keep it smart!"
];

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeRemaining = 60;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const mediaContainer = document.getElementById('video-container');
    const hintVideoContainer = document.getElementById('hint-video-container');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');
    const finalButtonContainer = document.querySelector('.final-button-container');
    const timerElement = document.getElementById('timer');

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    mediaContainer.innerHTML = '';
    hintVideoContainer.innerHTML = '';

    // Display hint video
    if (currentQuestion.hint && currentQuestion.hint.type === "image") {
        hintVideoContainer.innerHTML = `<img src="${currentQuestion.hint.src}" alt="Hint image" width="350" />`;
    }

    if (currentQuestion.media.type === "video") {
        mediaContainer.innerHTML = `<video width="250" controls>
            <source src="${currentQuestion.media.src}" type="video/mp4">
            Your browser does not support the video tag.
        </video>`;
    } else if (currentQuestion.media.type === "image") {
        mediaContainer.innerHTML = `<img src="${currentQuestion.media.src}" alt="Question image" width="250" />`;
    } else if (currentQuestion.media.type === "audio") {
        mediaContainer.innerHTML = `<audio controls>
            <source src="${currentQuestion.media.src}" type="audio/mp4">
            Your browser does not support the audio tag.
        </audio>`;
    }

    currentQuestion.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.innerHTML = `<input type="radio" name="option" value="${index}" id="option${index}">
                              <label for="option${index}">${option}</label>`;
        optionsElement.appendChild(optionDiv);
    });

    if (currentQuestionIndex === 0) {
        nextButton.style.display = 'inline-block';
        finalButtonContainer.style.display = 'none';
    } else if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = 'none';
        finalButtonContainer.style.display = 'inline-flex';
    } else {
        nextButton.style.display = 'inline-block';
        finalButtonContainer.style.display = 'none';
    }

    resetTimer();
}

document.getElementById('hint-button').onclick = () => {
    const hintVideoContainer = document.getElementById('hint-video-container');
    
    
    if (hintVideoContainer.style.display === 'none' || hintVideoContainer.style.display === '') {
        hintVideoContainer.style.display = 'block';
    } else {
        hintVideoContainer.style.display = 'none';
    }
};
document.getElementById('message-button').onclick = () => {
    const currentMessage = messages[currentQuestionIndex];
    alert(currentMessage); 
};

function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = timeRemaining;

    if (timeRemaining === 0) {
        clearInterval(timerInterval); 
        if (currentQuestionIndex === questions.length - 1) {
            submitQuiz();  
        } else {
            nextQuestion();
        }
    } else {
        timeRemaining--; 
    }
}

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000); 
}

function resetTimer() {
    timeRemaining = 60; 
    clearInterval(timerInterval); 
    startTimer(); 
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (!selectedOption && timeRemaining > 0) {
        alert("Please select an option before moving to the next question.");
        return;  
    }

    if (selectedOption && parseInt(selectedOption.value) === questions[currentQuestionIndex].answer) {
        score++;  
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(); 
        document.getElementById('hint-video-container').style.display = 'none'; 
    } else {
        submitQuiz();  
    }
}

function submitQuiz() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === questions[currentQuestionIndex].answer) {
        score++; 
    }

    const questionElement = document.getElementById('question');
    questionElement.innerHTML = `Quiz completed! Your score is ${score} out of ${questions.length}.`;

    document.getElementById('options').innerHTML = ''; 
    document.getElementById('video-container').innerHTML = ''; 
    document.getElementById('next-button').style.display = 'none'; 
    document.getElementById('submit-button').style.display = 'none'; 
    document.querySelector('.final-button-container').style.display = 'none';
    document.querySelector('#timer-container').style.display = 'none';
}

document.getElementById('next-button').onclick = nextQuestion;
document.getElementById('submit-button').onclick = submitQuiz;

loadQuestion(); 
