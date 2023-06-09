const url ="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('responseSpace');

const btn = document.getElementById('search')


btn.addEventListener('click', () => {
    let inpWord = document.getElementById('askBox').value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
        <div class="word">
        <h3 class="bold">
            ${inpWord}
        </h3>
    </div>

    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
    </div>

    <p class="word-meaning">
      ${data[0].meanings[0].definitions[0].definition}</p>
    </p>

    <p class="antonyms">
        Antonyms:  ${data[0].meanings[0].antonyms}
    </p>
    <p class="synonyms">
      Synonyms:  ${data[0].meanings[0].synonyms}
    </p>
    

    <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;

    })
    .catch( () => {
        result.innerHTML = `<h2 class="err">Could Not Find Your word </h2>`
    })
});





