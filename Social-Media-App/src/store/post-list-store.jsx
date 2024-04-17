import { createContext, useReducer} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi Freinds, I am going to mumbai for my vacations. Hope to Enyou alot. peace out!.",
//     reactions: 2,
//     userId: "user-1",
//     tags: ["vacation", "mumbai", "enjoying"],
//   },
//   {
//     id: "2",
//     title: "Pass ho gye bhai ",
//     body: "4 saal ki masti k baad bhi ho gye hain pass. Hard to believe",
//     reactions: 15,
//     userId: "user-2",
//     tags: ["graduating", "unbelievable"],
//   },
// ];

export default PostListProvider;
