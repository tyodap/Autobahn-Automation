/// <reference types="Cypress" />

import {locators} from '../pages/page'

const lastName = 'Test' + new Date().getTime()
const email = "kiuxwwxtdss@bugfoo.com" //Please change the email from https://mail.tm/en/
const password = 'Autobahn=2023'

// Function for generate phone number
const char = '0123456789'
const phonenumber = '813'+ generatePhone(8)
function generatePhone(length){
    let result = '';
    const charactersLength = char.length;
    for (let i=0; i<length; i++){
        result += char.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
}

describe('Autobahn Automation', () => {
    it('Autobahn Sign Up', () => {
        cy.visit("https://autobahn.security/signup").wait(1000)
        cy.xpath(locators.workEmail).type(email)
        cy.xpath(locators.password).type(password)
        cy.xpath(locators.signUpButton).click().wait(5000)
        cy.xpath(locators.firstName).type("Autobahn")
        cy.xpath(locators.lastName).type(lastName)
        cy.xpath(locators.industry).type("{downArrow}{enter}")
        cy.xpath(locators.countryChoose).type("i{downArrow}{downArrow}{enter}") //Choose Indonesia as Country Code
        cy.xpath(locators.phoneNumber).type(phonenumber)
        cy.xpath(locators.confirmationButton).click()
        cy.xpath(locators.createNewAccountButton).click()
        cy.xpath(locators.verifyEmail).should('contain', 'Verify Your Email')  // Assertion for verify your email
    })
})