// Data
let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
let temp = [30, 32, 31, 29, 33, 35, 34];

// Line Chart
new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: days,
        datasets: [{
            label: "Temperature",
            data: temp,
            borderColor: "blue"
        }]
    }
});

// Bar Chart
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: days,
        datasets: [{
            label: "Temperature",
            data: temp,
            backgroundColor: "green"
        }]
    }
});

// Pie Chart
new Chart(document.getElementById("pieChart"), {
    type: "pie", 
    data: {
        labels: ["Sunny","Rainy","Cloudy"],
        datasets: [{
            data: [4, 2, 1],
            backgroundColor: ["yellow","blue","gray"]
        }]
    }
});