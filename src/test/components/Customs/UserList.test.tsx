import React from "react";
import ReactDOM  from "react-dom";
import { act } from "react-dom/test-utils";
import {UserList} from '../../../basmodule';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
document.body.removeChild(container);
  container = null;
});

it("renders with or without a name",
 () => {
    const userMock =[{
        firstname:"firstname",
        lastname: "lastname",
        age:"age",
        country:"country"
      }]
  act(() => {
     
      ReactDOM.render(<UserList user={userMock} />, container);
      const tdFile = container.querySelector('th');  
      expect(tdFile.textContent).toBe("First Name");
  });

  act(() => {
    const defaultUserMock =[]
    ReactDOM.render(<UserList user={defaultUserMock} />, container);
    const tdFile = container.querySelector('th');  
    expect(tdFile.textContent).toBe("First Name");
});
});

