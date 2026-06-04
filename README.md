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

## 1. Server Component {default}
 - All react components in next.js are server component by default
 - Server side task like data fetching, files read, database data fetching, async tasks.
 - Cannot use useState,hook,events, user-interaction 

## 2. Client Component
- Can use useState,hook,events, user-interaction 
- Tradational react components
- Use the directive ` use client `at the top of component file

# Routing