import { expect } from '@playwright/test';
import notificationData from '../notificationData.json';

class NotificationPage{

    constructor(page){

        this.page = page;
        this.Home = page.locator("//span[contains(text(),'Homepage')]")
        this.Notification_Management_Tab = page.locator("//span[contains(text(),'Notification Management')]")
        this.Mobile_notification = page.locator("//div[contains(text(),'Mobile Notifications')]")
        this.Create_New = page.locator("//h4[contains(text(),'Create New')]")
        this.New_Campaign_Name = page.locator("//input[@id='campaignName']")
        this.New_email_Text = page.locator("//*[@id='emailText']")
        this.New_email_Subject = page.locator("//*[@id='emailSubject']")        
        this.New_Campaign_Duration_Start_Date = page.locator("//input[@id='startDate']")
        this.New_Campaign_Duration_End_Date = page.locator("//input[@id='endDate']")
        this.New_In_App_Notification = page.locator("//input[@value='inApp']")
        this.New_Push_Notification = page.locator("//input[@value='push']")
        this.New_Email_Notification = page.locator("//input[@value='email']")
        this.New_Title = page.locator("//input[@id='title']")
        this.New_Subtitle = page.locator("//input[@id='subtitle']")
        this.New_Description = page.locator("//p[@data-placeholder='Enter notification description']")
        this.New_Mobile_Preview = page.locator("//span[contains(text(),'Mobile Preview')]")
        this.New_Save_as_Draft = page.locator("//span[contains(text(),'Save as Draft')]")
        this.New_Publish = page.locator("//span[contains(text(),'Publish')]")
        this.New_Mobile_Preview_Campaign_Name = page.locator(`//div[contains(text(),"${notificationData.campaignName}")]`)
        this.New_Mobile_Preview_Description = page.locator(`//div[@class='description-preview']/p[contains(text(),"${notificationData.description}")]`)
        
        this.Drafts = page.locator("//h4[contains(text(),'Drafts')]")
        this.Drafts_text= page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]`)
        this.Drafts_text_edit= page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]/ancestor::div[2]/div[2]/button[1]`)
        this.Drafts_Campaign_Name = page.locator("//input[@id='campaignName']")
        this.Drafts_Campaign_Duration_Start_Date = page.locator("//input[@id='startDate']")
        this.Drafts_Campaign_Duration_End_Date = page.locator("//input[@id='endDate']")
        this.Drafts_Notification_Type = page.locator("//span[text()='Notification Type']")
        this.Drafts_In_App_Notification = page.locator("//input[@value='inApp']")
        this.Drafts_Push_Notification = page.locator("//input[@value='push']")
        this.Drafts_Email_Notification = page.locator("//input[@value='email']")
        this.Drafts_Title = page.locator("//input[@id='title']")
        this.Drafts_Subtitle = page.locator("//input[@id='subtitle']")
        this.Drafts_Subject_Line = page.locator("")
        this.Drafts_Email_Text = page.locator("//*[@id='emailText']")
        this.Drafts_Description = page.locator("//p[@data-placeholder='Enter notification description']")
        this.Draft_Notification = page.locator("")
        this.Draft_Mobile_Preview = page.locator("//span[contains(text(),'Mobile Preview')]")
        this.Draft_Save_as_Draft = page.locator("//span[contains(text(),'Save as Draft')]")
        this.Draft_Publish = page.locator("//span[contains(text(),'Publish')]")
        this.Draft_Delete = page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]/ancestor::div[2]/div[2]/button[2]`)
        this.Draft_View = page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]/ancestor::div[2]/div[2]/button[3]`)
        this.Draft_Delete_Conform_Yes = page.locator("//span[contains(text(),'Yes')]")
        this.Draft_Noti_Campaign_Name = page.locator("//div[@class='ant-card-body']/div/div/h5")
        
       
        this.Conform_Publish_Yes=page.getByRole('dialog').getByRole('button', { name: 'Yes' })
        this.Upcoming= page.locator("//h4[contains(text(),'Upcoming')]")
        this.Upcoming_text= page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]`)
        this.Upcoming_Campaign_Name = page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]/ancestor::div[2]/div[1]`)
        this.Upcoming_Delete = page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]/ancestor::div[2]/div[2]/button[2]`)
        this.Upcoming_Delete_Conform_Yes = page.locator("//span[contains(text(),'Yes')]")


    }

    async CreateMobileNotification_Mobile_Preview(){

        await this.Notification_Management_Tab.click()
        await this.Create_New.click()
        await this.New_Campaign_Name.fill(notificationData.campaignName)
   
        await this.New_Campaign_Duration_Start_Date.fill(notificationData.StartDateTime);
        await this.New_Campaign_Duration_End_Date.fill(notificationData.EndDateTime);
        await this.New_In_App_Notification.check()
        await this.New_Push_Notification.check()
        await this.New_Email_Notification.check()
        await this.New_email_Text.fill(notificationData.emailText)
        await this.New_email_Subject.fill(notificationData.emailSubject)
        await this.New_Title.fill(notificationData.title)
        await this.New_Subtitle.fill(notificationData.subTitle)
        await this.New_Description.fill(notificationData.description)
        await this.New_Mobile_Preview.click()
        
        const previewCampaignName = await this.New_Mobile_Preview_Campaign_Name.innerText();
        console.log("Preview Campaign Name: "+previewCampaignName);
        await expect(previewCampaignName).toBe(notificationData.campaignName);
       
        const previewDescription = await this.New_Mobile_Preview_Description.innerText();
        console.log("Preview Description: "+previewDescription);
        await expect(previewDescription).toBe(notificationData.description);
       
        await expect(this.New_In_App_Notification).toBeChecked();
        await expect(this.New_Push_Notification).toBeChecked();
        await expect(this.New_Email_Notification).toBeChecked();
       
       
    }


 async CreateMobileNotification_Save_as_Draft(){

        await this.Notification_Management_Tab.click()
        await this.Create_New.click()
        await this.New_Campaign_Name.fill(notificationData.campaignName)      
        await this.New_Campaign_Duration_Start_Date.fill(notificationData.StartDateTime);
        await this.New_Campaign_Duration_End_Date.fill(notificationData.EndDateTime);

        await this.New_In_App_Notification.check()
        await this.New_Push_Notification.check()
        await this.New_Email_Notification.check()
        await this.New_email_Text.fill(notificationData.emailText)
        await this.New_email_Subject.fill(notificationData.emailSubject)
        
        await this.New_Title.fill(notificationData.title)
        await this.New_Subtitle.fill(notificationData.subTitle)
        await this.New_Description.fill(notificationData.description)       
        await expect(this.New_In_App_Notification).toBeChecked();
        await expect(this.New_Push_Notification).toBeChecked();
        await expect(this.New_Email_Notification).toBeChecked();
        await this.New_Save_as_Draft.click();

      
    }
    async CreateMobileNotification_Publish(){

        await this.Notification_Management_Tab.click()
        await this.Create_New.click()
        await this.New_Campaign_Name.fill(notificationData.campaignName)      
        await this.New_Campaign_Duration_Start_Date.fill(notificationData.StartDateTime);
        await this.New_Campaign_Duration_End_Date.fill(notificationData.EndDateTime);

        await this.New_In_App_Notification.check()
        await this.New_Push_Notification.check()
        await this.New_Email_Notification.check()
        await this.New_email_Text.fill(notificationData.emailText)
        await this.New_email_Subject.fill(notificationData.emailSubject)
        
        await this.New_Title.fill(notificationData.title)
        await this.New_Subtitle.fill(notificationData.subTitle)
        await this.New_Description.fill(notificationData.description)       
        await expect(this.New_In_App_Notification).toBeChecked();
        await expect(this.New_Push_Notification).toBeChecked();
        await expect(this.New_Email_Notification).toBeChecked();
        await this.New_Publish.click();
        await this.Conform_Publish_Yes.click();
      
    }
     
     async Delete_Draft_Notification(){

      const draftText = await this.Drafts_text.textContent()
      expect(draftText).toBe(notificationData.campaignName)    
      await this.Draft_Delete.click()
      await this.Draft_Delete_Conform_Yes.click()
    }
 async To_Create_Uniqe(){

   await this.Notification_Management_Tab.click()
   await this.Drafts.click()
   //await this.page.waitForTimeout(5000);

if(await this.Drafts_text.isVisible()){
   await this.Delete_Draft_Notification()
}
    else
{
   await this.Notification_Management_Tab.click()
  
}  
    }


async To_Create_Uniqe1(){

await this.Notification_Management_Tab.click()
await this.Upcoming.click()

   
if(await this.Upcoming_text.isVisible()){
   const UpcomingText = await this.Upcoming_text.textContent()
      expect(UpcomingText).toBe(notificationData.campaignName)    
      await this.Upcoming_Delete.click()
      await this.Upcoming_Delete_Conform_Yes.click()
      await this.Notification_Management_Tab.click()

}
    else
{
   await this.Notification_Management_Tab.click()
  
}  
    }
    async CreateMobileNotification_Publish_Random(){

        await this.Notification_Management_Tab.click()
        await this.Create_New.click()
        const random = Math.floor(Math.random() * 1000);
        await this.New_Campaign_Name.fill(notificationData.campaignName+random)      
        await this.New_Campaign_Duration_Start_Date.fill(notificationData.StartDateTime);
        await this.New_Campaign_Duration_End_Date.fill(notificationData.EndDateTime);

        await this.New_In_App_Notification.check()
        await this.New_Push_Notification.check()
        await this.New_Email_Notification.check()
        await this.New_email_Text.fill(notificationData.emailText)
        await this.New_email_Subject.fill(notificationData.emailSubject)
        
        await this.New_Title.fill(notificationData.title)
        await this.New_Subtitle.fill(notificationData.subTitle)
        await this.New_Description.fill(notificationData.description)       
        await expect(this.New_In_App_Notification).toBeChecked();
        await expect(this.New_Push_Notification).toBeChecked();
        await expect(this.New_Email_Notification).toBeChecked();
        await this.New_Publish.click();
        await this.Conform_Publish_Yes.click();
      
    }

}


export default NotificationPage;