import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const DetailPost = () => {
  const { postId } = useParams();
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    postId && dispatch(actions.getPostsLimit({ id: postId }));
  }, [postId]);

  return (
    <div>
      <h1>{posts.title}</h1>
    </div>
  );
};

export default DetailPost;
