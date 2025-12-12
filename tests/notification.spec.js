import {test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';
import notificationPage from '../pages/NotificationPage.js';
import notificationData from '../tests/notificationData.json';
import { fail } from 'assert';

test('Verify unique name in draft ', async ({ page }) => {
  const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const NotificationManagement = new notificationPage(page)
    await NotificationManagement.To_Create_Uniqe();
    
});
test('Verify Create Mobile Notification with Mobile Preview', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
   const NotificationManagement = new notificationPage(page)
   await NotificationManagement.CreateMobileNotification_Mobile_Preview()
 
})
test('Verify Create Mobile Notification with Save as Draft ', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const NotificationManagement = new notificationPage(page)
    await NotificationManagement.To_Create_Uniqe();
    
    await NotificationManagement.CreateMobileNotification_Save_as_Draft()
    await NotificationManagement.To_Create_Uniqe();



})
test('Verify Create Mobile Notification with publish ', async ({page})=>{
 
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const NotificationManagement = new notificationPage(page)
    await NotificationManagement.CreateMobileNotification_Publish()
})
test('Verify delete draft notification', async ({page})=>{
 
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()
    const NotificationManagement = new notificationPage(page)
    await NotificationManagement.To_Create_Uniqe();
    await NotificationManagement.To_Create_Uniqe1();
    await NotificationManagement.CreateMobileNotification_Save_as_Draft()
    await NotificationManagement.Notification_Management_Tab.click()
    await NotificationManagement.Drafts.click()
  if(await NotificationManagement.Drafts_text.isVisible()){
  await NotificationManagement.Delete_Draft_Notification()
}
    else
{
  await NotificationManagement.Notification_Management_Tab.click()
  
}  
   await NotificationManagement.Drafts.click()
   await NotificationManagement.Delete_Draft_Notification()
    

if (NotificationManagement.Draft_Noti_Campaign_Name !== notificationData.campaignName) {
    console.log("Validation Passed - Values are NOT equal");
    
} else {
    console.log("Validation Failed - Values are equal");
    fail();
}
  await NotificationManagement.To_Create_Uniqe();


})
test('Verify draft notification added', async ({page})=>{
 
   const loginuser = new LoginPage(page)
   await page.goto(testdata.URL)
   await loginuser.login()
   const NotificationManagement = new notificationPage(page)
   await NotificationManagement.CreateMobileNotification_Save_as_Draft()
   NotificationManagement.Delete_Draft_Notification;
})

test('Verify validate Upcoming screen', async ({page})=>{
 
  const loginuser = new LoginPage(page)
  await page.goto(testdata.URL)
  await loginuser.login()
  
  const NotificationManagement = new notificationPage(page)

  await NotificationManagement.To_Create_Uniqe();
  await NotificationManagement.To_Create_Uniqe1();
 


  await NotificationManagement.CreateMobileNotification_Publish()
  await NotificationManagement.Conform_Publish_Yes.click(); 
 
  await NotificationManagement.Notification_Management_Tab.click()
 
  await NotificationManagement.Upcoming.click();
  
  const UpcomingText = await NotificationManagement.Upcoming_Campaign_Name.textContent()
  expect(UpcomingText).toBe(notificationData.campaignName)  
  await NotificationManagement.Upcoming_Delete.click()
  await NotificationManagement.Upcoming_Delete_Conform_Yes.click();



});