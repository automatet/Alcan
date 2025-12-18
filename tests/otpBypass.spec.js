import {test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import otpbypass from '../pages/otpBypassPage.js';
import testdata from '../testdata.json'

test('01 otpbypass - valid details', async ({page})=>{
await page.goto(testdata.URL);
const loginuser = new LoginPage(page);
await loginuser.login()
const bypassotp = new otpbypass(page);
await bypassotp.enterdeatils();


});



