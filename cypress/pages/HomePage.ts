class HomePage {

    private searchArea = 'textarea[title=Buscar]';
  
    visitHomePage() {
      cy.visit('/', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        failOnStatusCode: false
      });
    }

    searchText(searchText:string){
        cy.get(this.searchArea).type(searchText);
        cy.get(this.searchArea).type('{enter}')
    }
  
  }
  
  export default HomePage;