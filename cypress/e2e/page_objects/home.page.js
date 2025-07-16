class HomePage {
get contactUsbtn() {return cy.get ('.nav > .highlight > a')};
getPageTitle() {
  return cy.title()
}
}
export default new HomePage();