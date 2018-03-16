import { browser, by, element } from 'protractor';

describe('Babies test', () => {
  it('Should create a new baby when form is valid', async() => {
    // How many babies?
    // Create a new baby
    // How many babies?
    // Assert: One more baby
    
    browser.get("/users-list"); // Page reloads, 1 sec or 2.
    element.all(by.css(".e2e-baby")).then(function(elementsBefore) {
      const numBabiesBefore = elementsBefore.length;
      element(by.id("register")).click();
      
      // element.all(by.css("formcontrolname"))
      element(by.id("firstname")).sendKeys("Test - Michael");
      element(by.id("postalCode")).sendKeys("Test - 2900");
      element(by.id("picture")).sendKeys("TEST - no picture");
      element(by.id("age")).sendKeys("4");
      element(by.id("gender")).sendKeys("Test - Male");

      element(by.id("e2e-submit")).click();

      element.all(by.css(".e2e-baby")).then(function(elementsAfter) {
        const numBabiesAfter = elementsAfter.length;
        
        expect(numBabiesAfter).toBe(numBabiesBefore+1);
        
        
        // expect(numBabiesAfter-numBabiesBefore).toBe(1);

        // console.log(numBabiesBefore);
        // browser.sleep(8000);
      });
    });
    
    
  });

  it('Should NOT create a new baby when form is NOT valid', async() => {
    expect(false).toBeTruthy();
  });
})