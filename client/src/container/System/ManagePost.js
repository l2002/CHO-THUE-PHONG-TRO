import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import moment from "moment";

const ManagePost = () => {
  const dispatch = useDispatch();
  const { postOfCurrent } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(actions.getPostsLimitAdmin());
  }, []);

  const checkStatus = (datetime) => {
    let todayInSeconds = new Date().getTime();
    let expireDayInSeconds = datetime.getTime();
    return todayInSeconds >= expireDayInSeconds
      ? "Đang hoạt động"
      : "Đã hết hạn";
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="font-medium text-3xl ">Quản lý tin đăng</h1>
        <select
          name=""
          id=""
          className="outline-none border p-2 border-gray-200 rounded-md"
        >
          <option value="">Lọc theo trạng thái</option>
        </select>
      </div>
      <table class="w-full table-auto">
        <thead>
          <tr>
            <th className="border p-2">Mã tin</th>
            <th className="border p-2">Ảnh đại diện</th>
            <th className="border p-2">Tiêu đề</th>
            <th className="border p-2">Giá</th>
            <th className="border p-2">Ngày bắt đầu</th>
            <th className="border p-2">Ngày hết hạn</th>
            <th className="border p-2">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {!postOfCurrent ? (
            <tr>
              <td>Bạn chưa có tin đăng</td>
            </tr>
          ) : (
            postOfCurrent.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="border p-2 text-center">
                    {item?.overviews?.code}
                  </td>
                  <td className="border p-2 flex items-center justify-center">
                    <img
                      src={JSON.parse(item?.images?.image)[0] || ""}
                      alt="avatar-post"
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  </td>
                  <td className="border p-2 text-center">{item?.title}</td>
                  <td className="border p-2 text-center">
                    {item?.attributes?.price}
                  </td>
                  <td className="border p-2 text-center">
                    {item?.overviews?.created}
                  </td>
                  <td className="border p-2 text-center">
                    {item?.overviews?.expired}
                  </td>
                  <td className="border p-2 text-center">
                    {checkStatus(
                      new Date(item?.overviews?.expired?.split(" ")[3]),
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePost;
