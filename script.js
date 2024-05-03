document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('timesheetForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const start = parseTime(document.getElementById('start-time').value);
        const stop = document.getElementById('stop-time').value;
        // const project = document.getElementById('jobSite').value;

        const hours = start.hours + stop.hours

        console.log(start)
        console.log(hours)

    });
});

function parseTime(timeString) {
    const parts = timeString.split(':');
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);

    return {hours, minutes};
}

// function saveEntry(entry) {
//     let entries = JSON.parse(localStorage.getItem('timesheetEntries')) || [];
//     entries.push(entry);
//     localStorage.setItem('timesheetEntries', JSON.stringify(entries));
// }

// function displayEntries() {
//     const entries = JSON.parse(localStorage.getItem('timesheetEntries')) || [];
//     const entriesDiv = document.getElementById('timesheetEntries');
//     entriesDiv.innerHTML = entries.map((e, index) => `
//         <div>
//             ${e.date} - ${e.jobSite} - ${e.hours} hours
//             <button onclick="deleteEntry(${index})">Delete</button>
//         </div>
//     `).join('');
// }

// function deleteEntry(index) {
//     let entries = JSON.parse(localStorage.getItem('timesheetEntries')) || [];
//     entries.splice(index, 1);
//     localStorage.setItem('timesheetEntries', JSON.stringify(entries));
//     displayEntries();
// }
