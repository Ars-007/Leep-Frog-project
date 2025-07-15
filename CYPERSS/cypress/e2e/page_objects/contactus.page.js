class ContactUsPage 
{
get emailfield() {return cy.get('[name="email"]').click()};
get errormsg() {return cy.get('.hs-error-msg').should('have.text',"Please enter a different email address. This form does not accept addresses from icloud.com.")};
get firstname() {return cy.get('[name="firstname"]').click()};
get lastname() {return cy.get('[name="lastname"]').click()};
get jobtitle() {return cy.get('[name="jobtitle"]').click()};
get phonenbr() {return cy.get('[name="phone"]').click()};
get institutionfield() {return cy.get('[name="institution"]').click()};
selectHelpTopic(topicText) {
    cy.get('[name="how_can_we_help_you_"]').select(topicText)
};
selectlocation(location) { 
    cy.get('[name="location"]').select(location)
};
selectamount(amount) {
    cy.get('[name="full_time_enrollment"]').select(amount)
};
get msgfield() {return cy.get('[name="message"]').click()};
get agreebox() {return cy.get('[name="LEGAL_CONSENT.subscription_type_14475345"]').check()};
get submitbtn() {returncy.get('[type="submit"]').click()};
get submitconfirmation() {return cy.get('[type="submit"]').should('be.visible')};
}
export default new ContactUsPage();