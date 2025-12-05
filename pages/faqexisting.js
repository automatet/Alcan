import testdata from '../testdata.json'
 
class faqpage{
 
    constructor(page){
 
        this.page = page;
        this.FAQs_tab = page.locator("//span[contains(text(),'FAQs')]")
       // this.Create_tab=page.locator("//h4[contains(text(),'Create')]")
        //this.FAQs_Screen_Header=page.locator("/*[contains(text(),'Create FAQ')]")
        //this.FAQs_Question_text=page.locator("//input[@placeholder='Enter question']")
        //this.FAQs_Answer_text=page.locator("//p[@data-placeholder='Enter answer']")
        //this.FAQs_Submit=page.locator("//span[contains(text(),'Submit')]")
        //this.FAQs_Submit_Yes=page.locator("//span[contains(text(),'Yes')]")
        this.FAQs_exisiting_tab =page.locator("//span[contains(text(),'List of Existing FAQs')]")
        this.FAQs_ext_header=page.locator("//h4[contains(text(),'Existing FAQ')]")
        this.FAQs_ext_edit=page.locator("//span[contains(text(),'Edit')]")
        this.FAQs_ext_Text_question=page.locator("//input[@placeholder='Enter question']")
        this.FAQs_ext_Submit=page.locator("//span[contains(text(),'Submit')]")
        this.FQAs_ext_yes=page.locator("//span[contains(text(),'Yes')]")
        this.FAQs_ext_delete=page.locator("//span[contains(text(),'Delete')]")
        this.FAQs_ext_delete_yes=page.locator("//span[contains(text(),'Yes')]")
        this.FAQs_ext_view=page.locator("//span[contains(text(),'View')]")
       // this.FAQs_ext_view_backbtn.locator("span.anticon.anticon-arrow-left")
 
       
    }
      async faqextpage(){
       await  this.FAQs_tab.click();
       await this.FAQs_exisiting_tab.click()
       await this.FAQs_ext_edit.click()
       await this.FAQs_ext_Text_question.fill('edit code')
       await this.FAQs_ext_Submit.click()
       await this.FQAs_ext_yes.click()
       await this.FAQs_ext_delete.click()
       await this.FAQs_ext_delete_yes.click()
       await this.FAQs_ext_view.click()
      // await this.FAQs_ext_view_backbtn.click()
 
 
      }
    }
     
 
   
 
 
export default faqpage;