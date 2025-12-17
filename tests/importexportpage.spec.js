import{test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import ImportexportPage from '../pages/ImportexportPage.js';
import testdata from '../testdata.json';
import testdataImportexport from '../testdataImportexport.json';

test('data import and export positive flow', async ({page})=>{

    test.setTimeout(150000);
  
    //login function call and assertions
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()

    //dataexportcity function call and assertions
    const dataexportcity = new ImportexportPage(page)
    await dataexportcity.exportcity();
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL(testdataImportexport.exportURL);

    //dataexportpoi function call and assertions
    const dataexportpoi = new ImportexportPage(page)
    await dataexportpoi.exportpoi()
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL(testdataImportexport.exportURL);
    await expect(page.locator('//p[text() = "Click on download to export files"]')).toContainText('Click on download to export files');

    //dataexportpoi function call and assertions
    const dataexporttrippoi = new ImportexportPage(page)
    await dataexporttrippoi.exporttrippoi()
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL(testdataImportexport.exportURL);
    await expect(page.locator('//p[text() = "Click on download to export files"]')).toContainText('Click on download to export files');

    //dataimportcityoverwrite function call and assertions
    const dataimportcityoverwrite = new ImportexportPage(page)
    await dataimportcityoverwrite.importcityoverwrite()
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL(testdataImportexport.importURL);

    //dataimportcityappend function call and assertions
    const dataimportcityappend = new ImportexportPage(page)
    await dataimportcityappend.importcityappend()
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL(testdataImportexport.importURL);

    //dataimportpoioverwrite function call and assertions
    const dataimportpoioverwrite = new ImportexportPage(page)
    await dataimportpoioverwrite.importpoioverwrite()
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL(testdataImportexport.importURL);

    //dataimportpoiappend function call and assertions
    const dataimportpoiappend = new ImportexportPage(page)
    await dataimportpoiappend.importpoiappend()
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL(testdataImportexport.importURL);

    //dataimporttrippoioverwrite function call and assertions
    const dataimporttrippoioverwrite = new ImportexportPage(page)
    await dataimporttrippoioverwrite.importtrippoioverwrite()
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL(testdataImportexport.importURL);

    //dataimporttrippoiappend function call and assertions
    const dataimporttrippoiappend = new ImportexportPage(page)
    await dataimporttrippoiappend.importtrippoiappend()
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL(testdataImportexport.importURL);
    
})
