const btn = document.getElementById("btn");
const message = document.getElementById("message");

let count = 0;

btn.addEventListener("click", () => {
  count++;
  message.textContent = `អ្នកបានចុច ${count} ដង`; 
});
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  count = 0;
  message.textContent = "ចុចប៊ូតុងខាងលើ";
});
const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

// នេះជាមុខងារ async (សម្រាប់រង់ចាំទិន្នន័យ)
quoteBtn.addEventListener("click", async () => {
    quoteText.textContent = "កំពុងទាញយកទិន្នន័យ...";
    quoteAuthor.textContent = "";

    try {
        // ១. ប្រាប់ API ឱ្យផ្ញើទិន្នន័យមក
        const response = await fetch("https://dummyjson.com/quotes/random");
        
        // ២. បំប្លែងទិន្នន័យទៅជា JavaScript Object
        const data = await response.json();
        
        // ៣. បង្ហាញទិន្នន័យលើអេក្រង់
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `- ${data.author}`;
        
    } catch (error) {
        // បើមានបញ្ហា ឬអ៊ីនធឺណិតដាច់
        quoteText.textContent = "សុំទោស មានបញ្ហាក្នុងការទាញយកទិន្នន័យ!";
        console.error(error);
    }
});