// Function to handle phishing check
function checkPhishing() {
    // Get the URL and email content from the form inputs
    const url = document.getElementById('url').value;
    const emailContent = document.getElementById('emailContent').value;
    const resultElement = document.getElementById('result');

    // Simulate a phishing check process (you can replace this with actual logic)
    let message = 'Phishing check completed:\n';
    if (url.toLowerCase().includes('phishing')) {
        message += `The URL "${url}" is potentially a phishing site.\n`;
    } else {
        message += `The URL "${url}" appears to be safe.\n`;
    }

    if (emailContent.toLowerCase().includes('suspicious')) {
        message += 'The email content appears to contain suspicious elements.\n';
    } else {
        message += 'The email content appears to be safe.\n';
    }

    // Display the result message
    resultElement.textContent = message;

    // Display a success alert when the message is sent
    alert('Message sent! Check the result for details.');
}

// Function to toggle the display of additional information sections
function toggleMoreInfo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Function to toggle the display of FAQ answers
function toggleFAQ(id) {
    const answer = document.getElementById(id);
    const activeItem = document.querySelector('.faq-item.active');
    const icon = document.querySelector('.faq-item.active .toggle-icon');

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        if (activeItem) {
            activeItem.classList.remove('active');
            if (icon) {
                icon.classList.remove('active'); // Assuming you want to toggle an icon
            }
        }
    } else {
        document.querySelectorAll('.faq-answer').forEach(item => item.style.display = 'none');
        document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

        answer.style.display = 'block';
        const parent = answer.parentElement;
        if (parent) {
            parent.classList.add('active');
            const newIcon = parent.querySelector('.toggle-icon');
            if (newIcon) {
                newIcon.classList.add('active'); // Assuming you want to toggle an icon
            }
        }
    }
}

const exampleData = [
    {
        url: 'http://example-phishing-site.com',
        email: `Dear User,

We have detected unusual activity in your account. Please verify your information by clicking the link below:

http://example-phishing-site.com/verify

Failure to do so may result in account suspension.

Thank you,
The Security Team`
    },
    {
        url: 'https://another-phishing-site.com',
        email: `Hello,

Your account has been compromised. Click the link below to reset your password immediately:

https://another-phishing-site.com/reset

Best,
Support Team`
    },
    {
        url: 'http://fake-bank-site.com',
        email: `Dear Customer,

We need you to confirm your banking information. Click here to proceed:

http://fake-bank-site.com/confirm

Regards,
Your Bank`
    },
    {
        url: 'https://secure-phishing-site.com',
        email: `Attention,

We have noticed unusual login attempts on your account. Verify your account by clicking the link below:

https://secure-phishing-site.com/login

Thanks,
Security Team`
    }
    // Add more examples as needed
];

let currentIndex = 0;
const totalCycles = 20;
let cycleCount = 0;

function populateExampleData() {
    document.getElementById('url').value = exampleData[currentIndex].url;
    document.getElementById('emailContent').value = exampleData[currentIndex].email;

    currentIndex = (currentIndex + 1) % exampleData.length;
    cycleCount++;

    if (cycleCount < totalCycles) {
        setTimeout(populateExampleData, 3000); // Change every 3 seconds
    }
}

function checkPhishing() {
    const url = document.getElementById('url').value;
    const emailContent = document.getElementById('emailContent').value;
    const resultElement = document.getElementById('result');
    const messageDiv = document.getElementById('message');

    if (emailContent.trim() === "") {
        alert('Error: Email content is required.');
        messageDiv.textContent = 'Error: Email content is required.';
        messageDiv.style.color = 'red';
        resultElement.textContent = ''; // Clear previous results if any
        return;
    }

    let message = 'Phishing check completed:\n';
    if (url.toLowerCase().includes('phishing')) {
        message += `The URL "${url}" is potentially a phishing site.\n`;
    } else {
        message += `The URL "${url}" appears to be safe.\n`;
    }

    if (emailContent.toLowerCase().includes('suspicious')) {
        message += 'The email content appears to contain suspicious elements.\n';
    } else {
        message += 'The email content appears to be safe.\n';
    }

    resultElement.textContent = message;
    messageDiv.textContent = 'Checking for phishing...';
    messageDiv.style.color = 'green';

    alert('Message sent! Check the result for details.');
}

function toggleMoreInfo(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
}

function toggleFAQ(id) {
    const answer = document.getElementById(id);
    const icon = document.querySelector('.faq-item.active .toggle-icon');

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        document.querySelector('#' + id).parentElement.classList.remove('active');
    } else {
        answer.style.display = 'block';
        document.querySelectorAll('.faq-answer').forEach(function(item) {
            item.style.display = 'none';
        });
        document.querySelectorAll('.faq-item').forEach(function(item) {
            item.classList.remove('active');
        });
        answer.style.display = 'block';
        document.querySelector('#' + id).parentElement.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const moreInfoSections = document.querySelectorAll('.more-info');
    moreInfoSections.forEach(section => section.style.display = 'none');

    const faqAnswers = document.querySelectorAll('.faq-answer');
    faqAnswers.forEach(answer => answer.style.display = 'none');
});

window.onload = populateExampleData;