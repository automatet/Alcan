import{test,expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import ImportexportPage from '../pages/ImportexportPage.js';
import testdata from '../testdata.json';
//import testdataimportexport.json from '../testdataimportexport'

test('dataimportexport', async ({page})=>{

    test.setTimeout(120000);
  
    //login function call and assertions
    const loginuser = new LoginPage(page)
    await page.goto(testdata.URL)
    await loginuser.login()

    //dataexport function call and assertions
    const dataexport = new ImportexportPage(page)
    await dataexport.export()
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL('https://dev3-web.openroadapp.us/data-export-page');
    await expect(page.locator('//p[text() = "Click on download to export files"]')).toContainText('Click on download to export files');  

    //dataimport function call and assertions
    const dataimport = new ImportexportPage(page)
    await dataimport.import()
    await expect(page).toHaveTitle('Open Road');
    await expect(page).toHaveURL('https://dev3-web.openroadapp.us/data-import-page');
    await expect.soft(page.locator('//p[text() = "Click on upload to import files"]')).toContainText('Click on upload to import files');
   

   

})

