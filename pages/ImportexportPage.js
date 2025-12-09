import data from '../testdata.json'
import { expect } from '@playwright/test';


class ImportexportPage{

    constructor(page){
        
        this.page = page
        this.ImportexportTab = page.locator('//span[text()="Data Import Export"]/parent::span');

        //exportlocators
        this.exportbutton = page.locator('//h4[contains(@class,"overlay-title") and normalize-space()="Export"]');

        //exportcitylocators
        this.exportcitybutton = page.locator('//button[normalize-space()="Export City"]');
        this.regiondropdown = page.locator('//select[@id ="region-select"]');
        this.downloadexcelbutton = page.locator('//span[text()= "Download Excel"]');
        this.downloadcancelbutton = page.locator('//button[text()= "Cancel"]');
        this.downloadconfirmbutton = page.locator('//button[text()= "Download"]');
        this.verifyexportcitysuccess = page.locator('//div[contains(text(),"Downloaded successfully")]');

        //exportpoilocators
        this.exportpoibutton = page.locator('//button[text() ="Export POI"]');
        this.citydropdown = page.locator('//select[@id = "city-select"]');

        //exporttrippoilocators
        this.exporttrippoibutton = page.locator('//button[text() =  "Export Trip POI"]');
        this.selectdirectiondropdown = page.locator('//select[@id = "direction-select"]');
        this.selectdirectiondropdownvalueNW = page.locator('//option[@value = "0"]');
        this.selectdirectiondropdownvalueSE = page.locator('//option[@value = "1"]');
        this.selecttripdropdown = page.locator('//select[@id="trip-select"]');
        this.selecttripdropdownvalue = page.locator('//option[@value="08de2c14-4338-48fe-89c9-b86a5fa65e4e"]');
        this.exportbackarrow = page.locator('//div[text() ="← Export"]');

        //importlocators
        this.importbutton = page.locator('//h4[@class = "ant-typography overlay-title css-ac2jek" and text() = "Import"]');

        //importcitylocators
        this.importcitybutton = page.locator('//button[text() = "Import City"]');
        this.uploadexcelbutton = page.locator('//span[text() = "Upload Excel"]');
        this.fileinput = page.locator('//input[@id = "fileInput"]');
        this.exportbackupconfirmbutton = page.locator('//button[@class = "export-button" and text() = "Export Now"]');
        this.exportbackupcancelbutton = page.locator('//button[@class = "export-cancel" and text() = "Cancel"]');
        this.uploadconfirmbutton = page.locator('//button[text() = "Upload"]');
        this.uploadcancelbutton = page.locator('//button[text() = "Cancel"]');
        this.overwritebutton = page.locator('//h3[text() = "Overwrite"]');
        this.appendbutton = page.locator('//h3[text() = "Append"]');
        this.confrimbutton = page.locator('//button[text() = "Confirm"]');

        //importpoilocators
        this.importpoibutton = page.locator('//button[text() = "Import POI"]');

        //importtrippoilocators
        this.importtrippoibutton = page.locator('//button[text() = "Import Trip POI"]');


    
    }




    async export(){

        //exportcity
        await this.ImportexportTab.click();
        await this.exportbutton.click();
        await this.exportcitybutton.click();
        await this.regiondropdown.selectOption("India");
        const fileexport = await this.downloadexcelbutton.click();
        await this.downloadconfirmbutton.click();
             
        //exportpoi
        await this.exportpoibutton.click();
        await this.regiondropdown.selectOption("India");
        await this.citydropdown.selectOption("Pune");
        await fileexport;

        //exporttrippoi
        await this.exporttrippoibutton.click();
        await this.selectdirectiondropdown.selectOption("Northwest");
        await this.selecttripdropdown.selectOption("India trip");
        await fileexport;
        
    
    }

