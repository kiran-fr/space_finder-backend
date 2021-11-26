import { WebActionTypes } from "../../constants/action_type";
import { AllActions } from "../../actions/allActions";
import * as Reducers from '../../Reducers/userReducer';

describe('User Reducer Specification', () => {
    it('should run user reducer', async() => {
      const expectedActions: AllActions = {
          type: WebActionTypes.set_users,
          users:[]
      }
      const response = Reducers.usersReducer(undefined,expectedActions);
      expect(response).toEqual([]);
    })

    it('should run user success reducer', async() => {
      const mock = [
        { "firstname": "keith", "lastname": "rith", "age": 36, "country": "uk" },
        { "firstname": "venk", "lastname": "sur", "age": 34, "country": "uk"  }];
      const expectedActions: AllActions = {
          type: WebActionTypes.set_users,
          users:mock
      }
      const response = Reducers.usersReducer(undefined,expectedActions);
      expect(response).toEqual(mock);
    })

    it('should run user default reducer', async() => {
     
      const usersIntialState = { users: [] as any[]};
      const expectedActions: AllActions = {
          type: WebActionTypes.set_User_id,
          usersbyId: usersIntialState.users
      }

      const response = Reducers.usersReducer(usersIntialState,expectedActions);
      console.log(response);
      console.log(usersIntialState);
      expect(response.users).toEqual(usersIntialState.users);
    })
});