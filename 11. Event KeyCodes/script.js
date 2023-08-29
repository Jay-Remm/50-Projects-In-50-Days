const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
     </div>

    <div class="key">
         ${event.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    `
})

// under the insertHTML and in the first div we are using a shortand conditional, basicly it comes down to we are testing that e.key is equal to a blank string ?(then) output "space" otherwise output e.key