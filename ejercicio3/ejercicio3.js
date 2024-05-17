let circuloRojo;
let circuloAzul;
let tamanoLienzo = 600;

function setup() {
  createCanvas(tamanoLienzo, tamanoLienzo);
  colorMode(HSB, 360, 100, 100);  // Usar el modo de color HSB
  circuloRojo = new Circulo(300, 100, 20, color(0, 100, 50), 5);  // Círculo rojo que se mueve más rápido
  circuloAzul = new Circulo(300, 100, 20, color(240, 100, 50), 2); // Círculo azul que se mueve más lento
}

function draw() {
  background(255);

  circuloRojo.mover();
  circuloRojo.mostrar();
  // Verificar colisión del círculo rojo con el techo
  if (circuloRojo.y - circuloRojo.radio <= 0) {
    circuloRojo.cambiarColor();
  }

  circuloAzul.mover();
  circuloAzul.mostrar();
  // Verificar colisión del círculo azul con el piso
  if (circuloAzul.y + circuloAzul.radio >= tamanoLienzo) {
    circuloAzul.cambiarColor();
  }
}

class Circulo {
  constructor(x, y, radio, color, velocidad) {
    this.x = x;
    this.y = y;
    this.radio = radio;
    this.color = color;
    this.velocidad = velocidad;
    this.colorOriginal = color;
  }

  mover() {
    this.y += this.velocidad;
    // Rebotar si golpea el piso o el techo
    if (this.y + this.radio > tamanoLienzo || this.y - this.radio < 0) {
      this.velocidad *= -1;
    }
  }

  mostrar() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radio * 2);
  }

  cambiarColor() {
    // Obtener el tono, saturación y brillo del color actual
    let h = hue(this.color);
    let s = saturation(this.color);
    let b = brightness(this.color);
    // Incrementar el brillo, pero asegurarse de que no supere 100
    b = min(b + 10, 100);
    // Actualizar el color del círculo
    this.color = color(h, s, b);
  }
}
