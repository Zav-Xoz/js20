class Valid {
    constructor(email, password) {
        this.email = email;
        this.password = String(password);
        this.isValid = false;
    }
    validate() {
        if (this.password.length >= 6) this.isValid = true;
        if (this.password.length < 6) this.isValid = false;
    }
}