
// get info from inputs
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {

    event.preventDefault();

const formDate = new FormData(form);

const formEntries = Object.fromEntries(FormData.entries());

console.log('Stored from your nice inputs:', formEntries);
});


// get the saved inputs from browser data
const savedData = localStorage.getItem('userInfo');
if (savedData) {
    const parsedData = JSON.parse(savedData);
    console.log('Retieved user data:', parsedData.name, parsedData.age);
}