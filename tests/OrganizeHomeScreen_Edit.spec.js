import {test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';
import Orgpage from '../pages/OrganizeHomeScreen_Edit.js';
 
test('Verify rearrange Homescreen', async ({page})=>{
 
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
 
    await loginuser.login()
 
    await expect(page).toHaveURL(testdata.homeurl)
 
   
    const Org = new Orgpage(page)
    await Org.OrgnizeEdit()
   await page.waitForTimeout(5000)
 
})