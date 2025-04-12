import { defaultHeaders, handleResolve, host } from "..";
import { PostLikeRequest, PostLikeResponse } from "./type";

export const path = () => host("/like");

export const postLike = async ({
  postId,
}: PostLikeRequest): Promise<PostLikeResponse> => {
  return fetch(path(), {
    method: "POST",
    body: JSON.stringify({ postId }),
    headers: defaultHeaders,
  }).then(handleResolve);
};
