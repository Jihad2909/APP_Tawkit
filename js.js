function updateTime() {
    
    var currentTime = new Date();

    // Get hours, minutes, and seconds
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Format time as HH:MM:SS
    var formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    // Update the content of the "time" div
    document.getElementById('waqt').innerHTML = formattedTime;   
}
setInterval(updateTime, 1);
updateTime();

function updaate(){

    var prayerTimesData = [
        { date: '2024-02-08', fajr: '5:47', dhuhr: '12:45', asr: '15:25', moghrub: '17:55', isha: '19:25', tedhkir:'اَللَّهُمَّ صَلَّى وَسَلَّمَ عَلَى سَيِّدِنَا مُحَمَّدْ'},
        { date: '2024-02-09', fajr: '5:48', dhuhr: '12:46', asr: '15:26', moghrub: '17:56', isha: '19:26', tedhkir:'اَللَّهُمَّ صَلَّى وَسَلَّمَ عَلَى سَيِّدِنَا مُحَمَّدْ' },
        // Add more entries as needed
    ];
    
    // Store prayer times in localStorage
    localStorage.setItem('prayerTimes', JSON.stringify(prayerTimesData));
    
    // Get the current date in the format 'YYYY-MM-DD'
    var currentDate = new Date().toISOString().split('T')[0];
    
    // Retrieve and display prayer times for the current date
    var storedPrayerTimes = JSON.parse(localStorage.getItem('prayerTimes'));
    
    // Find prayer times for the current date
    var currentDayPrayerTimes = storedPrayerTimes.find(entry => entry.date === currentDate);
    
    var col1 = document.getElementById('col1');
    var col2 = document.getElementById('col2');
    var col3 = document.getElementById('col3');
    var col4 = document.getElementById('col4');
    var col5 = document.getElementById('col5');
    var tedhkir = document.getElementById('tedhkir');
    
    if (currentDayPrayerTimes) {
        col1.innerHTML = currentDayPrayerTimes.isha;
        col2.innerHTML = currentDayPrayerTimes.moghrub;
        col3.innerHTML = currentDayPrayerTimes.asr;
        col4.innerHTML = currentDayPrayerTimes.dhuhr;
        col5.innerHTML = currentDayPrayerTimes.fajr;
        tedhkir.innerHTML = currentDayPrayerTimes.tedhkir;
    } else {
        console.log('No prayer times found for the current date.');
    }
    
}
setInterval(updaate, 1);
updaate();