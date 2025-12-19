import {test, expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';
import testdatacontestsupport from '../testdatacontestsupport.json';
import Content from '../pages/publishcontentmanagement.js';

test('To click on Create New Contest, Publish and click Upcoming tab', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.clickcontentsupport()
    await content.contentpublish()
    await expect(content.value2).toEqual(content.value1)
      
    
    
        
})
test('To click on Draft tab and perform all the operations', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.clickcontentsupport()
    await content.contentdrafts()
    await expect(content.cards).toHaveCount(6)
    
        
})
test('To click on Active tab and perform all the operations', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.clickcontentsupport()
    await content.active()
      
        
})

test('To click on Past tab and perform all the operations', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.clickcontentsupport()
    await content.past()
      
        
})

test('To check error messgaes and button visibility on Create New Contest Page', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.assertions()
    await expect(content.blankname).toHaveText(testdatacontestsupport.blankname)
    await expect(content.blankdescription).toHaveText(testdatacontestsupport.blankdescription)
    await expect(content.blanknoofsubmission).toHaveText(testdatacontestsupport.blanknoofsubmission)
    await expect(content.blanktermsandconditions).toHaveText(testdatacontestsupport.blanktermsandconditions)
    await expect(content.mobilepreview).toBeVisible();
    await expect(content.saveasdraft).toBeVisible();
    await expect(content.publish).toBeVisible();
        
        
}
)

test('To verify text present on all the five tabs on Create and View Status For Contest Support', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.homeassertions()
    await expect(content.contesttextpresent).toHaveText(testdatacontestsupport.contesttextpresent)
    await expect(content.draftstextpresent).toContainText(testdatacontestsupport.draftstextpresent)
    await expect(content.activetextpresent).toContainText(testdatacontestsupport.activetextpresent)
    await expect(content.upcomingtextpresent).toContainText(testdatacontestsupport.upcomingtextpresent)
    await expect(content.pasttextpresent).toContainText(testdatacontestsupport.pasttextpresent)
        
        
})