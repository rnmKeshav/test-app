import selectedUsers from "../../src/reducers/selected_users";
import { actionTypes } from "../../src/helpers/constants";

describe("Selected_users reducer test", () => {
  let selectedUser = {
    login: "rnmp",
    id: 22627,
    node_id: "MDQ6VXNlcjIyNjI3",
    avatar_url: "https://avatars0.githubusercontent.com/u/22627?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rnmp",
    html_url: "https://github.com/rnmp",
    followers_url: "https://api.github.com/users/rnmp/followers",
    following_url: "https://api.github.com/users/rnmp/following{/other_user}",
    gists_url: "https://api.github.com/users/rnmp/gists{/gist_id}",
    starred_url: "https://api.github.com/users/rnmp/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rnmp/subscriptions",
    organizations_url: "https://api.github.com/users/rnmp/orgs",
    repos_url: "https://api.github.com/users/rnmp/repos",
    events_url: "https://api.github.com/users/rnmp/events{/privacy}",
    received_events_url: "https://api.github.com/users/rnmp/received_events",
    type: "User",
    site_admin: false,
    score: 32.814484
  };
  test("Should match initial state", () => {
    expect(
      selectedUsers(undefined, {
        type: actionTypes["SOME_UNDEFINED_ACTION"]
      })
    ).toMatchSnapshot();
  });

  test("Should add new user if not already exist", () => {
    expect(
      selectedUsers(undefined, {
        type: actionTypes["SELECTED_USER/ADD_NEW"],
        payload: {
          user: selectedUser
        }
      })
    ).toMatchSnapshot();
  });

  test("Should update user if already exist", () => {
    let existingUserState = selectedUsers(undefined, {
      type: actionTypes["SELECTED_USER/ADD_NEW"],
      payload: {
        user: selectedUser
      }
    });
    let updatedUser = Object.assign({}, selectedUser, { score: 34 });
    expect(
      selectedUsers(existingUserState, {
        type: actionTypes["SELECTED_USER/ADD_NEW"],
        payload: {
          user: updatedUser
        }
      })
    ).toMatchSnapshot();
  });
});
