import homePage from "../page_objects/home.page";

describe('Check all href links for valid response', () => {
  it('should return 2xx or 3xx for all anchor tags', () => {
    cy.visit('/');
    homePage.contactUsbtn.click();

    cy.get('a[href]').each(($el) => {
      const href = $el.prop('href');

      if (href.startsWith('http') && !href.includes('facebook.com')) {
        cy.request({ url: href, failOnStatusCode: false })
          .then((response) => {
            expect(response.status).to.be.within(200, 399);
          });
      } else if (href.includes('facebook.com')) {
        cy.log(`Skipping Facebook link: ${href}`);
      }
    });
  });
});
