const {
    I
} = inject();

module.exports = {
    fields: {
        email: {
            name: 'email'
        },
        password: {
            name: 'password'
        }
    },
    login(email, password) {
        I.amOnPage('/');
        I.see('greyWing');
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.password, password);
        I.click("Sign in");
        I.wait(2);
        // I.see("Successfully");
        // I.wait(5);
    },
    logout() {
        I.click('Logout');
        I.see('Successfully logged out.')
    }
}