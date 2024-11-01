 
document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "Act as if what you do makes a difference. It does. – William James",
    ];

    document.getElementById('generate-quote').addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById('motivational-quote').innerText = quotes[randomIndex];
    });
});