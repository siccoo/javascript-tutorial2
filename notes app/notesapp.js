console.log('This is from a different file');
let notes = 
[ {
    text: 'Order cat food', 
    completed: true 
}, {
    text: 'Clean kitchen', 
    completed: false 
}, {
    text: 'Buy food',
    completed: true 
}, {
    text: 'Work well', 
    completed: false 
}, {
    text: 'Do exercise', 
    completed: true 
} ]

const filters = {
    searchText: ''
}

filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p')
    noteEl.textContent = note.title
    document.querySelector('#notes').appendChild(noteEl)
})


document.querySelector('#create-note').addEventListener('click', function (e){
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes('notes', 'filter')
})

document.querySelector('#remove-all').addEventListener('click', function (e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('change', function (e){
    console.log(e)
})



// ---Single---
// p
// #replace
// .item

// ---Multiple---
// p#order
// button.inventory
// h1#title.application
// h1.application#title
// DOM - Document Object Model manipulation whereby the document is the HTML elements and the Object is the Javascript functionality in it, while model is linking up our javascript into our HTML element.

// // Query and remove
// // const p = document.querySelector('p')
// // p.remove()

// // // Query all and remove
// // const ps = document.querySelectorAll('p')

// // ps.forEach(function(p){
    
// //     //console.log(p.textContent)
// //     //p.remove()
// // })

// // Add a new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from JavaScript';
// document.querySelector('body').appendChild(newParagraph);