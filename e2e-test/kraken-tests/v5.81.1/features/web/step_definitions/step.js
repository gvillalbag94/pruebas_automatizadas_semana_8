
const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');
const assert = require('assert');

When('I login with incorrect credentials', async function () {
    let emailElement = await this.driver.$("#identification");
    await emailElement.setValue('user@example.co');
    let passwordElement = await this.driver.$("#password");
    await passwordElement.setValue('123456789');
    await new Promise(r => setTimeout(r, 300))
    let loginButtonElement = await this.driver.$("#ember5");
    return await loginButtonElement.click();
});

When('I login with correct credentials {kraken-string} {kraken-string}', async function (email, password) {
    let emailElement = await this.driver.$("#identification");
    await emailElement.setValue(email);
    let passwordElement = await this.driver.$("#password");
    await passwordElement.setValue(password);
    await new Promise(r => setTimeout(r, 300))
    let loginButtonElement = await this.driver.$("#ember5");
    return await loginButtonElement.click();
  });

When('I check go to the {kraken-string} page', async function (page) {
    let currentUrl = await this.driver.getUrl();
    return expect(currentUrl).to.contains(page);
  });

When('I open the profile settings', async function () {
    let userSettingsButton = await this.driver.$(".pe-all");
    return await userSettingsButton.click();
  });

When('I select the sign out',  async function () {
    let userLogOutButton = await this.driver.$('a[href="#/signout/"]');
    return await userLogOutButton.click();
  });

When('I go to pages screen', async function () {
    let pagesButton = await this.driver.$('a[href="#/pages/"]');
    await pagesButton.click();
    await new Promise(r => setTimeout(r, 1500));
    let currentUrl = await this.driver.getUrl();
    return expect(currentUrl).to.contains('/pages');
  });

When('I select go to the page form', async function () {
    let pagesButton = await this.driver.$('a[href="#/editor/page/"]');
    await pagesButton.click();
    await new Promise(r => setTimeout(r, 500));
    let currentUrl = await this.driver.getUrl();
    return expect(currentUrl).to.contains('/editor/page');
  });

When('I fill the title {kraken-string} and description', async function (titlePost) {
    let titleTextArea = await this.driver.$('textarea[placeholder="Page title"]');
    await titleTextArea.setValue(titlePost);

    let descriptionTextArea = await this.driver.$('.kg-prose');
    return await descriptionTextArea.setValue(faker.lorem.sentence());
  });

  When('I open-close the page settings', async function () {
    let buttonSettings = await this.driver.$('button[title="Settings"]');
    return await buttonSettings.click();
  });


When('I fill a page url {kraken-string}', async function (urlPost) {
    let slugText = await this.driver.$('input[name="post-setting-slug"]');
    return await slugText.setValue(urlPost);
  });

When('I publish the page', async function () {
    let publishButton = await this.driver.$('button[data-test-button="publish-flow"]');
    return await publishButton.click();
  });

When('I return to the dashboard', async function () {
    let backButton = await this.driver.$('a[class="ember-view gh-back-to-editor"]');
    return await backButton.click();
  });

  When('I update the page', async function () {
    let updateButton = await this.driver.$('button[data-test-button="publish-save"]');
    return await updateButton.click();
  });

  When('I return to the pages screens', async function () {
    let backButton = await this.driver.$('a[href="#/pages/"]');
    return await backButton.click();
  });

  

When('I confirm the publish page', async function () {
    let continueButton = await this.driver.$('button[data-test-button="continue"]');
    await continueButton.click();
    await new Promise(r => setTimeout(r, 500));
    let confirmButton = await this.driver.$('button[data-test-button="confirm-publish"]');
    return await confirmButton.click();
  });
  
When('I deleted the page', async function () {
    let deleteButton = await this.driver.$('button[data-test-button="delete-post"]');
     await deleteButton.click();
     await new Promise(r => setTimeout(r, 500));
    let confirmDeleteButton = await this.driver.$('button[data-test-button="delete-post-confirm"]');
    return await confirmDeleteButton.click();
  });

