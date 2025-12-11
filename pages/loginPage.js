import testdata from '../testdata.json'

class LoginPage{

    constructor(page){

        this.page = page;
        this.useremail = page.locator("//input[@id='email']")
        this.userpasword = page.locator("//input[@id='password']")
        this.captchabox = page.locator("//div[@class='captcha-box']")
        this.captcha = page.locator("//input[@id='captcha']")
        this.loginbtn = page.locator("//button[@type='submit']")
        
    }

    async login(){

        await this.useremail.fill(testdata.email)
        await this.userpasword.fill(testdata.password)
        const captchaText =await this.captchabox.innerText();
        await this.captcha.fill(captchaText.trim())
        await this.loginbtn.click()
       

      

    }
}

export default LoginPage;