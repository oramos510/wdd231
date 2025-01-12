document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

    const courses = [
    { name: "WDD 231", completed: true, credits: 3 },
    { name: "WDD 132", completed: false, credits: 3 },
    { name: "CSE 101", completed: true, credits: 4 },
    { name: "CSE 102", completed: false, credits: 3 },
    ];

    const courseList = document.getElementById("courseList");
    let totalCredits = 0;

    courses.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");
    if (course.completed) {
        courseCard.classList.add("completed");
    }

    const courseName = document.createElement("h3");
    courseName.textContent = course.name;

    const courseCredits = document.createElement("p");
    courseCredits.textContent = `${course.credits} credits`;

    courseCard.appendChild(courseName);
    courseCard.appendChild(courseCredits);
    courseList.appendChild(courseCard);

    if (course.completed) {
        totalCredits += course.credits;
    }
    });

    document.getElementById("totalCredits").textContent = `Total Credits: ${totalCredits}`;

    document.getElementById('showAll').addEventListener('click', () => {
    displayCourses(courses);
    });

    document.getElementById('showWDD').addEventListener('click', () => {
    displayCourses(courses.filter(course => course.name.startsWith("WDD")));
    });

    document.getElementById('showCSE').addEventListener('click', () => {
    displayCourses(courses.filter(course => course.name.startsWith("CSE")));
    });

    function displayCourses(filteredCourses) {
    courseList.innerHTML = "";
    let totalCredits = 0;
    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        if (course.completed) {
        courseCard.classList.add("completed");
        }

        const courseName = document.createElement("h3");
        courseName.textContent = course.name;

        const courseCredits = document.createElement("p");
        courseCredits.textContent = `${course.credits} credits`;

        courseCard.appendChild(courseName);
        courseCard.appendChild(courseCredits);
        courseList.appendChild(courseCard);

        if (course.completed) {
        totalCredits += course.credits;
        }
    });

    document.getElementById("totalCredits").textContent = `Total Credits: ${totalCredits}`;
    }
});
