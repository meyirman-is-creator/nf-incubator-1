import Link from 'next/link';
const BlogList = ({ blogs }) => (
  <div className="p-4 max-w-[1040px] px-[15px] mx-[auto]">
    {blogs.map((blog) => (
      <div key={blog.id} className="border-b p-4">
        <Link href={`/blog/${blog.id}`} className="text-xl text-blue-600">
          {blog.title}
        </Link>
        <p>{blog.description}</p>
        <small>By {blog.author} on {blog.date}</small>
      </div>
    ))}
  </div>
);

export default BlogList;