"use strict";

export class HomePage {

    //selector del campo de busqueda.
    searchBar() {
      return cy.get('#twotabsearchtextbox');
    }
  
    //selector del boton submit
    btnSubmit() {
      return cy.get(`#nav-search-submit-button`)
    }
  }

  //in cypress +10 version.
  //module.export = HomePage