import testdata from '../testdata.json'
import testdataNotification from '../tests/notificationData.json';
import notificationData from '../tests/notificationData.json';

class NotificationPage{

    constructor(page){

        this.page = page;
        this.Notification_Management_Tab = page.locator("//span[contains(text(),'Notification Management')]")
        this.Create_New = page.locator("//h4[contains(text(),'Create New')]")
        this.New_Campaign_Name = page.locator("//input[@id='campaignName']")
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
       this.New_Mobile_Preview_Campaign_Name = page.locator("//div[contains(text(),'${notificationData.campaignName}')]")
        this.New_Mobile_Preview_Description = page.locator("//div[contains(text(),'${notificationData.description}')]")
        

    }

    async CreateMobileNotification(){

        await this.Notification_Management_Tab.click()
        await this.Create_New.click()
        await this.New_Campaign_Name.fill(notificationData.campaignName)
        
        await this.New_Campaign_Duration_Start_Date.fill(notificationData.StartDateTime);
        await this.New_Campaign_Duration_End_Date.fill(notificationData.EndDateTime);

        await this.New_In_App_Notification.check()
        await this.New_Push_Notification.check()
        await this.New_Email_Notification.check()
      //  await expect(this.New_In_App_Notification).toBeChecked();
      //  await expect(this.New_Push_Notification).toBeChecked();
      //  await expect(this.New_Email_Notification).toBeChecked();
        await this.New_Title.fill(notificationData.title)
        await this.New_Subtitle.fill(notificationData.subTitle)
        await this.New_Description.fill(notificationData.description)
        await this.New_Mobile_Preview.click()
        await expect(this.New_Mobile_Preview_Campaign_Name).toHaveVisiable();
        await expect(this.New_Mobile_Preview_Description).toHaveVisiable();

    }
}

export default NotificationPage;