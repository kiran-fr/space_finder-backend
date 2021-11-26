const configuremockStore = require("redux-mock-store").default;
import { WebActionTypes } from "../../constants/action_type";
import * as UserActions from "../../actions/userAction";

const middlewares: any = [];
const mockStore = configuremockStore(middlewares);
const usersIntialState: [] = [];
const store = mockStore(usersIntialState);

describe("User Action Specification", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("it should dispatch user Action on success", async () => {
    const expectedActions = [
      {
        type: WebActionTypes.set_users,
        users: [] as any[],
      },
    ];
    store.dispatch(UserActions.setUsers([]));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
