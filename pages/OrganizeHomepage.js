import { expect } from '@playwright/test';
import testdata from '../testdata.json'
 
class Orghome{
 
    constructor(page){
 
        this.page = page;
        this.Org_tab = page.locator('//span[text()="Organize Homepage"]/parent::span');
        this.Org_text = page.locator("//h1[contains(text(),'Rearrange Sections')]")
        this.Org_Edit = page.locator("//button[contains(text(),'Edit')]")
        this.Org_Add = page.locator("//button[contains(text(),'Add New')]")
        this.Org_Section_Name = page.locator("//input[@placeholder='Enter Section Title']")
        this.Org_Discard = page.locator("//button[contains(text(),'Discard')]")
        this.Org_Save = page.locator("//button[contains(text(),'Save')]")
        this.Org_Edit_edi = page.locator("//button[contains(text(),'Edit')]")
        this.Org_element_one = page.locator("//h3[contains(text(),'sfds')]")
        this.Org_element_two = page.locator("//h3[contains(text(),'Magazine')]")
        this.Org_Publish = page.locator("//button[contains(text(),'Publish')]")
        this.Org_Publish_Yes = page.locator("//span[contains(text(),'Yes')]")
        this.Org_Validation = page.locator("//span[contains(text(),'Changes published successfully. The new arrangement is now live for end users.')]")
    }
 async Orgnize(){
      await this.Org_tab.click();
      await this.Org_Add.click();
      await this.Org_Section_Name.fill("sfds")
      await this.Org_Save.click(); 
 }
 async OrgnizeEdit(){
      await this.Org_tab.click();
      await this.Org_Edit.click();
      await this.Org_element_one.dragTo(this.Org_element_two);
      await expect(this.page.locator("//button[contains(text(),'Publish')]")).toBeEnabled();
      await this.Org_Publish.click();
      await this.Org_Publish_Yes.click();
 }
}
export default Orghome