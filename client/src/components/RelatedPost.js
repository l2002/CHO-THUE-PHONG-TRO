import Sitem from "./Sitem";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { useEffect, useState } from "react";

const RelatedPost = ({ newPost }) => {
  const { newPosts, outStandingPost } = useSelector((state) => state.post);
  const [posts, setPosts] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    newPost
      ? dispatch(actions.getNewPosts())
      : dispatch(actions.getOutStandingPost());
  }, []);

  useEffect(() => {
    newPost ? setPosts(newPosts) : setPosts(outStandingPost);
  }, [newPost, outStandingPost]);

  return (
    <div className="w-full bg-white rounded-md p-4">
      <h3 className="font-semibold text-lg mb-4">
        {newPost ? "Tin mới đăng" : "Tin nổi bật"}
      </h3>
      <div className="w-full flex flex-col gap-2">
        {posts?.map((item) => {
          return (
            <Sitem
              image={JSON.parse(item?.images?.image)}
              key={item.id}
              title={item.title}
              price={item?.attributes?.price}
              createdAt={item?.createdAt}
              star={item?.star}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPost;
