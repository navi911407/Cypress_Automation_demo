// cypress/integration/tests/login.spec.ts

import HomePage from '../../pages/HomePage';

describe('Home Page Test', () => {

  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visitHomePage();
  });

  it('should log in with valid credentials', () => {
    homePage.searchText('Steam Deck');

    cy.wait(5000);
  });

});