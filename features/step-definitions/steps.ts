import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^I am on the login page$/, async () => {
    expect(browser).toHaveTitleContaining("Google");
});

When(/^I verify google search bar is displayed$/, async () => {
    let element = await $("input[name='q'");
    expect(element.isDisplayed()).toBeDisplayedInViewport();
});

Then(/^I validate page launched$/, async () => {
    await expect(browser).toHaveUrlContaining("https://www.google.com/");
});

