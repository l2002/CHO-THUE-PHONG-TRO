import { useEffect } from "react";
import { Button } from "../../components";
import { Item } from "../../components";
import { getPosts, getPostsLimit } from "../../store/actions/post";
import { useDispatch, useSelector } from "react-redux";

const List = ({ page }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    let offset = page ? page - 1 : 0;
    dispatch(getPostsLimit(offset));
  }, [page]);

  return (
    <div className="w-full rounded-md p-2 bg-white shadow-md px-6">
      <div className="flex items-center justify-between my-3">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 13:00 16/11/2025</span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>Sắp xếp:</span>
        <Button bgColor="bg-gray-200" text="Đề xuất" />
        <Button bgColor="bg-gray-200" text="Mới đăng" />
        <Button bgColor="bg-gray-200" text="Có video" />
      </div>
      <div>
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images?.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
                id={item?.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
