/// <reference types="cypress" />
import contactusPage from "../page_objects/contactus.page";
import homePage from "../page_objects/home.page";
describe('Contact Us', () => {
    beforeEach(() => {
      cy.fixture('userData').as('user');
      cy.visit('/');
    })
    it('Should be able to submit contact information', function(){
      homePage.contactUsbtn.click();
      homePage.getPageTitle().should('eq','Contact Leepfrog | Leepfrog Technologies');
      contactusPage.emailfield.type(this.user.email);
      contactusPage.errormsg;
      contactusPage.firstname.type(this.user.firstname);
      contactusPage.lastname.type(this.user.lastname);
      contactusPage.jobtitle.type(this.user.jobtitle);
      contactusPage.phonenbr.type(this.user.phonenumbr);
      contactusPage.institutionfield.type(this.user.institutionname);
      contactusPage.selectHelpTopic(this.user.helpTopic)
      contactusPage.selectlocation(this.user.location);
      contactusPage.selectamount(this.user.amount);
      contactusPage.msgfield.type(this.user.msg);
      contactusPage.agreebox;
      contactusPage.submitconfirmation;
    });
      });