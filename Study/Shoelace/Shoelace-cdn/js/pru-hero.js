class pruHero extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <style>
            .hero {
                background-color: navy;
                padding: 1rem;
                height: 200px;
            }
        </style>
        
        <div class="hero">
            <pru-button></pru-button>
        </div>
        `
    }
}

customElements.define('pru-hero', pruHero);

export {pruHero};