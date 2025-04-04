document.addEventListener("DOMContentLoaded", function () {
    const workouts = {
        "Monday": ["Chest & Triceps"],
        "Tuesday": ["Back & Biceps"],
        "Wednesday": ["Rest Day"],
        "Thursday": ["Delts & Traps"],
        "Friday": ["Legs"],
        "Saturday": ["Cardio & Abs"],
        "Sunday": ["Rest Day"]
    };

    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const workoutList = document.getElementById("workout-list");

    if (workoutList) {
        workouts[today].forEach(workout => {
            const li = document.createElement("li");
            li.innerHTML = `<input type="checkbox"> ${workout}`;
            workoutList.appendChild(li);
        });
    }
});
