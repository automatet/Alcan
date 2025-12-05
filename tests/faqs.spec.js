import {test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';
import faqspage from '../pages/faqsPage.js';
 
test('Verify FAQS Page Open', async ({page})=>{
 
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
 
    await loginuser.login()
 
    await expect(page).toHaveURL(testdata.homeurl)
 
   
    const faqs = new faqspage(page)
    await faqs.faqspageopen()
 
    //const faq = new faqspage(page)
    //await faq.faqextpage()
    //const faqs = new faqspage(page)
    //await faqs.faqextpage()
     
   
 
   
 
})