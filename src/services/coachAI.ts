interface CoachAIResponse {
  output: Array<{
    id: string;
    type: string;
    status: string;
    content: Array<{
      type: string;
      text: string;
    }>;
    role: string;
  }>;
}

function cleanOpenAIOutput(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^\s+|\s+$/g, '')
    .trim();
}

export async function getCoachingMessage(userMessage: string): Promise<string> {
  try {
    const response = await fetch("https://cardscoutai.app.n8n.cloud/webhook/coach-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage })
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data: CoachAIResponse = await response.json();

    if (data.output && data.output.length > 0 && data.output[0].content && data.output[0].content.length > 0) {
      const rawText = data.output[0].content[0].text;
      return cleanOpenAIOutput(rawText);
    }

    throw new Error("Unexpected response format");
  } catch (error) {
    console.error("Coach AI error:", error);
    throw error;
  }
}
