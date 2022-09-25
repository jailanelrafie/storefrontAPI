"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const store = new user_1.UserStore();
describe("User model", function () {
    return __awaiter(this, void 0, void 0, function* () {
        it("index method should return an array", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield store.index();
                expect(result.length).toEqual(1);
            });
        });
    });
});
describe("User model functions work as required", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const testUser = {
            user_name: 'testName',
            email: 'testemail@mail.com',
            full_name: 'Testy McTest',
            password: 'tesypassword'
        };
        it("should create a new user", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const newTestUser = yield store.create(testUser);
                testUser.id = newTestUser.id;
                expect(newTestUser.user_name).toEqual(testUser.user_name);
            });
        });
        it("should get user by ID", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const userToGet = yield store.getUserByID(testUser.id);
                expect(userToGet.id).toEqual(testUser.id);
            });
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
});
