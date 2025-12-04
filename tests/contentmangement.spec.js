import {test, expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';
import Content from '../pages/publishcontentmanagement.js';


test.only('Publish New Contest', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.clickcontentsupport()
    await content.contentpublish()
    
    
        
})
test('Draft New Contest', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.clickcontentsupport()
    await content.contentdrafts()
    
    
        
})
test('Active Tab', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.clickcontentsupport()
    await content.active()
      
        
})

test('Past Tab', async ({page})=>{
  
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const content = new Content(page)
    await content.clickcontentsupport()
    await content.past()
      
        
})