import { currentUser } from "@clerk/nextjs/server";

export async function getUserImage() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const { imageUrl } = user;
  return imageUrl;
}
