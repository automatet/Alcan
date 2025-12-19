import Rearrangedata from '../Rearrangedata.json'

class RearrangeList{
    constructor(page){
 
          // ************ REARRANGE CITY*******
        this.page = page;
        this.Rearrange_tab = page.locator("//span[contains(text(),'Rearrange Lists')]")
        this.Rearrange_Cities = page.locator("//span[contains(text(),'Rearrange Cities')]")
        this.selectregion = page.locator("//span[@title='Select a region']")
        this.regionOption = (value) =>page.locator(".ant-select-item-option-content", { hasText: value });
        this.image = page.locator("//div[@class='ant-card-body']/img")
        this.editbtn = page.locator("//span[text()='Edit']/ancestor::div/button")
        this.dragcity = page.locator("//div[text()='Kharadi']")
        this.dragtocity = page.locator("//div[text()='Baner']")
        this.donebtn = page.locator("//span[text()='Done']/ancestor::div/button")
        this.savebtn = page.locator("//span[normalize-space()='Save']")
        this.yessbtn = page.locator("//div[2]//div[1]//div[1]//div[1]//div[1]//div[1]//button[1]")
        this.savebtndbtnvalidation = page.locator("//span[contains(text(),'Cities rearranged successfully')]")
        this.mobile_preview = page.locator("//span[normalize-space()='Mobile Preview']")
        this.mobile_close = page.locator("//span[normalize-space()='Close Preview']")
        this.discard = page.locator("//span[normalize-space()='Discard']")
        this.discardyes = page.locator("//span[normalize-space()='Yes']")
        this.discardbtnvalidation = page.locator("//span[normalize-space()='Changes discarded.']")
        this.discardbtn = page.locator("//span[normalize-space()='Discard']")
        this.discardbtncancel = page.locator("//span[normalize-space()='Cancel']")
 
        //**************REARRANGE POI ********/
 
        this.Rearrange_tab = page.locator("//span[contains(text(),'Rearrange Lists')]")
        this.Rearrange_POI = page.locator("//span[contains(text(),'Rearrange Points of Interest')]")
        this.selectPOIregion = page.locator("//span[@title='Select a region']")
        this.rearrangeRegionPOI = (value) =>page.locator(".ant-select-item-option-content", { hasText: value });
        this.image = page.locator("//div[@class='ant-card-body']/img")
        this.selectCity = page.locator("//span[@title='Select a city']")
        this.citySelect = (value) =>page.locator(".ant-select-item-option-content", { hasText: value });
        this.image = page.locator("//div[@class='ant-card-body']/img")
        this.NoPOIvalidation = page.locator("//span[normalize-space()='No POIs found for the selected city.']")
       //****************REARRANGE TRIP POI*****/
        this.Rearrange_tab = page.locator("//span[contains(text(),'Rearrange Lists')]")
        this.Rearrange_TripPOI = page.locator("//span[contains(text(),'Rearrange Trip POIs')]")
        this.selectTripPOI = page.locator("//span[contains(text(),'Select Direction')]")
        this.Direction = (value) =>page.locator(".ant-select-item-option-content", { hasText: value });
        this.image = page.locator("//div[@class='ant-card-body']/img")
        this.selectTrip = page.locator("//span[@title='Select a trip']")
        this.Trip = (value) => page.locator(".ant-select-item-option-content", { hasText: value });
        this.image = page.locator("//div[@class='ant-card-body']/img")
        this.selectRoute = page.locator("//span[@title='Select a route']")
        this.Route = (value) =>page.locator(".ant-select-item-option-content", { hasText: value });
        this.image = page.locator("//div[@class='ant-card-body']/img")
        this.mobile_previewTrip = page.locator("//span[normalize-space()='Mobile Preview']")
        this.mobile_closeTrip = page.locator("//span[normalize-space()='Close Preview']")
 
    }
       async rearrangeCity()
       {
         await this.Rearrange_tab.click()
         await this.Rearrange_Cities.click()
         await this.selectregion.click()
         await this.regionOption(Rearrangedata.Region).waitFor({ Region: 'visible' });
         await this.regionOption(Rearrangedata.Region).click();
         await this.editbtn.click()
         await this.dragcity.dragTo(this.dragtocity)
         await this.page.waitForTimeout(4000);
         await this.donebtn.click()
         await this.page.waitForTimeout(4000);
         await this.savebtn.click()
         await this.yessbtn.click()
         
       }
          async RearrangePOI()
         {
            await this.Rearrange_tab.click()
            await this.Rearrange_POI.click()
            await this.selectPOIregion.click()
            await this.rearrangeRegionPOI(Rearrangedata.RegionPOI).waitFor({RegionPOI: 'visible'});
            await this.rearrangeRegionPOI(Rearrangedata.RegionPOI).click()
            await this.selectCity.click();
            await this.citySelect(Rearrangedata.CityPOI).waitFor({CityPOI: 'visible'});
            await this.citySelect(Rearrangedata.CityPOI).click() 
           }
 
        async RearrangeTripPOI()
       {
           await this.Rearrange_tab.click()
           await this.Rearrange_TripPOI.click()
           await this.selectTripPOI.click()
           await this.Direction(Rearrangedata.Direction).waitFor({Direction: 'visible'});
           await this.Direction(Rearrangedata.Direction).click()
           await this.selectTrip.click()
           await this.Trip(Rearrangedata.Trip).waitFor({Trip: 'visible'});
           await this.Trip(Rearrangedata.Trip).click()
           await this.selectRoute.click()
           await this.Route(Rearrangedata.Route).waitFor({Route: 'visible'});
           await this.Route(Rearrangedata.Route).click()
 
        }

        async mobilePreview()
        {
         await this.Rearrange_tab.click()
         await this.Rearrange_Cities.click()
         await this.selectregion.click()
         await this.regionOption(Rearrangedata.Region).waitFor({ Region: 'visible' });
         await this.regionOption(Rearrangedata.Region).click();
         await this.mobile_preview.click()
        await this.mobile_close.click()
        }

        async mobilePreviewTripPOI()
        {

          await this.Rearrange_tab.click()
           await this.Rearrange_TripPOI.click()
           await this.selectTripPOI.click()
           await this.Direction(Rearrangedata.Direction).waitFor({Direction: 'visible'});
           await this.Direction(Rearrangedata.Direction).click()
           await this.selectTrip.click()
           await this.Trip(Rearrangedata.Trip).waitFor({Trip: 'visible'});
           await this.Trip(Rearrangedata.Trip).click()
           await this.selectRoute.click()
           await this.Route(Rearrangedata.Route).waitFor({Route: 'visible'});
           await this.Route(Rearrangedata.Route).click()
           await this.mobile_previewTrip.click()
           await this.mobile_closeTrip.click()

         }

         async DiscardRearrangeList()
         {

         await this.Rearrange_tab.click()
         await this.Rearrange_Cities.click()
         await this.selectregion.click()
         await this.regionOption(Rearrangedata.Region).waitFor({ Region: 'visible' });
         await this.regionOption(Rearrangedata.Region).click();
         await this.editbtn.click()
         await this.dragcity.dragTo(this.dragtocity)
         await this.page.waitForTimeout(4000);
         await this.donebtn.click()
         await this.page.waitForTimeout(4000);
         await this.discard.click()
         await this.discardyes.click()

         }

}
 
export default RearrangeList;