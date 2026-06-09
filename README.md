# Next.js


- React.js full-stack framework for the web development.
- In addition to buliding UI, next.js also provide features like routing,rendering, optimization, data fetching, etc.
- It uses react server component
- Opinionated framwork (file, folder connvention)

## Features

1. Routing: file based routing
2. Rendering: Server-Side Rendering(SSR), Client-side Rendering(CSR), Static site generation (SSG)
4. Data fetching/ file system
5. API routes
6. Styling

## React server Component

# 1. Server Component {default}
 - All react components in next.js are server component by default
 - Server side task like data fetching, files read, database data fetching, async tasks.
 - Cannot use useState,hook,events, user-interaction 

# 2. Client Component
- Can use useState,hook,events, user-interaction 
- Tradational react components
- Use the directive ` use client `at the top of component file

## Routing

- File based Routing 
- All routes must be inside the `src/app` directory
- Every route must have `page.js` or `page.tsx` file
- `page.js` or `page.tsx` must have default export

1. Simple routes
- Create a folder inside /src/app and add a page.js file
- /src/app/about/page.js
- /src/app/contact/page.js

2. Nested routes
- Create a folder inside folder for nested routes
- /src/app/courses/frontend/react/page.js
- /src/app/courses/frontend/nextjs/page.js
- /src/app/courses/backend/django/page.js
- /src/app/courses/backend/express/page.js

3. Dynamic routes
- Create a folder enclosed by []
-  /src/app/products/[id]/page.js
- use the `{params}` for the getting the id 

4. Nested dynamic routes
- /src/app/products/[id]/reviews/[reviewId]/page.js

5. Catch all segments
- /src/app/blogs/[...slug]/page.js

6. Private folders
- /src/app/_folder

7. Route groups
- /src/app/(auth)/

## Layouts
-  UI component that is shared among different pages
- `layout.js` ot `layout.tsx`


## Special files of Next.js

- page.js
- layout.js
- not-found.js
- loading.js
- error.js // always client component

## Link
- <Link> for navigation, similar to <a>

- For programmatic navigation, use the `useRouter` hook

## Params & searchParmas

1. For Server Component
- params: dynamic routes params, available on page.js & layout.js
- searchParams: query, available on page.js

2. For Client Component
- useParams()
- useSearchParams()

## Metadata
- Metadata api is used to define metadata of the page
- page.js / layout.js
- useful for the search engine optimization (SEO)
- static: metadata
- dynamic: generateMetadata function


## Rendering: SSR, CSR, SSG

- Process of converting component/transforming component code into UI.
- Client side rendering(CSR) and Server side rendering(SSR)
- Static site generation (SSG) generated during app built.
- Note: Components are server side rendered in Next.js and client side rendered in React.js

## CSR

- If rendering is done in browser -> CSR

## SSR

- If rendering is done in server -> SSR



## Client Component
- To make client component `use client` directive
- Interactivity
- Event, user interaction
- State management
- Client component can be both CSR or SSR

## Sever Component
- By default, all the components in Next.js are Server component
- Fetch data from API
- Send API request
- Metadata

 