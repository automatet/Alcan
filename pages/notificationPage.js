import { expect } from '@playwright/test';
import testdata from '../testdata.json'
import testdataNotification from '../tests/notificationData.json';
import notificationData from '../tests/notificationData.json';

class NotificationPage{

    constructor(page){

        this.page = page;
        this.Notification_Management_Tab = page.locator("//span[contains(text(),'Notification Management')]")
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
       this.New_Mobile_Preview_Campaign_Name = page.locator("//*[@id='root']/div/div/main/div[4]/div[1]/div/div[3]/div[1]/div[1]")
       this.New_Mobile_Preview_Description = page.locator("//*[@id='root']/div/div/main/div[4]/div[1]/div/div[3]/div[2]/div")
        
        this.Drafts = page.locator("//h4[contains(text(),'Drafts')]")
        this.Drafts_text= page.locator("//*[@id='root']/div/div/main/div/div[1]/div[1]/div/div[2]/div[1]/div[1]/h5")
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
       // this.Draft_Delete = page.locator("//h5[contains(text(),${notificationData.campaignName})]/ancestor::div[2]/div[2]/button[2]")
        this.Draft_Delete = page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]/ancestor::div[2]/div[2]/button[2]`)
        this.Draft_View = page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]/ancestor::div[2]/div[2]/button[3]`)
        this.Draft_Delete_Conform_Yes = page.locator("//span[contains(text(),'Yes')]")
        this.Draft_Noti_Campaign_Name = page.locator("//div[@class='ant-card-body']/div/div/h5")
        
        this.Conform_Publish_Yes=page.locator("//button[1]/span[contains(text(),'Yes')]")
        this.Upcoming= page.locator("//h4[contains(text(),'Upcoming')]")
        this.Upcoming_Campaign_Name = page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]/ancestor::div[2]/div[1]`)
        this.Upcoming_Delete = page.locator(`//h5[contains(text(),"${notificationData.campaignName}")]/ancestor::div[2]/div[2]/button[2]`)
        this.upcoming_Delete_Conform_Yes = page.locator("//span[contains(text(),'Yes')]")


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
      //  await this.Conform_Publish_Yes()
      
    }
     async Delete_Draft_Notification(){

      const draftText = await NotificationManagement.Drafts_text.textContent()
      expect(draftText).toBe(notificationData.campaignName)    
      await NotificationManagement.Draft_Delete.click()
      await NotificationManagement.Draft_Delete_Conform_Yes.click()
    }

}

export default NotificationPage;