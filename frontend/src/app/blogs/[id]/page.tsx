'use client'
import { Avatar } from "@/components/BlogCard";
import { useBlog } from "@/components/BlogsFetch";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { blog } = useBlog({ id });

  return <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
      <div className="col-span-8">
        <div className="text-5xl font-extrabold">
          {blog?.title}
        </div>
        <div className="text-slate-500 pt-2">

          {`Post on ${blog?.createdAt}`}
        </div>
        <div className="pt-4">
          {blog?.content}
        </div>
      </div>
      <div className="col-span-4">
        <div className="text-slate-600 text-lg">
          Author
        </div>
        <div className="flex w-full">
          <div className="pr-4 flex flex-col justify-center">
            <Avatar size="big" name={blog?.author.name || "Anonymous"} />

          </div>
          <div>
            <div className="text-xl font-bold">
              {blog?.author.name || "Anonymous"}
            </div>
            <div className="pt-2 text-slate-500">
              Master of mirth, purveyor of puns, and the funniest person in the kingdom.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
