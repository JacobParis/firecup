export default class Card {
    constructor() {
        this.face = <div class="card-face" />;
        this.face.addEventListener('click', () => this.onClick());

        this.back = <div class="card-face card-face-back" />;
        this.back.addEventListener('click', () => this.onClick());


        this.container = <div class="card card-facedown"> {this.face} {this.back}</div>;
    }

    setElements(elements) {
        console.log("SET ELEMENTS");
        this.resetClick();

        this.face.innerHTML = "";

        if(!elements) return;
        if(!elements.length) elements = [elements];

        for(const element of elements) this.addElement(element);
    }

    addElement(element) {
        if(!element) return;

        this.face.appendChild(element);
    }

    showBack() {
        this.container.classList.add("card-facedown");
        this.resetClick();
    }

    showFront() {
        this.container.classList.remove("card-360");
        if(!this.container.classList.contains("card-facedown")) {
            this.container.classList.add("card-360");
        }
        this.container.classList.remove("card-facedown");
        this.resetClick();
    }

    show() {
        this.container.classList.remove('hide');
    }

    hide() {
        this.container.classList.add('hide');
    }

    render() {
        return this.container;
    }

    resetClick() {
        this.onClick = () => {
            console.log("No click handler set");
        }
    }
    onClick() { console.log("No click handler set"); }
}