const questions = [
    {
        question: "Who has won the best actor award at 69th National Film Awards?",
        options: ["Akshay Kumar", "Allu Arjun", "Ram Charan", "None of the above"],
        answer: 1,
        media: { type: "text" },
        hint: {
            type: "image_and_text",  // Hint type with both image and text
            src: "../png/brainy.png",  // Path to the image
            text: "He's a superstar with a stellar year. Known for his action-packed roles and intense performances."
        }
    },
    {
        question: "A biopic Chamkila was made on life of Amar Singh Chamkila. In what field did late Mr. Amar Chamkila earn his fame?",
        options: ["Sports", "Dance", "Literature", "Singing"],
        answer: 3,
        media: { type: "text" },
        hint: {
            type: "image_and_text",  // Hint type with both image and text
            src: "../png/brainy2.png",  // Path to the image
            text: "He was a king of the stage with a voice that echoed in every corner of Punjab. 🎤"
        }
    },
    {
        question: "Which Bollywood actor is featured in this video?",
        options: ["Farahn Akhtar", "Ranveer Singh", "Arjun Kapoor", "Saif Ali Khan"],
        answer: 0,
        media: { type: "video", src: "../mp4/WhatsApp Video 2024-10-28 at 12.53.02.mp4" },
        hint: {
            type: "image_and_text",  // Hint type with both image and text
            src: "../png/brainy.png",  // Path to the image
            text: "Known for his energetic roles and expressive performances, he's one of the most loved actors in the industry."
        }
    },
    {
        question: "Which Bollywood movie features this train scene?",
        options: ["Dilwale", "Chennai Express", "Kabhi Khushi Kabhie Gham", "Raees"],
        answer: 1,
        media: { type: "image", src: "https://s3images.zee5.com/wp-content/uploads/sites/7/2021/04/aefe.png" },
        hint: {
            type: "image_and_text",  // Hint type with both image and text
            src: "../png/brainy.png",  // Path to the image
            text: "This movie's train journey is as iconic as the chemistry between the lead characters. 🚂💘"
        }
    },
    {
        question: "Which Bollywood film's soundtrack was the first to win a Grammy Award?",
        options: ["Dil Se", "Devdas", "Slumdog Millionaire", "Lagaan"],
        answer: 2,
        media: { type: "text" },
        hint: {
            type: "image_and_text",  // Hint type with both image and text
            src: "../png/brainy2.png",  // Path to the image
            text:  "This movie's music was so good, it crossed borders—making it internationally famous."
        }
    },
    {
        question: "From which Bollywood film is this dialogue, and which character is it associated with?",
        options: ["Sholay, delivered by Gabbar Singh", "Sholay, delivered by Thakur Baldev Singh", "Deewar, delivered by Vijay Verma", "Don, delivered by Don"],
        answer: 0,
        media: { type: "audio", src: "../mp4/Sholay.mp4" },
        hint: {
            type: "image_and_text",  // Hint type with both image and text
            src: "../png/brainy.png",  // Path to the image
            text: "A villain with a laugh that still gives us chills. Famous for being cruel yet iconic."
        }
    },
    {
        question: "Dosti ka ek usool hai madam, no sorry no thank you is a line from which film?",
        options: ["Zindagi Na Milegi Dobara", "Chupke Chupke", "Kabhi Khushi Kabhie Gham", "Dil Chahta Hai"],
        answer: 3,
        media: { type: "text" },
        hint: {
            type: "image_and_text",  // Hint type with both image and text
            src: "../png/brainy2.png",  // Path to the image
            text: "This dialogue comes from a film that redefined friendships in Bollywood with humor and heart."
        }
    },
    {
        question: "Director of 'All We Imagine as Light' won the Grand Prix at Cannes Film Festival 2024. Who is the director of the film?",
        options: ["Sanjay Leela Bhansali", "Payal Kapadia", "Mani Ratnam", "Anurag Basu"],
        answer: 1,
        media: { type: "text" },
        hint: {
            type: "image_and_text",  // Hint type with both image and text
            src: "../png/brainy.png",  // Path to the image
            text: "This director has been making waves at film festivals around the world. Known for their deep and poetic style."
        }
    },
    {
        question: "Which actor's autobiography is titled Khullam Khulla?",
        options: ["Ranbir Kapoor", "Raj Kapoor", "Rajiv Kapoor", "Rishi Kapoor"],
        answer: 3,
        media: { type: "text" },
        hint: {
            type: "image_and_text",  // Hint type with both image and text
            src: "../png/brainy2.png",  // Path to the image
            text: "This legendary actor was a charismatic heartthrob of his time and shared every detail of his colorful life."
        }
    },
    {
        question: "Which Bollywood film features this theme song, and who is the composer?",
        options: ["Kabhi Alvida Naa Kehna, composed by Jatin-Lalit", "Dil Chahta Hai, composed by Shankar-Ehsaan-Loy", "Kal Ho Na Ho, composed by Shankar-Ehsaan-Loy", "Kabhi Khushi Kabhie Gham, composed by Jatin-Lalit"],
        answer: 2,
        media: { type: "audio", src: "../mp4/Kal ho na ho.mp4" },
        hint: {
            type: "image_and_text",  // Hint type with both image and text
            src: "../png/brainy.png",  // Path to the image
            text: "This song is from a movie that became a classic for its theme of love, loss, and self-discovery. The composer is known for creating timeless melodies."
        }
    },
];
const messages = [
    "You're not just a quiz master, you're a *quiz superhero*! 🦸‍♂️ Keep going, Brainy is watching you crush it! 💥",
    "Woop woop! 🚨 You're on a roll! Keep answering like it's your second job! 💼✨",
    "You might just be the Einstein of quizzes. 🤓 Just don't invent a time machine yet! ⏳",
    "Is it just me, or do you have a superpower? Is it *quiz answering*? 🦸‍♀️ Keep it up!",
    "I'd give you a 10/10 for effort, but you're already scoring more than that! ⭐️⭐️⭐️⭐️⭐️",
    "Your brain is doing jumping jacks right now... and winning! 💪 Keep it up!",
    "Oh wow, look at you go! If quizzing was an Olympic sport, you'd be wearing gold. 🥇",
    "Brainy says: *You're a genius in the making*! Just don't let the fame go to your head. 😎",
    "Another correct answer? You're like a *quiz wizard*, casting spells of knowledge! 🔮✨",
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


    

document.getElementById('message-button').onclick = () => {
    const currentMessage = messages[currentQuestionIndex];
    alert(currentMessage); // Show the message as an alert
    
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
        document.getElementById('hint-video-container').style.display = 'none'; // Hide hint video
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
