function nextQuestion(answer) {
    const question1Buttons = document.getElementById("question1Buttons");
    const question2Buttons = document.getElementById("question2Buttons");


    if (answer === 'good' || answer === 'okay' || answer === 'bad') {
        question1Buttons.classList.add("hidden");
        question2Buttons.classList.remove("hidden");
        
        if (answer === 'good') {
            document.getElementById("header1").textContent = "Nice! Will you be my Valentine? "
        } 
        else if (answer === 'okay') {
            document.getElementById("header1").textContent = "That's fine. Will you be my Valentine?"
        }
        else {
            document.getElementById("header1").textContent = "So sad. Will you be my Valentine?"
        }
    }

    if (answer === 'available' || answer === 'notAvailable') {
        question2Buttons.classList.add("hidden");
    }
}


function respond(answer) {
    const responseDiv = document.getElementById("header1");
    if (answer === "yes") {
        responseDiv.textContent = "Yay! See you soon!";
        responseDiv.style.color = "#4caf50"; // Green for yes
        document.getElementById("question2Buttons").style.visibility = "hidden";
    } else {
        responseDiv.textContent = "No, I don't accept no.";
        responseDiv.style.color = "#f44336"; // Red for no
        document.getElementById("noBtn").style.visibility = "hidden";
    }
    // responseDiv.classList.remove("hidden");
    document.getElementById("header1").style.visibility = "visible";
}