import React from 'react'

const BlogDetailsPage = async ({params}) => {
    const { slug } = await params;
    console.log(slug);
  return (
    <div>
        <aside>Menu</aside>
        <p>{slug.join(",")}</p>
    </div>
  )
}

export default BlogDetailsPage