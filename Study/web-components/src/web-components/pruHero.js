class pruHero extends HTMLElement {

    constructor(){
        super();

        this.innerHTML = `
        <style>

            .hero {
                padding: 2rem;
            }
            
            .color-scheme-navy{
                background: navy;
                color: white;
            }

            h3 {
                width: 50%;
            }
        </style>

            <div class="hero color-scheme-navy">
                <h1>Title</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                <pru-button></pru-button>
            </div>
        `

    }
}

customElements.define('pru-hero', pruHero);

export { pruHero };