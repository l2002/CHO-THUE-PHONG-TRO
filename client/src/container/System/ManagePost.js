import React from "react";

const ManagePost = () => {
  return (
    <div>
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
      <table class="w-full">
        <thead>
          <tr>
            <th>Mã tin</th>
            <th>Ảnh đại diện</th>
            <th>Tiêu đề</th>
            <th>Giá</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày hết hạn</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManagePost;
