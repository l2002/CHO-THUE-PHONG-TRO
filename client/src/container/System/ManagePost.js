import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { Button, UpdatePost } from "../../components";
import moment from "moment";

const ManagePost = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { postOfCurrent, dataEdit } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(actions.getPostsLimitAdmin());
  }, []);

  useEffect(() => {
    !dataEdit && setIsEdit(false);
  }, [dataEdit]);

  const checkStatus = (dateString) =>
    moment(dateString, process.env.REACT_APP_FORMAT_DATE).isSameOrAfter(
      new Date().toDateString(),
    );

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
      <table className="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-gray-100">
            <th className="border flex-1 p-2">Mã tin</th>
            <th className="border flex-1 p-2">Ảnh đại diện</th>
            <th className="border flex-1 p-2">Tiêu đề</th>
            <th className="border flex-1 p-2">Giá</th>
            <th className="border flex-1 p-2">Ngày bắt đầu</th>
            <th className="border flex-1 p-2">Ngày hết hạn</th>
            <th className="border flex-1 p-2">Trạng thái</th>
            <th className="border flex-1 p-2">Tùy chọn</th>
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
                <tr className="flex items-center h-16" key={item.id}>
                  <td className="border px-2 flex-1 flex justify-center items-center h-full">
                    {item?.overviews?.code}
                  </td>
                  <td className="border px-2 flex-1 flex justify-center items-center h-full">
                    <img
                      src={JSON.parse(item?.images?.image)[0] || ""}
                      alt="avatar-post"
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  </td>
                  <td className="border px-2 flex-1 flex justify-center items-center h-full">
                    {`${item?.title.slice(0, 40)}...`}
                  </td>
                  <td className="border px-2 flex-1 flex justify-center items-center h-full">
                    {item?.attributes?.price}
                  </td>
                  <td className="border px-2 flex-1 flex justify-center items-center h-full">
                    {item?.overviews?.created}
                  </td>
                  <td className="border px-2 flex-1 flex justify-center items-center h-full">
                    {item?.overviews?.expired}
                  </td>
                  <td className="border px-2 flex-1 flex justify-center items-center h-full">
                    {checkStatus(item?.overviews?.expired?.split(" ")[3])
                      ? "Đang hoạt động"
                      : "Đã hết hạn"}
                  </td>
                  <td className="border px-2 flex-1 flex justify-center items-center h-full gap-2">
                    <Button
                      onClick={() => {
                        dispatch(actions.editData(item));
                        setIsEdit(true);
                      }}
                      hover="hover:bg-green-400"
                      text="Sửa"
                      bgColor="bg-green-500"
                      textColor="text-white"
                      fullWidth
                    />
                    <Button
                      hover="hover:bg-orange-400"
                      text="Xóa"
                      bgColor="bg-orange-500"
                      textColor="text-white"
                      fullWidth
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
    </div>
  );
};

export default ManagePost;
