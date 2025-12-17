import {test, expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';
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
    await expect(content.blankname).toHaveText('Please enter contest name!')
    await expect(content.blankdescription).toHaveText('Please enter contest description!')
    await expect(content.blanknoofsubmission).toHaveText('Please enter number of submission!')
    await expect(content.blanktermsandconditions).toHaveText('Please enter terms!')
    await expect(content.mobilepreview).toBeVisible();
    await expect(content.saveasdraft).toBeVisible();
    await expect(content.publish).toBeVisible();
    console.log("Test passed")
      
        
}
)

test('To verify text present on all the five tabs on Create and View Status For Contest Support', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.homeassertions()
    await expect(content.contesttextpresent).toHaveText('Start a new contest')
    await expect(content.draftstextpresent).toContainText('Total Drafts')
    await expect(content.activetextpresent).toContainText('Total Active')
    await expect(content.upcomingtextpresent).toContainText('Total Upcoming')
    await expect(content.pasttextpresent).toContainText('Total Past')
    console.log("Test passed")
      
        
})