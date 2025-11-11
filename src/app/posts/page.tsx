import { getAllPost } from "@/lib/api"
import PostsList from "@/components/PostsList";

export default async function Page() {
  const posts = await getAllPost();
  return (
    <>
      <div className="main-heading">
        <h2>Daftar Tulisan</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima fugiat perferendis minus maiores consequuntur neque excepturi repellat reiciendis natus.</p>
      </div>
      <PostsList posts={posts}/>
    </>
  );
}
