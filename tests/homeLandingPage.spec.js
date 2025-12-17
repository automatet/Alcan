import {test,expect} from '@playwright/test'
import testdata from '../testdata.json';
// import { test,expect } from '../loginfixture.js'
import landingPage from '../pages/landingPage.js'

test('Home Lnading Page', async ({browser})=>{


    const context =await browser.newContext({storageState: "loginsessions.json"})
    const page =await context.newPage()
    await page.goto(testdata.homeurl)
    const homelandingpage =new landingPage(page)
    await expect(homelandingpage.homebtn).toBeVisible()

})

