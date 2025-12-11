// import { test as base, expect } from '@playwright/test'
// import LoginPage from '../pages/loginPage.js';
// import testdata from '../testdata.json';


// export const test = base.extend({

//     page : async ({page}, use)=>{
 
//     //login before each test
//     const loginuser = new LoginPage(page)
//     await page.goto(testdata.URL)
//     await loginuser.login()

//     //now give logged-in page of the tests
//     await use(page)


//     }
// })