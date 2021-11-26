import axios from "axios";
// import {envUrl} from '../../constants/allConstants';
import { getUserApi } from  '../../api/userApi';

jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('User Api Specification', () => {
 it('should run user resolved api', async() => { 
    const responseData = {data:{}}
    axios.get.mockResolvedValue(responseData);
    const response  = await getUserApi();
    // console.log('step + 1' + (JSON.stringify(response)));
    expect(response.data).toEqual(responseData.data);
 });
 it('should run user rejected api', async() => { 
    const responseData = 'Async error';
    axios.get.mockRejectedValue(responseData);
    const response  = await getUserApi();
    console.log('step + 1' + (JSON.stringify(response)));
    expect(response).toEqual(responseData);
 });
});