import { CreatePost } from "../container/System";

const UpdatePost = ({ setIsEdit }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsEdit(false);
      }}
      className="absolute top-0 left-0 right-0 bottom-0 bg-overlay-70 flex justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white max-w-1100 w-full overflow-y-auto"
      >
        <CreatePost isEdit />
      </div>
    </div>
  );
};

export default UpdatePost;
