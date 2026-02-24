import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SliderCustom from "../../components/SliderCustom";

const DetailPost = () => {
  const { postId } = useParams();
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    postId && dispatch(actions.getPostsLimit({ id: postId }));
  }, [postId]);

  return (
    <div className="w-full flex gap-4">
      <div className="w-[70%] bg-red-300">
        <SliderCustom
          images={
            posts && posts.length > 0 && JSON.parse(posts[0]?.images?.image)
          }
        />
      </div>

      <h1>{posts[0]?.title}</h1>

      <div className="w-[30%]">Sidebar</div>
    </div>
  );
};

export default DetailPost;
