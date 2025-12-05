import testdata from '../testdata.json'
 
class faqspage{
 
    constructor(page){
 
        this.page = page;
        this.FAQs_tab = page.locator("//span[contains(text(),'FAQs')]")
        this.Create_tab=page.locator("//h4[contains(text(),'Create')]")
        this.FAQs_Screen_Header=page.locator("/*[contains(text(),'Create FAQ')]")
        this.FAQs_Question_text=page.locator("//input[@placeholder='Enter question']")
        this.FAQs_Answer_text=page.locator("//p[@data-placeholder='Enter answer']")
        this.FAQs_Submit=page.locator("//span[contains(text(),'Submit')]")
        this.FAQs_Submit_Yes=page.locator("//span[contains(text(),'Yes')]")
        this.FAQs_Mobile_preview=page.locator("//span[contains(text(),'Mobile Preview')]")
        this.FAQs_Mobile_close=page.locator("//span[contains(text(),'Close Preview')]")
        //this.FAQs_exisiting_tab =page.locator("//span[contains(text(),'List of Existing FAQs')]")
        //this.FAQs_ext_header=page.locator("//h4[contains(text(),'Existing FAQ')]")
       //this.FAQs_ext_view=page.locator("//*[contains(text(), 'View')]")
     //this.FAQs_ext_view_backbtn=page.locator('//*[@data-icon="arrow-left"]')
        //this.FAQs_ext_edit=page.locator("//span[contains(text(),'Edit')]")
        //this.FAQs_ext_Text_question=page.locator("//input[@placeholder='Enter question']")
        //this.FAQs_ext_submit=page.locator("//span[contains(text(),'Submit')]")
        //this.FQAs_ext_yes=page.locator("//span[contains(text(),'Yes')]")
        //this.FAQs_Discard=page.locator("//span[contains(text(),'Discard')]")
 
       
    }
 
    async faqspageopen(){
      await  this.FAQs_tab.click();
      await this.Create_tab.click();
      await this.FAQs_Question_text.fill('check code')
      await this.FAQs_Answer_text.fill('checking code')
      await this.FAQs_Submit.click()
      await this.FAQs_Submit_Yes.click()
      await this.FAQs_Mobile_preview.click()
      await this.FAQs_Mobile_close.click()
      //await this.FAQs_Discard.click()
 
   
 }
 //async faqextpage(){
   //    await  this.FAQs_tab.click();
     //  await this.FAQs_exisiting_tab.click()
      //await this.FAQs_ext_view.click()
       //await this.FAQs_ext_view_backbtn.click()
       //await this.page.pause()
       //await this.FAQs_ext_edit.click()
 
       //await this.FAQs_ext_Text_question.fill('test abc')
       //await this.FAQs_ext_submit.click()
       //await this.FQAs_ext_yes.click()
 //}
}
export default faqspage;