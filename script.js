document.addEventListener('DOMContentLoaded', function () {
    // Welcome message
    const userName = 'Harfi'; // This could be dynamically retrieved
    document.getElementById('user-name').textContent = userName;

    // Form validation and submission
    const form = document.getElementById('message-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const birthDate = document.getElementById('birth-date').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;

        const submittedMessage = `
            <p>Nama: ${name}</p>
            <p>Tanggal Lahir: ${birthDate}</p>
            <p>Jenis Kelamin: ${gender}</p>
            <p>Pesan: ${message}</p>
        `;

        document.getElementById('submitted-message').innerHTML = submittedMessage;
    });
});
