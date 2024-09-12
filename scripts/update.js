const roommates = ['Daniel', 'Rob', 'Carey', 'Asif'];

function assignTasks() {
    const currentDate = new Date();
    const currentWeek = Math.floor(currentDate.getTime() / (1000 * 60 * 60 * 24 * 7));
    console.log(currentDate.getTime());

    const rotatedRoommates = roommates.slice();
    for (let i = 0; i < currentWeek % roommates.length; i++) {
        rotatedRoommates.push(rotatedRoommates.shift());
    }

    document.getElementById('name-kitchen').textContent = rotatedRoommates[0];
    document.getElementById('name-toilets').textContent = rotatedRoommates[1];
    document.getElementById('name-living-room').textContent = rotatedRoommates[2];
    document.getElementById('name-trash').textContent = rotatedRoommates[3];
}

function updateDate() {
    const currentDate = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = "Today's Date: " + currentDate.toLocaleDateString(undefined, dateOptions);
}

window.onload = function() {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none'; // Remove loading screen completely
        }, 500); 
        assignTasks();
        updateDate();
    }, 1000); 
}