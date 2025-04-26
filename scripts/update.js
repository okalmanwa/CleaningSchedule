const roommates = ['Rob','Asif','Nazlii','Carey'];

function getCurrentWeekNumber() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const pastDaysOfYear = (now - startOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
}

function assignTasks() {
    const currentWeek = getCurrentWeekNumber();
    const rotationOffset = currentWeek % roommates.length;
    
    const rotatedRoommates = [...roommates];
    for (let i = 0; i < rotationOffset; i++) {
        rotatedRoommates.push(rotatedRoommates.shift());
    }

    document.getElementById('name-kitchen').textContent = rotatedRoommates[0];
    document.getElementById('name-toilets').textContent = rotatedRoommates[1];
    document.getElementById('name-full-bath').textContent = rotatedRoommates[2];
    document.getElementById('name-trash').textContent = rotatedRoommates[3];
}

function updateDate() {
    const currentDate = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = "Today's Date: " + currentDate.toLocaleDateString(undefined, dateOptions);
}

function initializePage() {
    assignTasks();
    updateDate();
}

window.onload = function() {
    const loading = document.getElementById('loading');
    loading.style.opacity = '0';
    initializePage();
}
