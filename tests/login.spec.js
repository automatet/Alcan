import {test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';

test('Login test for Automation', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)

    await loginuser.login()

    await expect(page).toHaveURL(testdata.homeurl)

    await page.context().storageState({path: "loginsessions.json"})

})