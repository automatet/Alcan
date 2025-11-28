import {test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';


test('Login user', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)

    await loginuser.login()

    await expect(page).toHaveURL(testdata.homeurl)

})