Then('I check return to the sign in page', async function () {
    let currentUrl = await this.driver.getUrl();
    return expect(currentUrl).to.contains('signin');
  });

Then('I check a error message {kraken-string}', async function (error) {
    let errorItem = await this.driver.$(".main-error");
    return expect(await errorItem.getText()).to.contains(error);
});

Then('I check exist the page with name {kraken-string}', async function (titlePage) {
    let pageCreated = await this.driver.$(".//*//h3[text() = '" + titlePage + "']");
    return expect(await pageCreated.isExisting()).to.be.true;
  });

Then('I check not exist the page with name {kraken-string}', async  function (titlePage) {
    let pageCreated = await this.driver.$(".//*//h3[text() = '" + titlePage + "']");
    return expect(await pageCreated.isExisting()).to.not.be.true;
  });

Then('I open the page with name {kraken-string}', async function (pageName) {
    let pageCreated = await this.driver.$(".//*//div[contains(@class, 'posts-list gh-list  feature-memberAttribution')]//*//h3[text() = '" + pageName + "']");
    return await pageCreated.click();
  });

Then('I select the member created {string}', async function(member) {
    let element = await this.driver.$(".//*//tbody[contains(@class, 'ember-view')]//*//h3[text() = '" + member + "']");
    return await element.click();
});

Then('I edit the title with the name {kraken-string}', async function (newTitle) {
    let titleTextArea = await this.driver.$('textarea[placeholder="Page title"]');
    return await titleTextArea.setValue(newTitle);
  });

Then('I choose a Tag', async function () {
    let tagCombo = await this.driver.$("#tag-input > ul > input.ember-power-select-trigger-multiple-input");
    await tagCombo.setValue('News');
    await new Promise(r => setTimeout(r, 500));
    let tagOption = await this.driver.$(".//*//li[text() = 'News']");
    return await tagOption.click();
  });

  
When('I enter identification {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
});

When('I click members', async function() {
    let element = await this.driver.$('a[data-test-nav=members]');
    return await element.click();
});

When('I click new member', async function() {
    let element = await this.driver.$('a[data-test-new-member-button=true]');
    return await element.click();
});

When('I click on the name inputbox', async function() {
    let element = await this.driver.$('#member-name');
    return await element.click();
});

When('I click on the email inputbox', async function() {
    let element = await this.driver.$('#member-email');
    return await element.click();
});

When('I click on the label inputbox', async function() {
    let element = await this.driver.$('input.ember-power-select-trigger-multiple-input');
    return await element.click();
});

When('I click on Add label1', async function() {
    let element = await this.driver.$('li.ember-power-select-option');
    return await element.click();
});

When('I click save', async function() {
    let element = await this.driver.$('button[data-test-button=save]');
    return await element.click();
});

Then('I click the second member {kraken-string}', async function(member) {
    let element = await this.driver.$(".//*//tbody[contains(@class, 'ember-view')]//*//h3[text() = '" + member + "']");
    return await element.click();
});

Then('I click the configuration button', async function() {
    let element = await this.driver.$('button[data-test-button=member-actions]');
    return await element.click();
});

Then('I click the delete button', async function() {
    let element = await this.driver.$('button[data-test-button=delete-member]');
    return await element.click();
});

Then('I click the confirm delete button', async function() {
    let element = await this.driver.$('button[data-test-button=confirm]');
    return await element.click();
});

Then('I click dashboard', async function() {
    let element = await this.driver.$('a[data-test-nav=dashboard]');
    return await element.click();
});

Then('I clear the text on the name inputbox', async function() {
    let element = await this.driver.$('#member-name');
    element.setValue('')
    return await element.click();
});

Then('I clear the text on the email inputbox', async function() {
    let element = await this.driver.$('#member-email');
    element.setValue('')
    return await element.click();
});

Then('I click the search field', async function() {
    let element = await this.driver.$('input[data-test-input=members-search]');
    return await element.click();
});

Then('I click the filter button', async function() {
    let element = await this.driver.$('div[data-test-button=members-filter-actions]');
    return await element.click();
});

