const ENDPOINT = 'https://rickandmortyapi.com/api'
const allCharactersContainer = document.getElementById('all-characters')

getAllCharacters()

function getAllCharacters(){
    fetch(`${ENDPOINT}/character`)
        .then(response=> response.json())
        .then(json=>{
            json.results.forEach(character => {
                createCharacter(character)
            });
        })
}

function createCharacter(character){
    console.log(character)
    const characterContainer = document.createElement('div')
    characterContainer.setAttribute('class', 'flex')
    // Levi deo dizajna
    const characterImg = document.createElement('img')
    characterImg.setAttribute('src', character.image)
    characterImg.setAttribute('class','w-[90px] h-[90px] rounded-full')
    // Desni deo dizajna
    const rightSideContainer = document.createElement('div')
    const characterName = document.createElement('h2')
    characterName.innerText = character.name
    characterName.setAttribute('class', 'font-bold text-xl')
    rightSideContainer.appendChild(characterName)

    // Ubacivanje informacija u character container
    characterContainer.appendChild(characterImg)
    characterContainer.appendChild(rightSideContainer)

    // Ubacivanje character container-a u listu svih character-a
    allCharactersContainer.appendChild(characterContainer)
}

