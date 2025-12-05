import {test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';
import faqpage from '../pages/faqpage.js';
 
test('Verify FAQS Page Open', async ({page})=>{
 
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
 
    await loginuser.login()
 
    await expect(page).toHaveURL(testdata.homeurl)
 
   
    const faqs = new faqpage(page)
    await faqs.faqextpage()
 
   
 
   
 
})