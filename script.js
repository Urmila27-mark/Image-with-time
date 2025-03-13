function displayImage(imageUrl) {
    document.getElementById('largeImage').src = imageUrl;
    document.getElementById('imageContainer').style.display = 'flex';
    updateDateTime();
}

function goBack() {
    document.getElementById('imageContainer').style.display = 'none';
}

function updateDateTime() {
    const now = new Date();
    document.getElementById('time').innerText = now.toLocaleTimeString();
    document.getElementById('day-date').innerText = now.toDateString();
    document.getElementById('greeting').innerHTML = "Hello, have a great day! 🌞";
}

setInterval(updateDateTime, 1000);