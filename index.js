// prend en paramètre un guess et un mot à deviner
function tryWord(word, base) {
  document.getElementById("win").innerText = '';
	// TODO: fix jeu sensible à la casse.
  word = word.toLowerCase();
  base = base.toLowerCase();

  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    
		for (let i = 0; i < arrayWord.length; i++) {
    	if (arrayWord[i] === arrayBase[i]) {
      	wellPlaced.push(arrayWord[i]);
      }	else {
        if (missplaced.includes(arrayWord[i]) === false)
        missplaced.push(arrayWord[i])
      }
    }

    console.log("missplaced avant le for :",missplaced)

    for (const char of missplaced) {
    	if (arrayBase.includes(char) === false) {
      	notInWord.push(char)
      }
    }

    missplaced = missplaced.filter(char => arrayBase.includes(char));
    
    console.log("missplaced apres le for :", missplaced)
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  
}

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value

	let result = tryWord(word, base)

  document.getElementById("word").value = ""
 	document.getElementById("try").innerText = "Votre proposition : « "+ word+" »"
  document.getElementById("well").innerText = 'Ces lettres sont bien placées : '+result.wellPlaced.join(', ')
  document.getElementById("miss").innerText = 'Ces lettres sont mal placées mais bien dans le mot : '+result.missplaced.join(', ')
  document.getElementById("not").innerText = 'Ces lettres ne sont pas dans le mot : '+result.notInWord.join(', ')
  document.getElementById("number").innerText = "Vous avez deviné l'emplacement de "+(result.wellPlaced.length)+" lettres sur 12"
  if (result.wellPlaced.length === base.length) {
	  document.getElementById("win").innerText = '⭐ Vous avez gagné ! ⭐';
    document.getElementById("try").innerText = ""
    document.getElementById("well").innerText = ""
    document.getElementById("miss").innerText = ""
    document.getElementById("not").innerText = ""
    document.getElementById("number").innerText = ""
  }
}

