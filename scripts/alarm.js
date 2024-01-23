function startTimer() {
    const secondsInput = document.getElementById("seconds");
    const timerDisplay = document.getElementById("timer");
    const alarmAudio = document.getElementById("alarmAudio");

    const seconds = parseInt(secondsInput.value);

    if (isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    timerDisplay.textContent = `Timer set for ${seconds} seconds.`;

    setTimeout(() => {
        timerDisplay.textContent = "Time's up!";
        alarmAudio.play();
    }, seconds * 1000);
}