function calculateLearnerCategory(score) {
    if (score < 50) {
        return "Slow Learner";
    } else if (score < 80) {
        return "Average Learner";
    } else {
        return "Fast Learner";
    }
}

// Simulate a quiz score (replace this with actual scoring logic)
var quizScore = 65; // Change this value with your calculated score

// Get the learner category and display it
var learnerCategory = calculateLearnerCategory(quizScore);
document.getElementById("learnerCategory").textContent = "You are a " + learnerCategory;