import testdata from '../testdatacontestsupport.json'
 
class Content{

constructor(page){

this.page = page;
this.contentsupport = page.locator("//span[text()='Contest Support']/parent::span");
this.createnewcontest = page.locator("//h4[contains(text(), 'Create New')]");
this.drafts = page.locator("//h4[contains(text(), 'Drafts')]");
this.activetab = page.locator("//h4[contains(text(), 'Active')]");
this.upcoming = page.locator("//h4[contains(text(), 'Upcoming')]");
this.pastcontesttab = page.locator("//h4[contains(text(), 'Past Contest')]");
this.contestname = page.locator("//input[@placeholder='Enter contest name']");
this.contestduration = page.locator("//span[@class='ant-picker-suffix']");
this.startdate = page.locator("//input[@placeholder='Start date']");
this.enddate = page.locator("//input[@placeholder='End date']")
this.submission = page.locator("//input[@placeholder='Enter number of submissions']");
this.description = page.locator("//p[@data-placeholder='Enter contest description']");
this.termsandcondition = page.locator("//*[@placeholder='Enter contest terms & conditions']");
this.mobilepreview = page.locator("//span[text()='Mobile Preview']/parent::button");
this.saveasdraft = page.locator("//span[text()='Save as Draft']/parent::button");
this.publish = page.locator("//span[text()='Publish']/parent::button");
this.upcomingbtn = page.locator("//h4[text()='Upcoming']/parent::div")
this.drafts = page.locator("//h4[text()='Drafts']/parent::div")
this.contestadded = page.locator("//h5[text()='testeduser']")
this.deleteButtons = page.locator("//span[@class='anticon anticon-delete']/ancestor::span").first()
this.confirmdelete = page.locator("//span[text()='Yes']/parent::button")
this.view = page.locator("//span[@class='anticon anticon-eye']/ancestor::span").first()
this.viewedit = page.locator("//span[@aria-label='edit']/ancestor::span")
this.updatecontent = page.locator("//span[text()='Update Contest']/parent::button")
this.backtopastcontent = page.locator("//span[@class='anticon anticon-arrow-left']")
 }


async clickcontentsupport(){
await this.contentsupport.click();

}
async createnew(){
await this.createnewcontest.click()
const contestname =`${testdata.ContestName}${Date.now()}`
await this.contestname.fill(contestname)
await this.submission.fill("1")
await this.startdate.fill("12/22/2025")
await this.enddate.fill("12/27/2025")
await this.description.fill("Description")
await this.termsandcondition.fill("term&conditions")             
                           


}

async contentpublish(){
await this.createnew()
await this.publish.click()
await this.upcomingbtn.click()
await this.view.click()
await this.viewedit.click()
await this.description.fill("Descriptionupdate")
await this.updatecontent.click()
await this.deleteButtons.click()
await this.confirmdelete.click()
}

async contentdrafts(){
await this.createnew()
await this.saveasdraft.click()
await this.drafts.click()
await this.view.click()
await this.viewedit.click()
await this.description.fill("Description45update1")
await this.updatecontent.click()
await this.deleteButtons.click()
await this.confirmdelete.click()
}


async active(){
await this.contentsupport.click()
await this.activetab.click()
await this.view.click()
await this.viewedit.click()
await this.description.fill("Description45update1")
await this.updatecontent.click()
await this.deleteButtons.click()
await this.confirmdelete.click()
}

async past(){
await this.contentsupport.click()
await this.pastcontesttab.click()
await this.view.click()
await this.backtopastcontent.click()
await this.deleteButtons.click()
await this.confirmdelete.click()
}

}
export default Content