const form = document.querySelector('#add-image');
const textForm = document.querySelector('#add-text');
const input = document.querySelector('#meme-image');
const textInput = document.querySelector('#meme-text');
const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');
const memeDiv = document.querySelector('#meme-div');


form.addEventListener('submit', function(e) {
	e.preventDefault();
	const newImage = document.createElement('img');
	newImage.src = input.value;
	newImage.alt = 'image not found';
	newImage.style.width = "100%";
	newImage.id = 'meme-pic';
	memeDiv.appendChild(newImage);
	input.value = '';
});

textForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const newText = makeLogo(
		textInput.value,
		colorInput.value,
		fontSizeInput.value
	);
	newText.innerText = textInput.value;
	newText.className = "centered";
	memeDiv.appendChild(newText);
	textInput.value = '';
});

function makeLogo(text, color, size) {
	const logo = document.createElement('h2');
	logo.innerText = text;
	logo.style.color = color;
	logo.style.fontSize = size + 'px';
	return logo;
}
