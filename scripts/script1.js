function desaparecer(id) {
    var bola = document.getElementById(id);
    bola.style.opacity = "0";
    bola.style.pointerEvents = "none"; // Evita que a bola seja clicável após desaparecer
  }


  function desaparecerEMover(id) {
    var elementoDesaparecer = document.getElementById(id);
    var elementoMover = document.getElementById("movableImage12");
  
    elementoDesaparecer.style.opacity = "0";
    elementoDesaparecer.style.pointerEvents = "none"; // Evita que o elemento seja clicável após desaparecer
  
    // Adiciona uma classe ou ajusta as propriedades CSS do elemento a ser movido
    elementoMover.style.transition = "top 1s ease-in-out";
    elementoMover.style.top = "100px"; // Ajuste conforme necessário
  }

  class MovableObject {
    constructor(element) {
        this.element = element;
        this.isDragging = false;
        this.offsetX = 0;
        this.offsetY = 0;

        this.element.addEventListener('mousedown', this.startDragging.bind(this));
    }

    startDragging(e) {
        this.isDragging = true;
        this.offsetX = e.clientX - this.element.getBoundingClientRect().left;
        this.offsetY = e.clientY - this.element.getBoundingClientRect().top;

        document.addEventListener('mousemove', this.drag.bind(this));
        document.addEventListener('mouseup', this.stopDragging.bind(this));
    }

    drag(e) {
        if (this.isDragging) {
            let newX = e.clientX - this.offsetX;
            let newY = e.clientY - this.offsetY;

            // Obter as dimensões da tela
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            // Aplicar limites da tela
            newX = Math.max(0, Math.min(newX, screenWidth - this.element.clientWidth));
            newY = Math.max(0, Math.min(newY, screenHeight - this.element.clientHeight));

            this.element.style.left = newX + 'px';
            this.element.style.top = newY + 'px';
        }
    }

    stopDragging() {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.drag.bind(this));
        document.removeEventListener('mouseup', this.stopDragging.bind(this));
    }
}

// Criar instâncias para cada objeto que você deseja tornar móvel
const movableObject1 = new MovableObject(document.getElementById('movableImage1'));
const movableObject2 = new MovableObject(document.getElementById('movableImage2'));
const movableObject3 = new MovableObject(document.getElementById('movableImage3'));
const movableObject4 = new MovableObject(document.getElementById('movableImage4'));
const movableObject5 = new MovableObject(document.getElementById('movableImage5'));
const movableObject6 = new MovableObject(document.getElementById('movableImage6'));
const movableObject7 = new MovableObject(document.getElementById('movableImage7'));
const movableObject8 = new MovableObject(document.getElementById('movableImage8'));
const movableObject9 = new MovableObject(document.getElementById('movableImage9'));
const movableObject10 = new MovableObject(document.getElementById('movableImage10'));

  