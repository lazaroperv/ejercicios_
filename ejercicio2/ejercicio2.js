let circuloRojo;
let circuloAzul;
let tamCanvas= 600;

function setup() {
  createCanvas(tamCanvas, tamCanvas);
  circuloRojo = new Circulo(300, 100, 20, 'red', 5);  // Círculo rojo que se mueve más rápido
  circuloAzul = new Circulo(300, 100, 20, 'blue', 2); // Círculo azul que se mueve más lento
}

function draw() {
  background(255);

  circuloRojo.mover();
  circuloRojo.mostrar();

  circuloAzul.mover();
  circuloAzul.mostrar();

  // Verificar colisión del círculo azul con el piso
  if (circuloAzul.y + circuloAzul.radio >= tamCanvas) {
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
    if (this.y + this.radio > tamCanvas || this.y - this.radio < 0) {
      this.velocidad *= -1;
    }
  }

  mostrar() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radio * 2);
  }

  cambiarColor() {
    // Cambiar a un tono aleatorio de azul
    this.color = color(random(0, 255), random(0, 255), 255);
  }
}
