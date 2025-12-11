import {test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';



import RearrangeList from '../pages/RearrangeList.js';


test('Verify the functionality of Rearrange city', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
   const rearrangenewcity =new RearrangeList(page)
   await rearrangenewcity.rearrangeCity()
  await expect(rearrangenewcity.savebtndbtnvalidation).toBeVisible()

});

  
//await expect(rearrangeCities.savebtndbtnvalidation).toBeVisible();
   

  
    test('Verfiy the functionality of Rearrange POI functionality', async({page})=>{

    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const rearrangepoi = new RearrangeList(page)
    await rearrangepoi.RearrangePOI()
   //await expect(rearrangepoi.NoPOIvalidation).toBeVisible()


   })


    test('Verify the functionality of Rearrange Trip POI',async({page})=>{
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const RearrangeTripPOI = new RearrangeList(page)
    await RearrangeTripPOI.RearrangeTripPOI()
  

})

     test('Verify that mobile preview is availble in Reaarange city',async({page})=>{
        const loginuser = new LoginPage(page)
        await page.goto(testdata.URL)
        await loginuser.login()
        const mobilePreview = new RearrangeList(page)
        await mobilePreview.mobilePreview()
 })

     test('Verify the mobile preview is availbe in Rearrange Trip POI city', async({page})=>{

        const loginuser = new LoginPage(page)
        await page.goto(testdata.URL)
        await loginuser.login()
        const mobilePreviewTripPOI = new RearrangeList(page)
        await mobilePreviewTripPOI.mobilePreviewTripPOI()


     })

     test('Verify the Discard button in Rearrange City page', async({page})=>{

        const loginuser = new LoginPage(page)
        await page.goto(testdata.URL)
        await loginuser.login()
        const rearrangenewcity =new RearrangeList(page)
        await rearrangenewcity.DiscardRearrangeList()



     })