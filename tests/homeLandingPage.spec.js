import {test,expect} from '@playwright/test'
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';
import landingPage from '../pages/landingPage.js'

test('Home Lnading Page', async ({page})=>{

    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)

    await loginuser.login()

    const homelandingpage =new landingPage(page)
    await expect(homelandingpage.homebtn).toBeVisible()
})