Then('I click the first selector', async function() {
    let element = await this.driver.$('select[data-test-select=members-filter]');
    return await element.click();
});

Then('I click the Label option', async function() {
    let element = await this.driver.$('option[value=label]');
    return await element.click();
});

Then('I click the search inputbox', async function() {
    let element = await this.driver.$('input.ember-power-select-trigger-multiple-input');
    return await element.click();
});

Then('I click the label1 option', async function() {
    let element = await this.driver.$('span.dropdown-label');
    return await element.click();
});

Then('I click Apply filters', async function() {
    let element = await this.driver.$('button[data-test-button=members-apply-filter');
    return await element.click();
});

Then('I click the logo', async function() {
    let element = await this.driver.$('svg.w3.mr1.fill-darkgrey');
    return await element.click();
});

Then('I click log out', async function() {
    let element = await this.driver.$('a.ember-view.dropdown-item.user-menu-signout');
    return await element.click();
});

Then('I test the new member exists', async function() {
    let bodyText = await this.driver.$('body').getText();
    assert(bodyText.includes('prueba@gmail.com'), `Expected text "${'prueba@gmail.com'}" not found in page`);
});

Then('I test the second member created is deleated', async function() {
    let bodyText = await this.driver.$('body').getText();
    assert(!(bodyText.includes('prueba2@gmail.com')), `Expected text "${'prueba2@gmail.com'}" found in page`);
});

Then('I test the second member is edited', async function() {
    let bodyText = await this.driver.$('body').getText();
    assert(bodyText.includes('editado@gmail.com'), `Expected text "${'editado@gmail.com'}" not found in page`);
});

Then('I test the second searched member is deleated', async function() {
    let bodyText = await this.driver.$('body').getText();
    assert(!(bodyText.includes('Busqueda1@gmail.com')), `Expected text "${'Busqueda1@gmail.com'}" found in page`);
});

Then('I test the Filter member is listed', async function() {
    let bodyText = await this.driver.$('body').getText();
    assert(bodyText.includes('Filtro1@gmail.com'), `Expected text "${'Filtro1@gmail.com'}" not found in page`);
});


When('I enter my user {kraken-string}', async function (value) {
    let element = await this.driver.$('#identification');
    return await element.setValue(value);
});

When('I enter my password {kraken-string}', async function (value) {
    let element = await this.driver.$('#password');
    return await element.setValue(value);
});

Then('I click on Login', async function () {
    let element = await this.driver.$('#ember5');
    return await element.click();
});

When('I navigate to the draft section', async function () {
    let element = await this.driver.$('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(1)');
    return await element.click();
});


When('I click on the Edit Draft button', async function () {
    let element = await this.driver.$('body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div > li > a');
    return await element.click();
});


When('I click on publish button', async function () {
    let element = await this.driver.$('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger > span');
    return await element.click();
});


When('I click on continue final review button', async function () {
    let element = await this.driver.$('body > div.epm-modal-container > div>  div > div > div.gh-publish-cta > button ');
    return await element.click();
});

When('I click on publish post button', async function () {
    let element = await this.driver.$('body > div.epm-modal-container > div>  div > div > div.gh-publish-cta > button ');
    return await element.click();
});


Then('I click on Editor', async function () {
    let element = await this.driver.$('body > div.epm-modal-container > div > div > header > button > span');
    return await element.click();
});


Then('I click on Post', async function () {

    let element = await this.driver.$('body > div.gh-app > div > main > div.flex.flex-row > section > header > div > a > span');
    return await element.click();
});

When('I navigate to the published section', async function () {
    let element = await this.driver.$('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(3)');
    return await element.click();
});


Then('The draft was published', async function () {
    let actualMessageElement = await this.driver.$('body > div.gh-app > div > main > section > div > header > div > h2');
    let actualMessage = await actualMessageElement.getText(); // Obtenemos el texto completo
    if (actualMessage.trim() === "Published") { // Usamos trim() para eliminar espacios en blanco al principio y al final
        console.log("The draft message is correct: ", actualMessage);
    } else {
        throw new Error("Expected message: Published. but found: " + actualMessage);
    }
});

