class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
        if (this.sale == true) {
            this.sale = 'sale';
        }
        else {
            this.sale = '';
        }
    }
    draw(out) {
        document.querySelector(out).innerHTML +=
            `<div>
            <img src="${this.image}" alt="book-img">
            <p> ${this.sale}</p>
               <p>Book:  ${this.name}</p>
               <p> ${this.amount} грн.</p>
             </div>`;

    }
}