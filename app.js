var data = {};

// initialize vue
var app = new Vue({
  el: '#app',
  data: {
    characterName: 'Name your player.',
    copyBtnText: 'Copy'
  },
  methods: {
    generateName: function () {
      this.characterName = getName()
    },
    copyName: function () {
      copyText(characterName);
      this.copyBtnText = 'Copied';
      setTimeout(()=>{this.copyBtnText = "Copy";}, 1000);
    }
  }
});

function getName () {
  return characterName = randomWord(data.adjectives)+randomWord(data.adjectives)+randomWord(data.nouns);
}

function enableButton() {
  const generateBtn = document.getElementById('generate-btn');
  generateBtn.classList.remove('disabled');
}

function loadData(dataInput) {
  data = dataInput;
}

(() => {
  fetch('./data.json')
  .then(function(response){return response.json();})
  .then(data => loadData(data))
  .then(enableButton());
}).bind(this)();


/* utils */

// return random value from array
function randomWord (arrayInput) {
  const word = arrayInput[Math.floor(Math.random() * arrayInput.length)]
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// copy input text to clipboard
function copyText (textInput) {
  const hiddenInput = document.getElementById("hidden-input");
  hiddenInput.value = this.characterName;
  hiddenInput.select();
  console.log(textInput);
  document.execCommand('copy');
}