Then('I click on Profile', async function () {
    let element = await this.driver.$('body > div.gh-app > div > nav.gh-nav > div > section > div > div > div > div > div > div > div:nth-child(1)');
    return await element.click();
});


Then('I click on Logout', async function () {
    /*let element = await this.driver.$('body > div > div > ul > li:nth-child(9)');*/
    let element = await this.driver.$('a[class="ember-view dropdown-item user-menu-signout"]');
    return await element.click();
});



/*Escenario 2 UnPublish a post*/


When('I click on the Edit Published register button', async function () {
    let element = await this.driver.$('body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div > li > a');
    return await element.click();
});


When('I click on Edit post Published', async function () {

    let element = await this.driver.$('body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1) > li > a > span')
    return await element.click();
});

When('I click on Unpublish', async function () {
    let element = await this.driver.$('body > div.gh-app > div > main > div.flex.flex-row> section > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger > span');
    return await element.click();
});

When('I click on Unpublish and revert to private draft', async function () {
    let element = await this.driver.$('body > div.epm-modal-container> div > div > div > div.gh-publish-confirmation > p > button > span');
    return await element.click();
});


Then('The post was Unpublished', async function () {
    let actualMessageElement = await this.driver.$('body > div.gh-app > div > main > section > div > header > div > h2');
    let actualMessage = await actualMessageElement.getText(); // Obtenemos el texto completo
    if (actualMessage.trim() === "Drafts") { // Usamos trim() para eliminar espacios en blanco al principio y al final
        console.log("The draft message is correct: ", actualMessage);
    } else {
        throw new Error("Expected message: Published. but found: " + actualMessage);
    }
});


Then('The drafts List', async function () {
    let actualMessageElement = await this.driver.$('body > div.gh-app > div > main > section > div > header > div > h2');
    let actualMessage = await actualMessageElement.getText(); // Obtenemos el texto completo
    if (actualMessage.trim() === "Drafts") { // Usamos trim() para eliminar espacios en blanco al principio y al final
        console.log("The draft message is correct: ", actualMessage);
    } else {
        throw new Error("Expected message: Published. but found: " + actualMessage);
    }
});



When('I navigate to the Sheduled section', async function () {
    let element = await this.driver.$('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(2)');
    return await element.click();
});

When('I click on Show all post', async function () {
    /*let element = await this.driver.$('body > div.gh-app > div > main > section > section > div.posts-list.gh-list.no-posts.feature-memberAttribution > li > div > a > span');*/
    let element = await this.driver.$('a[data-test-link="show-all"]');
    return await element.click();
});

Then('The Post List', async function () {
    /*let actualMessageElement = await this.driver.$('body > div.gh-app > div > main > section > div > header > div > h2');*/
    let actualMessageElement = await this.driver.$('a[class="active ember-view"]');
    let actualMessage = await actualMessageElement.getText(); // Obtenemos el texto completo
    if (actualMessage.trim() === "Posts") { // Usamos trim() para eliminar espacios en blanco al principio y al final
        console.log("The draft message is correct: ", actualMessage);
    } else {
        throw new Error("Expected message: Published. but found: " + actualMessage);
    }
});

Then('The published List', async function () {
    let actualMessageElement = await this.driver.$('body > div.gh-app > div > main > section > div > header > div > h2');
    let actualMessage = await actualMessageElement.getText(); // Obtenemos el texto completo
    if (actualMessage.trim() === "Published") { // Usamos trim() para eliminar espacios en blanco al principio y al final
        console.log("The draft message is correct: ", actualMessage);
    } else {
        throw new Error("Expected message: Published. but found: " + actualMessage);
    }
});


// inicio de sesion
When('I enter email {kraken-string}', async function (identification) {
    let element = await this.driver.$('#identification');
    return await element.setValue(identification);
});

