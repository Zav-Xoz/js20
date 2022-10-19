class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw(out) {
        document.querySelector(out).innerHTML +=
            `<div>
            <img src="${this.image}" alt="book-img">
               <p>Book:  ${this.name}</p>
               <p> ${this.amount} грн.</p>
             </div>`;

    }
}
