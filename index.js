const apiKey = '1234567890abcdef';

document.getElementById('encryptBtn').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    if (message) {
        encryptMessage(message);
    } else {
        alert('Por favor, insira uma mensagem para criptografar.');
    }
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const encryptedMessage = document.getElementById('message').value;
    if (encryptedMessage) {
        decryptMessage(encryptedMessage);
    } else {
        alert('Por favor, insira a mensagem criptografada para descriptografar.');
    }
});

function encryptMessage(message) {
    fetch('https://42dac5c7-51ad-4828-aa28-f08c14ee809c-00-lmf1h2h189o1.picard.replit.dev/encrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify({ message })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao criptografar a mensagem: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('output').value = data.encrypted.encryptedData;
        })
        .catch(error => alert(error.message));
}

function decryptMessage(encryptedData) {
    fetch('https://42dac5c7-51ad-4828-aa28-f08c14ee809c-00-lmf1h2h189o1.picard.replit.dev/decrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify({ encryptedData })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao descriptografar a mensagem: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('output').value = data.decrypted;
        })
        .catch(error => alert(error.message));
}