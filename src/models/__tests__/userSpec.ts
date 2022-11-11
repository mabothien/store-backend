import UserModel from "../user";
const userModel = new UserModel()

describe("Test User Model Methods", ()=> {
  it('Get user by Id', () => {
    expect(userModel.getUserById).toBeDefined();
  })
  it('Get all user', () => {
    expect(userModel.index).toBeDefined();
  })
})
