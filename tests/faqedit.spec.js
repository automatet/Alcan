import {test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';
import faqsedit from '../pages/faqedit.js';
 
test('Edit existing FAQ entries with mandatory validations', async ({page})=>{
 
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
 
    await loginuser.login()
 
    await expect(page).toHaveURL(testdata.homeurl)
    const faqone = new faqsedit(page)
    await faqone.editfaq()
    await expect(page.locator('//div[contains(text(),"Please enter question")]')).toBeVisible();
    await expect(page.locator('//div[contains(text(),"Please enter answer")]')).toBeVisible();
    await faqone.faqspageedit();
    
   
 
})