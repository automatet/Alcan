import { expect } from '@playwright/test';
import testdata from '../testdata.json'

class faqsedit{
 
    constructor(page){
 
        this.page = page;
        this.FAQs_tab = page.locator('//span[text()="FAQs"]/parent::span');
        this.FAQs_ext = page.locator("//span[contains(text(),'List of Existing FAQs')]")
        this.FAQs_ext_header=page.locator("//h4[contains(text(),'Existing FAQ')]")
        //this.FAQs_View=page.locator("//span[contains(text(),'View')]")
        this.FAQs_View=page.locator("//div[@class='ant-layout css-ac2jek']//div//div[1]//div[1]//div[1]//div[1]//div[2]//div[1]//div[2]//button[1]//span[2]")
        this.FAQs_View_Edit=page.locator("//span[contains(text(),'Edit')]")
        this.FAQs_Edit_question=page.locator("//input[@placeholder='Enter question']")
        this.FAQs_Edit_Validation=page.getByText("//div[contains(text(),'Please enter question')]")
        this.FAQs_Edit_Ans_Valid=page.getByText("//div[contains(text(),'Please enter answer')]")
        this.FAQs_Edit_answer=page.locator("//p[@data-placeholder='Enter answer']")
        this.FAQs_Edit_Submit=page.locator("//span[contains(text(),'Submit')]")
        this.FAQs_Edit_Yes=page.locator("//span[contains(text(),'Yes')]")
        this.FAQs_Edit_Ext_tile=page.locator("//h4[contains(text(),'Existing FAQs')]")
        this.FAQs_Valid = page.locator("//span[contains(text(),'FAQ updated successfully!')]")
    }
 async editfaq(){
      await this.FAQs_tab.click();
      await this.FAQs_Edit_Ext_tile.click();
      await this.FAQs_View.click();
      await this.FAQs_View_Edit.click();
      await this.FAQs_Edit_question.fill("");
      await this.FAQs_Edit_answer.fill(" ");
      await this.FAQs_Edit_Submit.click();

 }
     async faqspageedit(){
      await this.FAQs_Edit_question.fill("Add text")
      await this.FAQs_Edit_answer.fill("testing data");
      await this.FAQs_Edit_Submit.click();
      await this.FAQs_Edit_Yes.click();
 }
}
export default faqsedit;