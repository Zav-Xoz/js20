class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        this.emaiError = '';
        this.passwordError = '';
    }
    validate() {
        if (this.password.length >= 6 && this.email.trim() != '') this.isValid = true;
        if (this.password.length < 6) {
            this.isValid = false;
            this.passwordError = 'min length 6';
        }
        if (this.email.trim() == '') {
            this.isValid = false;
            this.emaiError = 'email empty';
        }
    }

}