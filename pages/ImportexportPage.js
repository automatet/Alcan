import data from '../testdata.json'
import { expect } from '@playwright/test';
import testdataImportexport from '../testdataImportexport.json';
import test from 'node:test';



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
        this.verifyexportcitysuccess = page.locator('//span[contains(text(),"city Downloaded successfully")]');
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


    async exportcity(){
        await this.ImportexportTab.click();
        await this.exportbutton.click();
        await this.exportcitybutton.click();
        await this.regiondropdown.selectOption("India");
        await this.downloadexcelbutton.click();
        await this.downloadconfirmbutton.click();
        const [download] = await Promise.all([
        this.page.waitForEvent('download'),
        ]);
        expect(download.suggestedFilename()).toContain("city");
        const path = await download.path()
        console.log("File Download",path);
    }

    async exportpoi(){       
        await this.exportpoibutton.click();
        await this.regiondropdown.selectOption("India");
        await this.citydropdown.selectOption("Pune");
        await this.downloadexcelbutton.click();
        await this.downloadconfirmbutton.click();
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
        ]);
        expect(download.suggestedFilename()).toContain("POI");
        const path = await download.path()
        console.log("File Download",path);
    }

    async exporttrippoi(){
        await this.exporttrippoibutton.click();
        await this.selectdirectiondropdown.selectOption("Northwest");
        await this.selecttripdropdown.selectOption("India trip");
        await this.downloadexcelbutton.click();
        await this.downloadconfirmbutton.click();
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
        ]);
        expect(download.suggestedFilename()).toContain("TripPOI");
        const path = await download.path()
        console.log("File Download",path);
    }

    async importcityoverwrite(){
        await this.ImportexportTab.click();
        await this.importbutton.click();
        await this.importcitybutton.click();
        await this.regiondropdown.selectOption("India");
        await this.fileinput.setInputFiles(testdataImportexport.cityoverwriteFile);
        await this.exportbackupconfirmbutton.click();
        await this.uploadconfirmbutton.click();
        await this.overwritebutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'});
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' }); 
    }

    async importcityappend(){
        await this.importbutton.click();
        await this.regiondropdown.selectOption("India");
        await this.fileinput.setInputFiles(testdataImportexport.cityappendFile);
        await this.exportbackupconfirmbutton.click();
        await this.uploadconfirmbutton.click();
        await this.appendbutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'}); 
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });
    }

    async importpoioverwrite(){  
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
        await this.fileinput.setInputFiles(testdataImportexport.poioverwriteFile);
        await this.exportbackupconfirmbutton.click();
        await this.uploadconfirmbutton.click();
        await this.overwritebutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'});
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });
    }

    async importpoiappend(){   
        await this.importbutton.click();
        await this.page.waitForTimeout(1000);
        await this.importpoibutton.click();
        await this.page.waitForTimeout(1000);
        await this.regiondropdown.selectOption("India");
        await this.importpoioverwrite.responsePromise;
        await this.citydropdown.selectOption({ label: "Gujarat" });
        await this.uploadexcelbutton.waitFor({ state: 'attached' });
        await this.fileinput.setInputFiles(testdataImportexport.poiappendFile);
        await this.exportbackupconfirmbutton.click();
        await this.page.waitForSelector('//button[contains(., "Upload")]', {state: 'visible',timeout: 20000});
        await this.uploadconfirmbutton.click();
        await this.appendbutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'}); 
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });
    }

    async importtrippoioverwrite(){
        await this.importbutton.click();
        await this.page.waitForTimeout(1000);
        await this.importtrippoibutton.click();
        await this.page.waitForTimeout(1000);
        const responsepromise2 = this.page.waitForResponse(/api\/v1\/TripManagement\/\d+/);
        await this.selectdirectiondropdown.selectOption("Northwest");
        const response2 = await responsepromise2
        await this.selecttripdropdown.selectOption("India trip");
        await this.fileinput.setInputFiles(testdataImportexport.trippoioverwriteFile);
        await this.exportbackupconfirmbutton.click();
        await this.uploadconfirmbutton.click();
        await this.overwritebutton.click();
        await this.confrimbutton.click();
        await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'});
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });
    }

    async importtrippoiappend(){
        await this.importbutton.click();
        await this.importtrippoibutton.click();
        await this.selectdirectiondropdown.selectOption("Northwest");
        await this.importtrippoioverwrite.responsepromise2;
        await this.selecttripdropdown.selectOption("India trip");
        await this.fileinput.setInputFiles(testdataImportexport.trippoiappend);
        await this.page.waitForTimeout(1000);
        await this.page.waitForSelector('//button[@class = "export-button" and text() = "Export Now"]', { state: 'visible'});
        await this.exportbackupconfirmbutton.click();
        await this.page.waitForTimeout(1000);
        await this.uploadconfirmbutton.click();
        await this.appendbutton.click();
        await this.confrimbutton.click();
        //await this.page.waitForSelector('//button[text() = "Confirm"]',{ state: 'detached'}); 
        await this.page.waitForSelector('//h2[text()="Select the action to Overwrite or Append File"]', { state: 'detached' });
    }
}
export default ImportexportPage;