    async import(){

       //importcityoverwrite
        await this.ImportexportTab.click();
        await this.importbutton.click();
        await this.importcitybutton.click();
        await this.regiondropdown.selectOption("India");
        await this.fileinput.setInputFiles("C:/Users/abhishek.hiremath/Alcan/data/Cityimport_Overwrite.xlsx");
        await this.exportbackupconfirmbutton.click();
        await this.uploadconfirmbutton.click();
        await this.overwritebutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'});
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });


        //importcityappend
        await this.importbutton.click();
        await this.regiondropdown.selectOption("India");
        await this.fileinput.setInputFiles("C:/Users/abhishek.hiremath/Alcan/data/Cityimport_Append.xlsx");
        await this.exportbackupconfirmbutton.click();
        await this.uploadconfirmbutton.click();
        await this.appendbutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'}); 
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });
        

        //importpoioverwrite;
        await this.importbutton.click();
        await this.page.waitForTimeout(1000);
        await this.importpoibutton.click();
        await this.page.waitForTimeout(1000);
        const responsePromise = this.page.waitForResponse(
  /api\/v1\/City\/GetCities\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
);  
        await this.regiondropdown.selectOption({ label: "India" });
        const response = await responsePromise;
        
        await this.citydropdown.selectOption({ label: "Gujarat" });
        
        await this.uploadexcelbutton.waitFor({ state: 'attached' });
        
        await this.fileinput.setInputFiles("C:/Users/abhishek.hiremath/Alcan/data/POIImport_Overwrite.xlsx");
        await this.exportbackupconfirmbutton.click();
        await this.uploadconfirmbutton.click();
        await this.overwritebutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'});
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });
        

        //importpoiappend
        await this.importbutton.click();
        await this.page.waitForTimeout(1000);
        await this.importpoibutton.click();
        await this.page.waitForTimeout(1000);
        await this.regiondropdown.selectOption("India");
        await responsePromise;
        await this.citydropdown.selectOption({ label: "Gujarat" });
        await this.uploadexcelbutton.waitFor({ state: 'attached' });
        await this.fileinput.setInputFiles("C:/Users/abhishek.hiremath/Alcan/data/POIImport_Append.xlsx");
        await this.exportbackupconfirmbutton.click();
        await this.page.waitForSelector('//button[contains(., "Upload")]', {state: 'visible',timeout: 20000});
        await this.uploadconfirmbutton.click();
        await this.appendbutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'}); 
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });
        
    

        //importtrippoioverwrite
        await this.importbutton.click();
        await this.page.waitForTimeout(1000);
        await this.importtrippoibutton.click();
        await this.page.waitForTimeout(1000);
        const responsepromise2 = this.page.waitForResponse(/api\/v1\/TripManagement\/\d+/);
        await this.selectdirectiondropdown.selectOption("Northwest");
        const response2 = await responsepromise2
        await this.selecttripdropdown.selectOption("India trip");
        await this.fileinput.setInputFiles("C:/Users/abhishek.hiremath/Alcan/data/TripPoi_Overwrite.xlsx");
        await this.exportbackupconfirmbutton.click();
        await this.uploadconfirmbutton.click();
        await this.overwritebutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'});
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });
        

        //importtrippoiappend
        await this.page.pause();
        await this.importbutton.click();
        await this.importtrippoibutton.click();
        await this.selectdirectiondropdown.selectOption("Northwest");
        await responsepromise2;
        await this.selecttripdropdown.selectOption("India trip");
        await this.fileinput.setInputFiles("C:/Users/abhishek.hiremath/Alcan/data/TripPoi_Append.xlsx");
        await this.page.waitForTimeout(1000);
        await this.page.waitForSelector('//button[@class = "export-button" and text() = "Export Now"]', { state: 'visible'});
        await this.exportbackupconfirmbutton.click();
        await this.page.waitForTimeout(1000);
        await this.uploadconfirmbutton.click();
        await this.appendbutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'}); 
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });
        
    
    }
}

export default ImportexportPage;
