document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('timesheetForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const date = document.getElementById('date').value;  // Ensure there's an input with id="date"
        const jobSite = document.getElementById('jobSite').value;
        const start = document.getElementById('start-time').value; // Correctly referencing the start-time
        const end = document.getElementById('stop-time').value;    // Correctly referencing the stop-time

        console.log(start); // This will log the start time
        console.log(end);   // This will log the stop time
    });
});


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
