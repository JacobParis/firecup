import Surface from '../components/surface.js';
import DrawToolbar from '../components/drawtoolbar.js';

export default class CardSociables {

    constructor(config) {
        

        this.title = <header class="sociables-title"/>;
        this.body = <div class="sociables-body" />;
        this.footer = <footer class="sociables-footer" />;

        this.container = (
            <section class="sociables">
                {this.title}
                {this.body}
                {this.footer}
            </section>
        );

        this.toolbar = <span>Toolbar</span>;
        //if(config.color) this.setColor(config.color);
    }

    /**
     * Different modes for different situations
     * Alpha Mode when it is your turn
     * Beta Mode when it is someone else's turn
     * Gamma Mode when you are a spectator
     */
    alphaMode(data) {
        console.log(data);
        this.title.innerText = data.title;
        this.body.innerText = data.body;
        this.footer.innerText = data.footer;

        this.show();
    }

    betaMode(data) {
        this.title.innerText = data.title;
        this.body.innerText = data.body;
        this.footer.innerText = data.footer;

        this.fade();
    }


    fade() {
        this.container.style.opacity = 0.5;
    }

    show() {
        this.container.style.opacity = 1;
    }

    disable() {
        this.fade();
    }
}