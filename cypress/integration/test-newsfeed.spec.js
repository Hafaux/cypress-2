context('cypress task 2', () => {
  it('should have the newsfeed section selected from the sidebar to the left', () => {
    cy.visit('');
    cy.get('#navigation-widget-small > .menu > :nth-child(1)').then(el => {
      expect(el).to.have.class('active');
    });
  });

  it('should have a newsfeed title with bold text', () => {
    cy.get('.section-banner-title').then($title => {
      expect($title).to.have.css('font-weight', '700');
    });
  });

  it('should have a banner with a title that has a bigger font than the banner text', () => {
    cy.get('.section-banner-title').then($title => {
      const titleFontSize = parseInt($title.css('font-size'));

      cy.get('.section-banner-text').then($text => {
        expect(parseInt($text.css('font-size'))).to.be.below(titleFontSize);
      });
    });
  });

  it('should be possible to type in the post text field', () => {
    cy.get('[data-cy=quick-post-text]').type('test');
  });

  it('should be able to scroll down', () => {
    cy.scrollTo('bottom');
  });
});