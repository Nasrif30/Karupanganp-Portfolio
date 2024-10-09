document.addEventListener("DOMContentLoaded", function () {
    // Define the skill percentages in an object
    const skillLevels = {
        "html-progress": "40%",
        "css-progress": "40%",
        "js-progress": "20%",
        "flutter-progress": "35%",
        "php-progress": "40%",
        "mysql-progress": "30%",
        "git-progress": "30%",
        "react-progress": "20%",
        "python-progress": "20%",
        "firebase-progress": "30%",
    };

    // Loop through each skill and set the progress
    for (const [skill, percent] of Object.entries(skillLevels)) {
        const skillProgress = document.getElementById(skill);
        skillProgress.style.setProperty('--skill-percent', percent);
        skillProgress.style.width = percent; // Set the width to the specified percentage
        
        // Trigger animation
        skillProgress.style.animation = "skillAnimation 1s forwards"; // Trigger skill animation
    }

    
    setTimeout(() => {
        for (const skill in skillLevels) {
            const skillProgress = document.getElementById(skill);
            skillProgress.style.width = '0'; 
            skillProgress.style.animation = "skillAnimation 1s forwards"; 
        }
    }, 9000); 
});
