const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "JuanMullert";
    const employeeInstance = new Engineer("Juan", 2, "jmullert9@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JuanMullert";
    const employeeInstance = new Engineer("Juan", 2, "jmullert9@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Juan", 2, "jmuller9t@gmail.com", "JuanMullert");
    expect(employeeInstance.getRole()).toBe(returnValue);
});