import testdata from '../testdata.json'
 
class faqpage{
 
    constructor(page){
 
        this.page = page;
        this.FAQs_tab = page.locator("//span[contains(text(),'FAQs')]")
        this.FAQs_exisiting_tab =page.locator("//span[contains(text(),'List of Existing FAQs')]")
        this.FAQs_ext_header=page.locator("//h4[contains(text(),'Existing FAQ')]")
       this.FAQs_ext_view=page.locator("//*[contains(text(), 'View')]")
     this.FAQs_ext_view_backbtn=page.locator('//*[@data-icon="arrow-left"]')
        this.FAQs_ext_edit=page.locator("//span[contains(text(),'Edit')]")
        this.FAQs_ext_Text_question=page.locator("//input[@placeholder='Enter question']")
        this.FAQs_ext_submit=page.locator("//span[contains(text(),'Submit')]")
        this.FQAs_ext_yes=page.locator("//span[contains(text(),'Yes')]")
 
       
    }
   

 
      async faqextpage(){
       await  this.FAQs_tab.click();
       await this.FAQs_exisiting_tab.click()
      await this.FAQs_ext_view.click()
       await this.FAQs_ext_view_backbtn.click()
       await this.page.pause()
       await this.FAQs_ext_edit.click()
 
       await this.FAQs_ext_Text_question.fill('test abc')
       await this.FAQs_ext_submit.click()
       await this.FQAs_ext_yes.click()
 
      
 
 
      }
    }
     
 
   
 
 
export default faqpage;