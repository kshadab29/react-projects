import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../store/post-list-store";
import { v4 as uuidv4 } from 'uuid';

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <div className="card post-cards" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          onClick={() => deletePost(post.id)}
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {<MdDelete />}
        </span>
        <p className="card-text">{post.body}</p>
          <span className="badge text-bg-primary hashtag">
            {post.tags}
          </span>
        <div className="alert alert-success mt-2" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
