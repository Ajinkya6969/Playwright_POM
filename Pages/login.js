// exports.LoginPage = class LoginPage {

//     constructor(page) {

//         this.page = page
//         this.username_textfield = page.getByRole('textbox', { name: 'Username' })
//         this.password_textfield = page.getByRole('textbox', { name: 'Password' })
//         this.login_button = page.getByRole('button', { name: ' Login' })
//     }
//    async gotoLoginPage(){
    
//     await this.page.goto('https://the-internet.herokuapp.com/login');

//    }

//    async login(username, password){

//     await this.username_textfield.fill(username)
//     await this.password_textfield.fill(password)
//     await this.login_button.click()

//    }
// }

exports.FacebookLogin = class FacebookLogin {

    constructor (page) {
        this.page = page
        this.username_field = page.getByTestId('royal-email')
        this.password_field = page.getByTestId('royal-pass')
        this.login_button = page.getByTestId('royal-login-button')
    }

    async gotofacebookloginpage(){

        await this.page.goto('https://www.facebook.com/')
    }
    async login(username, password){
        await this.username_field.fill(username)
        await this.password_field.fill(password)
        await this.login_button.click()

    }

}