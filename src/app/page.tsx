import Link from "next/link";
import { getLastPost } from "@/lib/api";
import PostsList from "@/components/PostsList";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
      <div className="main-heading">
        <h1>Selamat Datang di NextJS News</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima fugiat perferendis minus maiores consequuntur neque excepturi repellat reiciendis natus.</p>
      </div>
      <PostsList posts={posts}/>
    </>
  );
}
