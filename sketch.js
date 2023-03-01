// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = 8;   

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let colorSlider;
let sizeSlider;

function setup() { 
  createCanvas(710, 710);
  background(255);
  angleMode(DEGREES);
  colorMode(HSB, 255);
  
  // slider has a range between 0 and 255 with a starting value of 127
  brushColorSlider = createButton('Brush Color Slider');
  colorSlider = createSlider(0, 255, 127);

  // Creating the save button for the file
  saveButton = createButton('Save');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton('Clear');
  clearButton.mousePressed(clearScreen);

  // Creating the button for Full Screen
  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);
}

// Save File Function
function saveFile() {
  save('design.jpg');
}

// Clear Screen function
function clearScreen() {
  background(255);
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  stroke(colorSlider.value(), 255, 255);
  fill(colorSlider.value(), 255, 255, 127);
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
