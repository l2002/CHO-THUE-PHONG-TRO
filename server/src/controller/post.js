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
  const { page, priceNumber, areaNumber, ...query } = req.query;

  try {
    const response = await postsService.getPostsLimitService(page, query, {
      priceNumber,
      areaNumber,
    });
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

export const createNewPost = async (req, res) => {
  try {
    const { categoryCode, title, priceNumber, areaNumber, label } = req.body;
    const { id } = req.user;
    if (!categoryCode || !id || !title || !priceNumber || !areaNumber || !label)
      return res.status(400).json({
        err: 1,
        msg: "Missing input",
      });
    const response = await postsService.createNewPostSerVice(req.body, id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller" + error,
    });
  }
};

export const getPostLimitAdmin = async (req, res) => {
  const { page, ...query } = req.query;
  const { id } = req.user;

  try {
    if (!id)
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs",
      });
    const response = await postsService.getPostsLimitAdminService(
      page,
      id,
      query,
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller" + error,
    });
  }
};

export const updatePost = async (req, res) => {
  const { postId, attributesId, imagesId, overviewId, ...payload } = req.body;
  const { id } = req.user;
  try {
    if (!postId || !id || !attributesId || !imagesId || !overviewId)
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs",
      });
    const response = await postsService.updatePost(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller" + error,
    });
  }
};

export const deletePost = async (req, res) => {
  const { postId } = req.query;
  const { id } = req.user;
  try {
    if (!postId || !id)
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs",
      });
    const response = await postsService.deletePost(postId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller" + error,
    });
  }
};
