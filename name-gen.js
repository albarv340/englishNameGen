function generateName() {
  fetch("adjectives-list.json")
    .then(response => response.text())
    .then(text => {
      const adjectives = text.split("\n");
      fetch("nouns-list.json")
        .then(response => response.text())
        .then(text => {
          const nouns = text.split("\n");
          let resultAdjectives = adjectives[
            Math.floor(Math.random() * adjectives.length)
          ].replace(/(\r\n|\n|\r)|"/gm, "");
          resultAdjectives =
            resultAdjectives.charAt(0).toUpperCase() +
            resultAdjectives.slice(1);
          let resultNouns = nouns[
            Math.floor(Math.random() * nouns.length)
          ].replace(/(\r\n|\n|\r)|"/gm, "");
          resultNouns =
            resultNouns.charAt(0).toUpperCase() + resultNouns.slice(1);
          const result =
            resultAdjectives +
            resultNouns +
            Math.floor(Math.random() * 10) +
            parseInt(Math.floor(Math.random() * 9) + 1);
          document.getElementById("name").innerText = result;
          document.getElementById(
            "adjectiveDefinition"
          ).innerText = resultAdjectives;
          document.getElementById("adjectiveDefinition").href =
            "https://en.wiktionary.org/wiki/" + resultAdjectives.toLowerCase();
          document.getElementById("nounDefinition").innerText = resultNouns;
          document.getElementById("nounDefinition").href =
            "https://en.wiktionary.org/wiki/" + resultNouns.toLowerCase();
        });
    });
}
generateName();
