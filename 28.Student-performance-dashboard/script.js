// Marks (Bar Chart)
new Chart(document.getElementById("marksChart"), {
    type: "bar",
    data: {
        labels: ["Math", "Science", "English"],
        datasets: [{
            label: "Marks",
            data: [80, 75, 90],
            backgroundColor: ["red", "blue", "green"]
        }]
    }
});

// Attendance (Pie Chart)
new Chart(document.getElementById("attendanceChart"), {
    type: "pie",
    data: {
        labels: ["Present", "Absent"],
        datasets: [{
            data: [85, 15],
            backgroundColor: ["green", "red"]
        }]
    }
});

// Progress (Line Chart)
new Chart(document.getElementById("progressChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [{
            label: "Progress",
            data: [60, 70, 80, 90],
            borderColor: "blue"
        }]
    }
});