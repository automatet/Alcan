import {test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import testdata from '../testdata.json';
import notificationPage from '../pages/NotificationPage.js';
import notificationData from '../tests/notificationData.json';

test('verify Notification Management', async ({page})=>{

    
  const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)

    await loginuser.login()

   const NotificationManagement = new notificationPage(page)
   await NotificationManagement.CreateMobileNotification()
  
        
  



   



})