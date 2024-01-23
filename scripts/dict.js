function dictRun() {
    let word = document.getElementById('dataDict').value;
    fetchAndProcess(word)
    return
}
async function fetchAndProcess(word) {
    const wordInput = word;
    const resultContainer = document.getElementById("resultContainer");
    
    if (!wordInput) {

      return;
    }

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`);
      const data = await response.json();

      // Process the data (you can customize this part based on your needs)
      const word = data[0]?.word || "Word not found";
      const phonetics = data[0]?.phonetics.map(entry => entry.text || entry.audio).join(", ") || "No phonetics available";
      const meanings = data[0]?.meanings.map(meaning => {
        

        return `${meaning.partOfSpeech}: ${meaning.definitions.map(def => def.definition).join(", ")}`;
        
      }).join("<br>") || "No meanings available";
      const license = data[0]?.license?.name || "License information not available";

      // Display the processed information
      const setData = `
        <p><strong>Word:</strong> ${word}</p>
        <p><strong>Phonetics:</strong> ${phonetics}</p>
        <p><strong>Meanings:</strong></p>
        <p>${meanings}</p>
        <p><strong>License:</strong> ${license}</p>
      `;
      document.getElementById('result_d').innerHTML = setData;
    } catch (error) {
        throw new Error('Error Occured: ' + error)
    }}