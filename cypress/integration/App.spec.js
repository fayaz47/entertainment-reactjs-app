// # // https://www.freecodecamp.org/news/testing-react-hooks/

import React from 'react';

describe ('complete e to e test', () => {
  it('e to e test', () => {
    cy.visit('/')
    //counter test
    cy.contains("Clicked: 0")
      .click()
    cy.contains("Clicked: 1")
    cy.visit('/movies')
    //movies test
    cy.contains("Clicked: 0")
      .click()
      cy.visit('/serials')
    //tv test
    cy.contains("Clicked: 0")
      .click()
    //axios test
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .should(res => {
          expect(res.body).not.to.be.null
          cy.contains(res.body.title)
        })
  });
});