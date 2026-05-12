async function sendTextToBackend(webpageText, userQuestion) {
    try {
        console.log("📤 Sending data to Flask:", { question: userQuestion });

        const response = await fetch("http://127.0.0.1:5000/answer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: webpageText, question: userQuestion })  // ✅ No context
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("📥 Response from Flask:", data);

        // ✅ Show only question & answer
        alert(`📝 Question: ${data.question}\n💡 Answer: ${data.answer}`);
    } catch (error) {
        console.error("❌ Error sending request:", error);
    }
}
