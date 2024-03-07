/// reference types="Cypress" />
import HomePage from '../../../pageObjects/HomePage.js';

describe("Page Object Model Tutorial", function(){

    it("Test Case 1", function(){
        cy.visit("https://amazon.com")
    })
})

//test suite
describe.skip("TESTING AMAZON WEBPAGE", () => {
    //test case
    beforeEach(() => {
      //Implementing commands on Support/commands.js folder, file.
      cy.switchLang(`ES`);
    })
  
    it.skip("PASS- Visiting the website", () => {
        //test step
        //Going into Amazon -> with before each hook
         // cy.visit("https://www.amazon.com/");
      })
  
    it.skip("FAIL- Login - IMPOSIBLE TO CHECK CODE", () => {
        //test step
        //Going into Amazon -> with before each hook
        cy.visit("https://www.amazon.com/");
        cy.get("#nav-link-accountList > span > span").click()
        cy.get("#createAccountSubmit").click();
        cy.get("#ap_customer_name").type("Pablotest");
        cy.get("#ap_password").type("test2024");
        cy.get("#ap_password_check").type("test2024");
        cy.get("#ap_email").type("pablolarnaudiedrive2@gmail.com");
        cy.get("#continue").click();
        cy.visit('https://accounts.google.com')
        cy.origin('https://accounts.google.com', ()=>{
          cy.get("#identifierId").type("pablolarnaudiedrive2@gmail.com")
          cy.get("#identifierNext > div > button > span").click();
          cy.get(".WpHeLc").click();
          setTimeout(()=>{
          cy.get("#identifierId").type("pablolarnaudiedrive2@gmail.com")
          cy.get("#identifierNext > div > button > span").click();
          cy.get(".WpHeLc").click();
          },4000);
          cy.get("#identifierId").type("pablolarnaudiedrive2@gmail.com")
          cy.get("#identifierNext > div > button > span").click();
          cy.get(".WpHeLc").click();
          cy.get("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input").type("t******Y");
          cy.get("#passwordNext > div > button > span").click();
        })
    })
  
    it.skip(`FAIL- Verifing code to log-in - IMPOSIBLE TO ACCESS TO THE eMAIL`, ()=>{
      //WAS IMPOSIBLE TO ACCESS TO THE eMAIL TO VERYFY THE CODE.
  
    /*con gmail*/
      cy.visit('https://mail.google.com')
      cy.get("#identifierId").type("pablolarnaudiedrive2@gmail.com")
      cy.get("#identifierNext > div > button > span").click();
      cy.get(".WpHeLc").click();
      setTimeout(()=>{
      cy.get("#identifierId").type("pablolarnaudiedrive2@gmail.com")
      cy.get("#identifierNext > div > button > span").click();
      cy.get(".WpHeLc").click();
      },4000);
      cy.get("#identifierId").type("pablolarnaudiedrive2@gmail.com")
      cy.get("#identifierNext > div > button > span").click();
      cy.get(".WpHeLc").click();
      cy.get("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input").type("t108216Y");
      cy.get("#passwordNext > div > button > span").click();
  
     /*con microsoft
         cy.visit("https://www.microsoft.com/es-uy/");
      cy.get("#meControl").click();
  
      /*cy.get("#i0116").type("eltito_sabe@hotmail.com");
      cy.get("#idSIButton9").click();
      cy.get("#i0118").type("melacomo");
      cy.get("#declineButton").click();*/
    })
  
    it.skip("PASS- Testing the search bar", ()=>{
      //Going into Amazon -> with before each hook
         // cy.visit("https://www.amazon.com/");
      //typing in the search bar google pixel 8
      cy.get("#twotabsearchtextbox").type("Google Pixel 8")
      //doing click on the search button
      cy.get('#nav-search-submit-button').click();
      //verifiaing that should have 31 items.
      cy.get("[data-asin]").should("have.length",31)
    })
  
    it.skip("PASS- Catching the Amazon logo", ()=>{
      //Going into Amazon -> with before each hook
         //  cy.visit("https://www.amazon.com/");
      //Trying to get the Amazon logo. AND SAVING IT INTO A VARIABLE
      //This two lines, will trigger: logo is not a function, because cypress couldb't solve it without a promise
      //Cypress can't handle this get inside a variable.
      //const logo = cy.get("#nav-logo-sprites");
      //logo.text()
  
      cy.get("#nav-logo-sprites").then((logo)=>{
        //The element got from the selector, will be saved in logo parameter.
        //TEXT IS NOT A CYPRESS METHOD.
      cy.log(logo.text());
      })
  
    })
  
    it.skip("Rahul shetty - Example with about then promises",() => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);
        //selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get(".product").should("have.length", 5);
        cy.get(".product:visible").should("have.length", 4);
        //Parent child chaining
        cy.get(".products").as("productLocator");
        cy.get("@productLocator").find(".product").should("have.length", 4);
        cy.get(":nth-child(3) > .product-action > button").click();
        cy.get("@productLocator")
          .find(".product")
          .eq(2)
          .contains("ADD TO CART")
          .click()
          .then(function () {
            console.log("sf");
          });
    
        cy.get("@productLocator")
          .find(".product")
          .each(($el, index, $list) => {
            const textVeg = $el.find("h4.product-name").text();
            if (textVeg.includes("Cashews")) {
              cy.wrap($el).find("button").click();
            }
          });
    
        //assert if logo text is correctly displayed
        cy.get(".brand").should("have.text", "GREENKART");
    
        //this is to print in logs
        cy.get(".brand").then(function (logoelement) {
          cy.log(logoelement.text());
        });
  
    })
  
    it.skip("PASS - Testing adding an item to a chart", ()=>{
      //Going into Amazon -> with before each hook
         //  cy.visit("https://www.amazon.com/");
        //will made a refreash to solve the problem of catch a different search bar
        cy.reload();
        //will serch for the search bar
        cy.get('#nav-search');
        //typing in the search bar google pixel 8
         cy.get("#twotabsearchtextbox").type("Google Pixel 8")
        //doing click on the search button
        cy.get('#nav-search-submit-button').click();
  
      //verifiaing that should have 31 items.
      cy.wait(3000) //-> will wait for 3 seconds.
      cy.get("[data-asin]").should("have.length",31)
  
      //Selecting one item from this array
      cy.get("[data-asin]").find(".puis-card-container").eq(2).find(`.a-size-medium`).click();
      //Selector to be able to see all the options -> add to cart button will be available
      cy.get('#add-to-cart-button').click();
      //We expect that the cart has a number 1 as a final count.
      cy.get('#nav-cart-count').should(`contain`,`1`);
  
      //Verifying that the cart truly has the item added
      cy.get('#sw-gtc > .a-button-inner > .a-button-text').should(`exist`).click();
  
      //Accessing to the title's string to verify if contains google pixel 8 string.
      cy.get('.a-truncate-cut').invoke(`text`).should(`contain`, `Google Pixel`)
    })
  
    it.skip("Fail - Testing adding some items to a chart", ()=>{
          //Going into Amazon -> with before each hook
         // cy.visit("https://www.amazon.com/");
          //will made a refreash to solve the problem of catch a different search bar
          cy.reload();
          //will serch for the search bar
          cy.get('#nav-search');
          //typing in the search bar google pixel 8
          cy.get("#twotabsearchtextbox").type("Google Pixel 8 - ")
          //this avoid the error triggered bu the click method.
          cy.once('uncaught:exception', () => false);
          //doing click on the search button
          cy.get('#nav-search-submit-button').click();
        
        //verifiaing that should have 31 items inside attribute data-asin indie .s-main
        cy.wait(3000) //-> will wait for 3 seconds.
        
        //variates between 41 and 42
        //cy.get(".s-main-slot").find(`[data-asin]`).should("have.length",41)
        
        //Here I obtain 24 pieces of content, each should iterate by each element
        //this code are beiing implemented in the support/commands.js -> addToCart
      const ignoredItems = [];
      let addedItems = [];
  
      cy.get("[data-asin]").find('h2.a-size-mini').each(($el, index, $list) => {
          
          //Remember, this can't be handeld by cypress itself
          const textTitle = $el.text();
          //this directly won't work
          //cy.get($el).find(`a.a-link-normal`);
          //$el.text();
  
          //Veryfing in console the value of the $el
          cy.log(textTitle);
  
          //Adding some logic to select ONLY the items with the following string
          if(textTitle.includes(strTitle) && addedItems.length <= 1){
              //this avoid the error triggered bu the click method.
              //cy.once('uncaught:exception', () => false);
  
              //Applying the THEN method to handle the variable out of cypress.
              cy.get(`h2 a[class*="a-link-normal s-underline-text"]`).eq(index).then((btn)=>{
  
              //this avoid the error triggered bu the click method.
              //cy.once('uncaught:exception', () => false);
  
              //remember we need to wrap $el or btn parameter to do click on it,
              cy.wrap(btn).click();
              });
  
              //Adding items to a chart
              cy.get('#add-to-cart-button').click();
  
              //Finding green icon
              cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS > .a-box > .a-box-inner > .a-icon').should(`be.visible`);
              
              //Verifying also with the string
              cy.get('.a-size-medium-plus').should(`contain`, `Agregado al carrito`)
               addedItems.push({index, textTitle});
               cy.log(addedItems);
               cy.log(`index: ${index} of ${textTitle} added, length now is ${addedItems.length}`);
  
              //Going back to be able to repeat all the loop again.
              cy.go(`back`);
              
              //this avoid the error triggered bu the click method.
              cy.once('uncaught:exception', () => false);
              cy.wait(2000);
              cy.go(`back`);
              
              //Verifying that we are correcltly in the main menu
              cy.get('.s-no-outline > .a-row > .a-size-base').should(`be.visible`);
              
              //this avoid the error triggered bu the click method.
              cy.once('uncaught:exception', () => false);
            }else{
              ignoredItems.push({index, textTitle});
              cy.log(`The index: ${index} called ${textTitle} was added to ignored items list`)
              cy.log(ignoredItems);
          }
        })
    })
  
    it.skip("Fail - Testing the UI of the items within the list", ()=>{
      //Going into Amazon -> with before each hook
      //cy.visit("https://www.amazon.com/");
      //we need refresh with F5 the webpage 'cuz the nav bar appears different sometimes
      cy.reload();
      //typing in the search bar google pixel 8
      cy.get("#twotabsearchtextbox").type("Google Pixel 8")
      //doing click on the search button
      cy.get('#nav-search-submit-button').click();
      //accessing to the content class
      cy.get(".sg-col-20-of-24:visible").should(`be.visible`);
      //veryfing if has 27 elements in the DOM.
      cy.get(".sg-col-20-of-24:visible").should(`have.length`, 27);
      //Trying to find an element inside the class
      cy.get(".sg-col-20-of-24:visible").find(`.s-image`).should(`be.visible`);
      //extracting the text displayed in the thirty item  within the list.
      cy.get(".sg-col-20-of-24:visible").eq(2).find(`.a-price-whole`).then((price)=>{
        cy.log(price.text());
      });
    })
  
    it.skip("PASS- Optimization of the last test case", ()=>{
      //When you are using too many time the same label, you can grab it with a new name with as 
      //the reserved label "as" works as a variable const, let, in the meaning that you can grab a value there.
      
      //Going into Amazon -> with before each hook
      //cy.visit("https://www.amazon.com/");
      //we need refresh with F5 the webpage 'cuz the nav bar appears different sometimes
      cy.reload();
      //typing in the search bar google pixel 8
      cy.get("#twotabsearchtextbox").type("Google Pixel 8")
      //doing click on the search button
      cy.get('#nav-search-submit-button').click();
      //Creating a new name for the selctor with AS word
      cy.get(".sg-col-20-of-24:visible").as(`allCelphones`)
      //accessing to the content class
      //We add an @ before to call the name of the selector.
      cy.get("@allCelphones").should(`be.visible`);
      //veryfing if has 27 elements in the DOM.
      cy.get("@allCelphones").should(`have.length`, 27);
      //Trying to find an element inside the class
      cy.get("@allCelphones").find(`.s-image:visible`).should(`be.visible`);
      //extracting the text displayed in the thirty item  within the list.
      cy.get("@allCelphones").eq(2).find(`.a-price-whole`).then((price)=>{
        cy.log(price.text());
      });
    })
  
    it.skip("PASS- Testing checkboxes on Amazon",()=>{
      //When you are using too many time the same label, you can grab it with a new name with as 
      //the reserved label "as" works as a variable const, let, in the meaning that you can grab a value there.
      //cy.visit("https://www.amazon.com/");
      //we need refresh with F5 the webpage 'cuz the nav bar appears different sometimes
      cy.reload();
      //typing in the search bar google pixel 8
      cy.get("#twotabsearchtextbox").type("Google Pixel 8")
      //doing click on the search button
      cy.get('#nav-search-submit-button').click();
      //Selecting Google checkbox
      cy.get('li[aria-label="Google"]').find('input[type="checkbox"]').check({force: true})
      //Selecting 128 GB checkbox
      cy.get(`li[aria-label="128 GB"]`).find('input[type="checkbox"]').check({force: true})
      
      //Going into a celphone that has other checkbox inside him
      //Doesn't allow to click by an error in the render inside cypress.
      cy.get(`h2.a-size-mini:visible`).eq(1).should(`contain`,`Google Pixel`);
      cy.get(`img.s-image`).eq(1).click();
      //Going to the checkbox, doing also multiple assertions.
      cy.get('#gift-wrap').check().should(`be.checked`).and(`have.value`,`yes`);
      //Unchecking the checkbox and verifying that was unchecked.
      cy.get('#gift-wrap').uncheck().should(`not.be.checked`);
  
      cy.go(`back`);
      cy.wait(3000);
    });
  
    it.skip("PASS- Testing with multiple checkboxes on Amazon", ()=>{
        //Going into Amazon -> with before each hook
         // cy.visit("https://www.amazon.com/");
        //we need refresh with F5 the webpage 'cuz the nav bar appears different sometimes
        cy.reload();
        //typing in the search bar google pixel 8
        cy.get("#twotabsearchtextbox").type("Google Pixel 8")
        //doing click on the search button
        cy.get('#nav-search-submit-button').click();
        //Trying to select multiple checkboxes.
        cy.get(`ul[data-csa-c-content-id="36816607011"]`).find(`[data-csa-c-type="element"]`).each(($el, index, $list)=>{
  
          const text = $el.find(`[class="a-size-base a-color-base"]`).text();
  
          if(text.includes(`Android`)){
            cy.wrap($el).find('input[type="checkbox"]').check({force: true});
          }else{
            cy.log(`There's no Android in the list`);
          }
        })
        //We need the selector of the checkbox that also has another value to decide which one should be selected. 
        //In Amazon, there's no selector with values, only with the checkbox's selector, so it's imposible to decide
        //which one could be selected or not.
    })
  
    it.skip("Rahul shetty - Testing multiple checkboxes", function () {
      //Check boxes
      //Going into Amazon -> with before each hook
         // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get("#checkBoxOption1")
        .check()
        .should("be.checked")
        .and("have.value", "option1");
      cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
      //Here he puts the value of each checkbox in an array, only the one that will be checked will be in the array
      //If we haven't had a value in the checkbox, it won't be possible to check it.
      cy.get('input[type="checkbox"]').check(["option2", "option3"]);
    })
  
    it.skip("Rahul shetty - Testing dropdowns", ()=>{
      //Going into Amazon -> with before each hook
      // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      //Static Dropdown
      cy.get("select").select("option2").should("have.value", "option2");
      //Dynamic dropdowns
      cy.get("#autocomplete").type("ind");
    });
  
    it.skip("PASS - Testing dropdowns on Amazon",()=>{
      //We have two types of dropdowns Statics and dynamic.
  
      //the reserved label "as" works as a variable const, let, in the meaning that you can grab a value there.
      //Going into Amazon -> with before each hook
      // cy.visit("https://www.amazon.com/");
      //we need refresh with F5 the webpage 'cuz the nav bar appears different sometimes
      cy.reload();
    
      //DYNAMIC DROPDOWN
  
      //typing in the search bar google pixel 8
      cy.get("#twotabsearchtextbox").type(`Google Pixel`);
  
      cy.wait(3000);
        
      cy.get(`div[class="two-pane-results-container"] div[class="s-suggestion s-suggestion-ellipsis-direction"]`).each(($el, index, $list)=>{
        cy.log($el.attr(`aria-label`));
        if($el.attr(`aria-label`) == `google pixel 7`){
          cy.wrap($el).click();
        }else{
          cy.log(`There's no Google Pixel 7 in the list in ${index}`);
        }
  
      });
      
      //STATIC DROPDOWN
      cy.get(`#a-autoid-0`).click();
      cy.get(`ul[class="a-nostyle a-list-link"] li[class="a-dropdown-item"]`).each(($el, index, $list)=>{
  
        //Remember that it's a JQ object, we have to resolve the promise, with each method, automatically resolve the promise.
        if($el.text() == (`Los más vendidos`)){
          cy.wrap($el).click();
        }else{
          cy.log(`There's no matched text in the list in ${index}`);
        }
      })
      cy.get('.a-dropdown-prompt').should(`contain`, `Los más vendidos`);	
    });
    
    it.skip("PASS - Testing the Hover function with SHOW", ()=>{
      
    cy.visit("https://www.amazon.com/");
  
    cy.reload()
    
      cy.get('#nav-flyout-icp').invoke(`show`).find(`.nav-flyout-content`).invoke(`show`)
      cy.contains(`DE`).click({force: true});
      cy.wait(2000)
    })
  
    it.skip("Rahul shetty - Testing iFrames", ()=>{
      //iFrame it's a HTML document embedded in another HTML document
      //we need to install a plug-in -> npm install -D cypress-iframe and import it: import `cypress-iframe`
  
      //We use iFrames when the ebpage have the iframe tag on it and we need to interact with it.
      //to enable it to use it we need to call cy.frameLoaded();
  
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.frameLoaded(`#courses-iframe`)
      //we need to tell cypress that have to switch to iframe mode with cy.frame
      //then, we need to pass there the class, id... that exist in the iframe.
      //CHROPATH extention, is not able to find the elements inside the iframe
      cy.iframe().find(`a[href*="mentorship"]`).eq(0).click();
      //cy.iframe().find("h1[class*=`pricing-title`]").should(`have.length`, 1);
    })
  
  });
  
  //USAR IT CON FUNCTION(){})!! NO CON ()=>{}
  describe("Testing Amazon, improving new methodologies", ()=>
  {
    beforeEach(function(){
      cy.fixture("example").then(function(data){
        this.data = data;
      });
      cy.switchLang(`ES`);
      cy.log("Before each hook executed");
  })
  
    it.skip("Rahul Shetty - fixtures",function(){
      cy.visit("https://rahulshettyacademy.com/angularpractice/");
      //Otra forma de llama al selector:
      cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
      cy.get("select").select(this.data.gender);
      cy.get("body > app-root > form-comp > div > h4 > input").should(
        "have.value",
        this.data.name
      );
      cy.get('input[name="name"]:nth-child(2)').should(
        "have.attr",
        "minlength",
        2
      );
      cy.get("#inlineRadio3").should("be.disabled");
      cy.get(
         "body > app-root > app-navbar > div > nav > ul > li:nth-child(2) > a").click();
    
    });
  
    it.skip("Fail - Amazon with fixtures - Login assertions",function(){
      cy.visit(this.data.urlAmazon);
      //Searching phone on search field
      cy.get("#twotabsearchtextbox").type(this.data.searchPhone);
      cy.get("#nav-link-accountList > span > span").click()
      cy.get("#createAccountSubmit").click();
      cy.get("#ap_customer_name").type(this.data.username);
      cy.get("#ap_email").type(this.data.email);
  
      //Veryifing if the password matches
      cy.get("#ap_password").type(this.data.userPass);
      cy.get("#ap_password_check").type(this.data.shortPass);
      cy.get("#continue").click();
      cy.get('#auth-password-mismatch-alert > .a-box-inner > .a-alert-content:visible').should(`contain`,`Las contraseñas no coinciden`)
  
      //Veryfing if the password have lengh of 6 min.
      cy.get("#ap_password").clear().type(this.data.shortPass);
      cy.get("#ap_password_check").clear().type(this.data.shortPass);
      cy.get("#continue").click();
      cy.get('#auth-password-invalid-password-alert > .a-box-inner > .a-alert-content').should(`contain`,`Se requiere un mínimo de 6 caracteres`).and(`have.css`,"7");
      cy.get("#ap_password").clear().type(this.data.userPass);
      cy.get("#ap_password_check").clear().type(this.data.userPass);
      cy.get('#auth-password-invalid-password-alert > .a-box-inner > .a-alert-content').should(`not.have.text`,`Se requiere un mínimo de 6 caracteres`);
  
      //Vertyfing if accepts a email.
      cy.get("#ap_email").clear().type(this.data.email).should(`have.attr`,`type`,`email`);
  
      //Veryfing if accepts a number phone.
      cy.get("#ap_email").clear().type(this.data.phoneNum);
      cy.get('.country-display-text').click();
      cy.get('.a-popover-inner ul li a').each(($el, index, $list)=>{
        const [country, ...num] = $el.text().split(` `);
        cy.log(country)
        if((`${country} `) === this.data.country){
          cy.wrap($el).click();
        }else{
          cy.log($el.text() + ` is not equal to ${this.data.country}`)
        }
      })
    });
  
    it.skip("PASS - Amazon with fixtures - Selecting items",function(){
      cy.visit(this.data.urlAmazon);
      cy.reload();
      //Searching the phone.
      cy.get("#twotabsearchtextbox").type(this.data.searchPhone[0])
      cy.get(`#nav-search-submit-button`).click();
      
      cy.findTitle(this.data.searchPhone[0]);
  
    })
  
    it.skip("PASS - Aadding items to a chart with commands",function(){
      //We need to search the phone.
      cy.searchProduct(this.data.searchPhone[0])
  
      //Here we pass the number 0 of index stored in the array
      cy.addToCart(this.data.searchPhone)
    })
  
    it.skip("PASS - iterating items from an array in fixtures",function(){
      this.data.searchPhone.forEach((phone)=>{
        cy.get('#twotabsearchtextbox').clear();
        cy.searchProduct(phone);
      });
    });
  
    it.skip("PASS - Debugging with Cypress",function(){
      //You only need to use .debug() or .pause()
    })
  
    it.skip("Page Object Model Design on Amazon",function(){
      //each page with different endpoint or html that reload the entiere webpage needs
      //to be created in separated classes.
      const homePage = new HomePage();
  
      homePage.searchBar().type(this.data.searchPhone[0]);
      homePage.btnSubmit().click();
  
    })
  
    it("Sum products on Amazon", function () {
      const homePage = new HomePage();
      //We need to search the phone.
      cy.searchProduct(this.data.searchPhone[1])
      cy.addToCart(this.data.searchPhone[1]);
    })
  })