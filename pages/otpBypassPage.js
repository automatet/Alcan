import { expect } from '@playwright/test';
import testdata from '../testdata.json'
import otpdata from '../otpdata.json';


class otpbypass{

    constructor (page){
        this.page = page;
        this.otpbypassbtn = page.locator("//span[text()='OTP Bypass']");
        this.txt_email = page.locator("//input[@id='email']");
        this.txt_countrycode = page.locator("//input[@id='countryCode']");
        this.countrylist = page.locator("//div[@class='ant-select-item ant-select-item-option']")
        this.txt_mobilenumber= page.locator("//input[@id='mobile']"); 
        this.submitbtn = page.locator("//span[text()='Submit']")
        this.msg_success = page.locator("//div[@class='ant-message-custom-content ant-message-success']");       
        this.msg_mobileUpdate = page.locator("//div[@class='ant-modal-body']");
        this.msg_emailrequired = page.locator("//div[@id='email_help']");
        this.msg_countryCoderequired = page.locator("//div[@id='countryCode_help']");
        this.msg_mobilerequired = page.locator("//div[@id='mobile_help']");
    
    }

    async enterdeatils(){

        await this.otpbypassbtn.click();
        await this.txt_email.fill(otpdata.userEmail);
      await expect(this.txt_email).toHaveValue('nikitasonawane40@gmail.com')
        await this.txt_countrycode.click();
        //wait for dropdown to open
       const dropdown = await this.countrylist.first();
       await dropdown.waitFor();
       //enter country code    
        await this.txt_countrycode.pressSequentially("Indi");
        const option = this.page.locator("div.ant-select-item-option-content", { hasText: "India (+91)" });
       await expect(option).toBeVisible();
        await option.click();
        await this.txt_mobilenumber.fill(otpdata.mobileNo);
        await expect(this.txt_mobilenumber).toHaveValue('8793205545')
        await this.submitbtn.click();
        const submit = this.submitbtn
        await expect(submit).toHaveText('Submit');
        await this.page.waitForTimeout(4000)
        await expect(this.msg_success).toBeVisible();
          
    }

 }
export default otpbypass;
