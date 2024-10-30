document.getElementById('infoButton').addEventListener('click', function() {
    const response = prompt("Máte informace o čepici? (ano/ne)");
    
    if (response && response.toLowerCase() === "ano") {
        const location = prompt("Kde byla čepice spatřena či nalezena?");
        if (location) {
            document.getElementById('output').innerText = `Čepice byla spatřena: ${location}`;
        
    } } else {
        alert("Díky za nic.")
    }
});
