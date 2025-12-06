import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPost = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.post);

  const post = posts?.find((i) => i.postId === id);
  console.log("post.images:", post?.images);

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.address}</p>
      <div>{post?.description}</div>
    </div>
  );
};

export default DetailPost;
