import client from "./client";

const endpoint = "/publicFeed/all";

const getAllPublicFeed = async (perPages) => {
  const response = await client.get(endpoint + "/" + perPages);
  return response;
};

const getAllPublicFeedWithTags = async (tags, perPages) => {
  const response = await client.get(endpoint + "/" + tags + "/" + perPages);
  return response;
};

export default {
  getAllPublicFeed,
  getAllPublicFeedWithTags,
};
