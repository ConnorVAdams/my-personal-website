function show() {
    let onOrOff = document.getElementById('info-content');
    if (onOrOff.style.visibility = 'hidden') {
            onOrOff.style.visibility = 'visible'
        }
}

function hide() {
    let onOrOff = document.getElementById('info-content');
    if (onOrOff.style.visibility = 'visible') {
        onOrOff.style.visibility = 'hidden'
    }
}

const Badge = document.querySelectorAll('.badge').forEach(badgeButton => {
    badgeButton.addEventListener('click', () => show());
});

const exitX = document.querySelectorAll('.exit-button').forEach(exitButton => {
    exitButton.addEventListener('click', () => hide());
});