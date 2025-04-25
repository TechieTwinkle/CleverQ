const questions = [
    {
        question: "What is the phobia of thunder and rain?",
        options: ["Agoraphobia", "Ombrophobia", "Acrophobia", "Claustrophobia"],
        answer: 1,
        media: { type: "text" }
    },
    {
        question: "Which Game of Thrones character is known as the Young Wolf?",
        options: ["Robb Stark", "Arya Stark", "Sansa Stark", "Jon Snow"],
        answer: 0,
        media: { type: "text" }
    },
    {
        question: "Who is the artist of this famous painting, and where is it displayed?",
        options: ["Vincent van Gogh – Rijksmuseum", "Pablo Picasso – The Louvre", "Leonardo da Vinci – The Louvre", "Claude Monet – National Gallery"],
        answer: 2,
        media: { type: "image", src: "https://galeriemontblanc.com/cdn/shop/products/Main_f0998759-2ed7-4411-92a2-48cc4cf48ede_900x.jpg?v=1653788556" }
    },
    {
        question: "Which economic reform policy was initiated in India in 1991 to address the economic crisis and liberalize the economy?",
        options: ["Green Revolution", "Economic Liberalization", "Operation Flood", "Five-Year Plans"],
        answer: 1,
        media: { type: "text" }
    },
    {
        question: "Who is credited with inventing the first practical telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
        answer: 0,
        media: { type: "text" }
    },
    {
        question: "In this UN speech clip, which global issue does Modi address with a call for international cooperation?",
        options: ["Global Security", "Health Epidemics", "Economic Development", "Climate Change"],
        answer: 3,
        media: { type: "video", src: "../mp4/PM Modi.mp4" }
    },
    {
        question: "The first model of the iPhone. Which company launched this innovative smartphone?",
        options: ["Google", "Microsoft", "Apple", "Samsung"],
        answer: 2,
        media: { type: "image", src: "https://i.pinimg.com/originals/7c/4d/c8/7c4dc8ce83c16ac64253f285a94f12e5.png" }
    },
    {
        question: "For what is Galileo famous?",
        options: ["Developed the telescope", "Discovered four satellites of Jupiter", "Found that the swinging motion of the pendulum results in consistent time measurement.", "All of the above"],
        answer: 3,
        media: { type: "text" }
    },
    {
        question: "Which country has the most UNESCO World Heritage Sites?",
        options: ["Italy", "China", "India", "Spain"],
        answer: 1,
        media: { type: "text" }
    },
    {
        question: "What was the original name of the below given social media app when it was first created?",
        options: ["Twinkle", "Birdie", "Twttr", "Chirp"],
        answer: 2,
        media: { type: "image", src: "https://th.bing.com/th/id/OIP.PSj_SQum7CH01WhmY2kFcAHaHx?rs=1&pid=ImgDetMain" }
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
