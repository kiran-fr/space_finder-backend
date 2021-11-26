import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import { getUserApi } from "../../api/userApi";
import * as userApi from "../../api/userApi";
import { UserList, LandinPage } from "../../basmodule";
// import { LandinPage } from "../../pages/LandingPage";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders user data", async () => {
  const fakeUser = {
    firstname: "Joni Baez",
    lastname:"last name",
    age: "32"
  
  };

  jest.spyOn(userApi,'getUserApi').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<UserList user={fakeUser} />, container);
  });

//   console.log(expect(container.querySelector("div")));
//   expect(container.querySelector("div").textContent).toBe(fakeUser.name);
//   expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
//   expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated
//   global.fetch.mockRestore();
});