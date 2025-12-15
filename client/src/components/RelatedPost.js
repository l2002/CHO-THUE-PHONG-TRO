import Sitem from "./Sitem";

const RelatedPost = () => {
  return (
    <div className="w-full bg-white rounded-md p-4">
      <h3 className="font-semibold text-lg mb-4">Tin mới đăng</h3>
      <div className="w-full flex flex-col gap-2">
        <Sitem
          price="10trieu/thang"
          title="Cho Thuê Nhà Nguyên Căn 4x25 Vị Trí Kinh Doanh hẻm 258 Dương Bá Trạc, Phường 2 Quận"
        />
        <Sitem
          price="10trieu/thang"
          title="Cho Thuê Nhà Nguyên Căn 4x25 Vị Trí Kinh Doanh hẻm 258 Dương Bá Trạc, Phường 2 Quận"
        />
        <Sitem
          price="10trieu/thang"
          title="Cho Thuê Nhà Nguyên Căn 4x25 Vị Trí Kinh Doanh hẻm 258 Dương Bá Trạc, Phường 2 Quận"
        />
      </div>
    </div>
  );
};

export default RelatedPost;
