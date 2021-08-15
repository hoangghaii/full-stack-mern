export type PostType = {
  _id: string;
  title: string;
  description: string;
  url: string;
  status: "TO LEARN" | "LEARNING" | "LEARNED";
};

export type CreatePostType = {
  title: string;
  description?: string;
  url?: string;
  status?: "TO LEARN" | "LEARNING" | "LEARNED";
};
