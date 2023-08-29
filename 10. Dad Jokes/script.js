const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// using async/await below

async function generateJoke() {
    const config = {
        headers: {
        Accept: 'application/json'
        },
    }

    const response = await fetch('https://icanhazdadjoke.com', config)
    
    const data = await response.json()

    jokeEl.innerHTML = data.joke
}

// the above is async/await which is more modder than the .then below, it makes it look more synchonous than it acually is.

// function generateJoke() {
//     const config = {
//         headers: {
//         'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(response => response.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }