const functions = require("./functions");

//   toBe
test("The sum of 3 + 3 is equal to 6 ", () => {
  expect(functions.add(3, 3)).toBe(6);
});

//   not.toBe
test("The sum of 3 + 3 not eqaul to 8", () => {
  expect(functions.add(3, 3)).not.toBe(8);
});

//   toBeNull
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// toStricEqual
test("user should be Riyaz Qureshi object", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Riyaz",
    lastName: "Qureshi",
  });
});

// less than and greater than and Equal to

// toBeLessThan
test("should be less than 1600", () => {
  const num1 = 800;
  const num2 = 500;
  expect(num1 + num2).toBeLessThan(1600);
});

//toBeLessThanOrEqual
test("should be under 1600", () => {
  const num1 = 800;
  const num2 = 800;
  expect(num1 + num2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in a Team", () => {
  expect("Team").not.toMatch(/I/);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["Raunak", "Admin", "Riyaz"];
  expect(usernames).toContain("Admin");
});


//  working with async data


// promise

test("user fetched name should be Kurtis Weissnat ", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Kurtis Weissnat')
  })
});


// Async Await

// test('user fetched name should be kurtis weissnat', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Kurtis Weissnat');
// });


// ********* note ***********

// If you want to run something before/after your tests
// you can use lifecycle methods

// will run before and after each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// will run after all the tests have run
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());
