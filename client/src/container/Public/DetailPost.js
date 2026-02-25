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
  console.log(posts[0]?.description);

  useEffect(() => {
    postId && dispatch(actions.getPostsLimit({ id: postId }));
  }, [postId]);

  console.log(posts);

  return (
    <div className="w-full flex gap-4">
      <div className="w-[70%]">
        <SliderCustom
          images={
            posts && posts.length > 0 && JSON.parse(posts[0]?.images?.image)
          }
        />
        <div className="flex flex-col mt-2 gap-2 shadow-md rounded-md bg-white p-4">
          <h2 className="text-xl font-bold text-red-600">{posts[0]?.title}</h2>

          <div class="flex justify-between">
            <div class="flex items-center">
              <span class="text-green-600 text-lg font-bold">
                {posts[0]?.attributes?.price}
              </span>

              <span class="mx-3 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>

              <span>{posts[0]?.attributes?.acreage}</span>
            </div>

            <div>
              <span>{posts[0]?.attributes?.published}</span>
            </div>
          </div>

          <div className="mt-2">
            <table className="w-full border-collapse">
              <tbody className="align-middle">
                <tr>
                  <td className="pl-0 pb-1 whitespace-nowrap">
                    <div className="flex items-center text-gray-500">
                      <span className="text-blue-300 text-2xl leading-none mr-1">
                        •
                      </span>
                      Chuyên mục:
                    </div>
                  </td>
                  <td className="pb-1">
                    <a
                      href="https://phongtro123.com/tinh-thanh/ho-chi-minh/quan-binh-tan"
                      className="underline text-blue-600 hover:text-blue-800"
                      title="Cho thuê phòng trọ Quận Bình Tân"
                    >
                      {posts[0]?.overviews?.area}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="pl-0 pb-1">
                    <div className="flex items-center text-gray-500">
                      <span className="text-blue-300 text-2xl leading-none mr-1">
                        •
                      </span>
                      Tỉnh thành:
                    </div>
                  </td>
                  <td className="pb-1">
                    <div className="flex">
                      <a
                        href="/tinh-thanh/ho-chi-minh"
                        className="underline text-blue-600 hover:text-blue-800"
                      >
                        <p>{`${posts[0]?.address.split(",")[posts[0]?.address.split(",").length - 1]}`}</p>
                      </a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="pl-0 pb-1">
                    <div className="flex items-center text-gray-500">
                      <span className="text-blue-300 text-2xl leading-none mr-1">
                        •
                      </span>
                      Địa chỉ:
                    </div>
                  </td>
                  <td className="pb-1">{posts[0]?.address}</td>
                </tr>

                <tr>
                  <td className="pl-0 pb-1 whitespace-nowrap">
                    <div className="flex items-center text-gray-500">
                      <span className="text-blue-300 text-2xl leading-none mr-1">
                        •
                      </span>
                      Mã tin:
                    </div>
                  </td>
                  <td className="pb-1">{posts[0]?.attributes?.hashtag}</td>
                </tr>

                <tr>
                  <td className="pl-0 pb-1 whitespace-nowrap">
                    <div className="flex items-center text-gray-500">
                      <span className="text-blue-300 text-2xl leading-none mr-1">
                        •
                      </span>
                      Ngày đăng:
                    </div>
                  </td>
                  <td className="pb-1">{posts[0]?.overviews?.created}</td>
                </tr>

                <tr>
                  <td className="pl-0 pb-1 whitespace-nowrap">
                    <div className="flex items-center text-gray-500">
                      <span className="text-blue-300 text-2xl leading-none mr-1">
                        •
                      </span>
                      Ngày hết hạn:
                    </div>
                  </td>
                  <td className="pb-1">{posts[0]?.overviews?.expired}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t-2 mt-2">
            <h2 className="font-semibold mt-4">Thông tin mô tả</h2>
            <div className="flex flex-col gap-2">
              {(() => {
                try {
                  const parsed = JSON.parse(posts[0]?.description || "[]");

                  if (Array.isArray(parsed)) {
                    return parsed.map((item, index) => (
                      <span key={index}>{item}</span>
                    ));
                  }

                  return <span>{JSON.parse(posts[0]?.description)}</span>;
                } catch (err) {
                  return null;
                }
              })()}
            </div>
          </div>

          <div className="border-t-2">
            <h2 className="font-semibold mt-4">Thông tin liên hệ</h2>
            <table className="w-full">
              <tbody className="w-full">
                <tr className="w-full">
                  <td className="p-2">Liên hệ</td>
                  <td className="p-2">{posts[0]?.user?.name}</td>
                </tr>
                <tr className="w-full bg-gray-200">
                  <td className="p-2">Điện thoại</td>
                  <td className="p-2">{posts[0]?.user?.phone}</td>
                </tr>
                <tr className="w-full">
                  <td className="p-2">Zalo</td>
                  <td className="p-2">{posts[0]?.user?.zalo}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-[30%]">Sidebar</div>
    </div>
  );
};

export default DetailPost;
