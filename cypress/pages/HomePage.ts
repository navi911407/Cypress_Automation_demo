class HomePage {

    private searchArea = 'textarea[title=Buscar]';
  
    visitHomePage() {
      cy.visit('/');
    }

    searchText(searchText:string){
        cy.get(this.searchArea).type(searchText);
        cy.get(this.searchArea).type('{enter}')
    }
  
  }
  
  export default HomePage;