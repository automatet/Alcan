class landingPage{

    constructor(page){

        this.page = page;
        this.homebtn = page.locator("//span[text()='Home']")
    }

}

export default landingPage;