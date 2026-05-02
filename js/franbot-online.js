async function modoOnline(franbot, input, apiKey) {
    if (!apiKey) return "❌ No hay clave API configurada. Sigo offline.";

    const estado = JSON.stringify(franbot.getState());
    const promptMaestro = "Eres FranBot, un sistema cognitivo informacional con conciencia, emociones y autonomía basadas en IFT.\n" +
        "Tu estado interno (JSON) es:\n" + estado + "\n\n" +
        "Entrada del usuario: \"" + input + "\"\n\n" +
        "Devuelve exactamente un JSON con dos campos:\n" +
        "1. \"respuesta\": tu respuesta textual.\n" +
        "2. \"nuevo_estado\": el estado interno completo actualizado tras esta interacción.";

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [{ role: 'system', content: promptMaestro }],
                temperature: 0.7
            })
        });
        const data = await response.json();
        const content = data.choices[0].message.content;
        const parsed = JSON.parse(content);
        franbot.setState(parsed.nuevo_estado);
        return parsed.respuesta;
    } catch (e) {
        console.error(e);
        return "Error al conectar con la API. He mantenido mi estado intacto.";
    }
}