// When('I enter password {kraken-string}', async function (password) {
//     let element = await this.driver.$('#password');
//     return await element.setValue(password);
// });

When('I click in sign in', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
});

// creacion de un nuevo tag
When('I click in Tags', async function() {
    let element = await this.driver.$('a[data-test-nav="tags"]');
    return await element.click();
});

When('I click in New Tag', async function() {
    let element = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary"]');
    return await element.click();
});

When('I enter a name of tag {kraken-string}', async function (name) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(name);
});

When('I click in save', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    return await element.click();
});


Then('I confirm that the tag was create', async function() {
    let element = await this.driver.$('a[data-test-nav="tags"]');
    return await element.click();
});



// Edicion de un tag publico
When('I click in tag', async function() {
    let element = await this.driver.$('li[data-test-tag = "6638206d13b8100ae3c4dfe6"]');
    return await element.click();
});

When('I enter a description of tag {kraken-string}', async function (name) {
    let element = await this.driver.$('textarea[class="gh-input gh-tag-details-textarea"]');
    return await element.setValue(name);
});

Then('I confirm that the tag was edit', async function() {
    let element = await this.driver.$('li[data-test-tag = "6638206d13b8100ae3c4dfe6"]');
    return await element.click();
});

// Eliminacion del tag publica
When('I click in tag to delete', async function() {
    let element = await this.driver.$('li[data-test-tag = "66381fa613b8100ae3c4dfcc"]');
    return await element.click();
});

When('I click in delete tag', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon"]');
    return await element.click();;
});

When('I confirm the action', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();;
});

Then('I confirm that the tag do not exist', async function() {
    let element = await this.driver.$('a[data-test-nav="tags"]');
    return await element.click();
});

//Creacion de un internal tag
When('I click in internal tags', async function () {
    let element = await this.driver.$('button[class="gh-btn "]');
    return await element.click();;
});



//Edicion de un internal tag
//When('I click in internal tag', async function() {
//    let element = await this.driver.$('li[data-test-tag = "663808ec13b8100ae3c4dd82"]');
//    return await element.click();
//});

When('I get the tag created', async function () {
    let element = await this.driver.$('.tags-list li:nth-last-child(2)')
    await element.click();
})

/* Code by Victor */


When('I click on the New Draft button', async function () {
    let element = await this.driver.$('body > div.gh-app > div > main > section > div > header > section > div.view-actions-top-row > a');
    return await element.click();
});


When('I enter new Post Title {kraken-string}', async function (title) {
    let titleElement = await this.driver.$('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]');
    return await titleElement.setValue(title);
});


When('I click on settings', async function () {
    let element = await this.driver.$('body > div.gh-app > div > main > button > span');
    return await element.click();
});


When('I enter my user old version {kraken-string}', async function (value) {
    let element = await this.driver.$('input[type="email"]');
    return await element.setValue(value);
});

When('I enter my password old version {kraken-string}', async function (value) {
    let element = await this.driver.$('input[type="password"]');
    return await element.setValue(value);
});



Then('I click on Login old version', async function () {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
});


When('I navigate to the draft section old version',  async function () {
    let element = await this.driver.$('a[href="#/posts/?type=draft"]');
    return await element.click();
});


When('I click on the New Draft button old version', async function () {
    let element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
});



Then('I enter new Post Title old version {kraken-string}', async function (title) {
    let titleElement = await this.driver.$('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]');
    return await titleElement.setValue(title);
});


When('I click on settings old version', async function () {
    let element = await this.driver.$('.post-settings');
    return await element.click();
});

When('I click on Post old version', async function () {

    let element = await this.driver.$('a[href="#/posts/?type=draft"]');
    return await element.click();
});

When('I click on Profile old version', async function () {
    let element = await this.driver.$('.gh-user-name');
    return await element.click();
});


When('I click on Logout old version', async function () {
    /*let element = await this.driver.$('body > div > div > ul > li:nth-child(9)');*/
    let element = await this.driver.$('a[href="#/signout/"]');
    return await element.click();
});

/* Code Finish by Victor*/






