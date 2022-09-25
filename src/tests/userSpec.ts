import {User, UserStore} from '../models/user';

const store = new UserStore();

describe("User model", async function () {
  it("index method should return an array", async function () {
    const result = await store.index();
    expect(result.length).toEqual(1);
  });
});

describe("User model functions work as required", async function () {
  const testUser: User = {
    user_name: 'testName',
    email: 'testemail@mail.com',
    full_name: 'Testy McTest',
    password: 'tesypassword'
  };

  it("should create a new user", async function () {
    const newTestUser = await store.create(testUser);
    testUser.id = newTestUser.id;
    expect(newTestUser.user_name).toEqual(testUser.user_name);
  });

  it("should get user by ID", async function () {
    const userToGet = await store.getUserByID(testUser.id as unknown as number);
    expect(userToGet.id).toEqual(testUser.id as unknown as number);
  });

  /*it("should update user", async function () {
    const userToUpdate = await store.updateUser({
      user_name: 'testName up',
      id: testUser.id,
      email: 'testemail@mail.com',
      full_name: 'Testy McTest',
      password: 'tesypassword'
    });
    expect(userToUpdate.user_name).toEqual('testName up');
  });*/

  /*it("should delete user", async function () {
    const deletedUser = await store.deleteUser(testUser.id as unknown as number);
    expect(deletedUser.length).toEqual(1);
  });*/
});
