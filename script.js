async function askAI(message) {
  const response = await fetch(
    "https://YOUR-BACKEND-DOMAIN.com/api/chat",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data.reply;
}
