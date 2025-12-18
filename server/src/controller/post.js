import * as postsService from "../service/post";

export const getPosts = async (req, res) => {
  try {
    const response = await postsService.getPostsService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller" + error,
    });
  }
};

export const getPostsLimit = async (req, res) => {
  const { page, ...query } = req.query;
  try {
    const response = await postsService.getPostsLimitService(page, query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller" + error,
    });
  }
};

export const getNewPost = async (req, res) => {
  try {
    const response = await postsService.getNewPostService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller" + error,
    });
  }
};
