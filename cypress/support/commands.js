// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('searchProduct', (strTitle) => {  
    //will serch for the search bar
    cy.get('#nav-search');
    //typing in the search bar google pixel 8
    cy.get("#twotabsearchtextbox").type(strTitle);
    //this avoid the error triggered bu the click method.
     cy.once('uncaught:exception', () => false);
     //doing click on the search button
     cy.get('#nav-search-submit-button').click();
 
     //verifiaing that should have 31 items inside attribute data-asin indie .s-main
     cy.wait(3000) //-> will wait for 3 seconds.
     cy.log("searchPrduct finished")
 })
 
 Cypress.Commands.add('switchLang', (lang) => {
     cy.visit("https://www.amazon.com/")
     cy.reload();
     cy.get(`#icp-nav-flyout span[class="nav-line-2"] div`).each(($el, index, $list) => {
     $el.click()
     if($el.text() === `EN`){
       $el.find(`span[class="icp-nav-link-inner"]`).click()
       //cy.wait(3000)
       cy.get(`span[dir="ltr"]`).each(($el, index, $list) => {
         if($el.text() == lang){
           cy.log(`${$el.text()} contains the text español`)
           $el.click();
           cy.get(`input[aria-labelledby="icp-save-button-announce"]`).should(`have.class`,`a-button-input`).click()
           cy.wait(3000)
         }else{
           cy.log(`_${$el.text()}_ does not contains the text Español`)
         }
       })
     }
     })
     cy.log("switchLang finished")
 })
 
 Cypress.Commands.add('findTitle', (strTitle) => {
   /* My code trying to select the item.
     const item = cy.get("[data-asin]").find('h2.a-size-mini')
     item.each(($el, index, $list) => {
         
     //Remember, this can't be handeld by cypress itself
     const textTitle = $el.text();
     //this directly won't work
     //cy.get($el).find(`a.a-link-normal`);
     //$el.text();
 
     //Veryfing in console the value of the $el
     cy.log(textTitle);
     //Adding some logic to select ONLY the items with the following string
     //This strTitle contained Google pixel 8
         if(textTitle.includes(strTitle)){
             cy.log(textTitle);
             return textTitle;
     //cy.wait(5000)
         }else{
             cy.log(`There weren't matched strings, ${textTitle}`)
         }
     })*/
 
     //This was written by ChatGPT
     //Creates an empty array to store all the valid elements
     let matchingTitles = [];
 
     //We accessed to the selector that contains all texts and stored them into a variable textTitle
     cy.get("[data-asin]").find('h2.a-size-mini:visible').each(($el, index, $list) => {
       const textTitle = $el.text();
 
       //to verify the text, we prefered to log it in the console.
      cy.log(textTitle);
 
      //Conditional logic -> if the textTitle contains the strTitle, we log it
       if (textTitle.includes(strTitle)) {
          cy.log(textTitle);
          //if the $el contains the text, we store it in the variable matchingTitles.
           matchingTitles.push(textTitle);
      } else {
           cy.log(`There weren't matched strings, ${textTitle}`);
       }
     }).then(() => {
       // Rprint in the cypress console, the number of elements that contain the array
       cy.log('Matching titles:', matchingTitles);
 
       // Ahora puedes realizar más acciones o devolver la variable si es necesario en algún contexto externo
       // Por ejemplo, puedes realizar una nueva aserción con los elementos coincidentes
       expect(matchingTitles).to.have.length.above(0);
       console.log(matchingTitles)
      });
      cy.log("findTitle finished")
 })
 
 Cypress.Commands.add('addToCart', (strTitle) => {
   //strTitle should be the name of your wished phone.
     const ignoredItems = [];
     let addedItems = [];
 
     cy.get("[data-asin]:visible").each(($el, index, $list) => {
         
         //Remember, this can't be handeld by cypress itself
         const textTitle = $el.find('h2 a span[class*="a-size-medium a-color-base a-text-normal"]').text();
         const priceContent = $el.find(`[class="a-offscreen"]`).text();
         //this directly won't work
         //cy.get($el).find(`a.a-link-normal`);
         //$el.text();
 
         //Veryfing in console the value of the $el
         cy.log(`ANALIZANDO: ${textTitle}`);
         cy.log(`ANALIZANDO: ${priceContent}`);
         cy.wait(3000);
         //Adding some logic to select ONLY the items with the following string
         if((textTitle.includes(strTitle) && priceContent.includes(`$`)) && addedItems.length < 2){
             //this avoid the error triggered bu the click method.
             //cy.once('uncaught:exception', () => false);
 
             //Applying the THEN method to handle the variable out of cypress.
             cy.get(`h2 a[class*="a-link-normal s-underline-text"]`).eq(index).then((btn)=>{
 
             //this avoid the error triggered bu the click method.
             //cy.once('uncaught:exception', () => false);
 
             //remember we need to wrap $el or btn parameter to do click on it,
             cy.wrap(btn).click();
             });
 
             //clicking on the add cart button
             cy.get('#add-to-cart-button').click()
 
             //Finding green icon
             cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS > .a-box > .a-box-inner > .a-icon').should(`be.visible`);
             
             //Verifying also with the string
             cy.get('.a-size-medium-plus').should(`contain`, `Agregado al carrito`)
              addedItems.push({index, textTitle});
              cy.log(`The index number: ${index} with title: "${textTitle}" was ADDED, now, the length is ${addedItems.length}`);
              cy.log(addedItems.length);
              //cy.pause();
 
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
           } 
           else {
             ignoredItems.push({ index, textTitle });
             cy.log(`The index number: ${index} with title: "${textTitle}" was IGNORED and added to the ignored list, now, the length is ${ignoredItems.length}`);
             cy.log(ignoredItems.length);
             //cy.pause();
         }
     });
     
     cy.log("addToCart finished");
 })
 
 Cypress.Commands.add('add1itemToCart', (strTitle) => {
 
 })
 //
 //
 // -- This is a child command --
 // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
 //
 //
 // -- This is a dual command --
 // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
 //
 //
 // -- This will overwrite an existing command --
 // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })