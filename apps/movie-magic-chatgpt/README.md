# Movie Magic ChatGPT 4o

These are my notes from implementing Movie Magic using ChatGPT 4o.

## Development Log

### Explain Requirements to ChatGPT

I started with an detailed conversation with ChatGPT, explaining the
requirements for Movie Magic. This conversation lasted for about two hours,
involving explaining the application functionality to ChatGPT, reviewing its
understanding and providing clarifications and feedback to get the requirements
right. You can review the details in ChatGPT Session Transcript, but here's a
high-level summary:

1. **Prompt (along with the hand-sketched wireframe)**: "You are a front-end
   developer with 20 years of experience in building web applications. Give me a
   detailed description of what's in this wireframe."
2. **Response**: ChatGPT provided a detailed understanding of the wireframe,
   breaking it down into 3 sections: (a) Header, (b) Main Content Area, (c)
   Movie List Table. The details were a bit sketchy, so I had to give it some
   help.
3. **Prompt**: "Breakdown the page into 3 sections: (a) Header, (b) Toolbar
   (containing the Filter & Sort button + the Total Movies badge), (c) Movie
   List." I went on to describe each section in more detail.
4. **Response**: "Here’s an updated description of the wireframe with your
   specified changes:...". The specs were still not very tight. So I gave it
   more hints.
5. **Prompt**: (a) Movie image should have an aspect ration of 2/3, (b) Heights
   of the various sections should be as follows: Header: 56px, Toolbar: 56px,
   Movie List Header: 39px, Movie List entry: 112px ...".
6. **Response**: "Here’s an updated description of the wireframe with your
   specified changes:...".
7. **Prompt**: "Add specific requirements for the technology stack: TypeScript,
   Next.js (use App Router, not the old Page Router), Tailwind CSS. shadcn/ui,
   Radix UI. Ask me any clarifying questions about this stack."
8. **Response**: ChatGPT asked 6 clarifying questions, e.g. "Next.js: Is there a
   preference for server-side rendering (SSR) or static site generation (SSG)
   for specific parts of the application?"
9. **Prompt**: I answered all of the questions in detail, e.g. "For Next.js, do
   not use SSR or SSG. Instead use React Server Components (RSC) and React
   Client Components."

This went on and on until I was fully satisfied with the requirements. At that
point I asked ChatGPT to generate the code. It generated decent code, along with
setup instructions. Unfortunately, the setup instructions were very haphazard.
It was clear that ChatGPT blindly copied instructions from Next.js, Tailwind CSS
and shadcn/ui without integrating them into a meaningful whole. I discarded them
completely and used
[Code Shaper](https://www.code-shaper.dev/docs/getting-started/create-a-new-repo)
to generate my starter app.

The generated code was reasonably modular, with the movies page at
`/src/app/movies/page.tsx` and the three sections in 3 separate files under the
`_components` folder. However, the code was not immediately compilable! ChatGPT
makes no attempt to actually compile the code it generates – there are minor
issues all over the place. The developer must step in to create a working app.
That's exactly what I did in iteration 1.

### Iteration 1

Here's the result after ironing out all the compilation issues. Note that the
visual design is really off. In spite of specific instructions, ChatGPT did not
use any shadcn/ui components to give a polished look to the UI. Light/dark mode
were not implemented. Movies entries didn't include the provided images. I had
to literally give it the code to render the image in 2/3 aspect ratio.

![Iteration 1](assets/iteration-1.png)

### Iteration 2

Given that ChatGPT did not understand shadcn/ui, and the visual design is way
off, I made a bunch of manual changes to make the app look half-way decent:

1. Added shadcn/ui
2. Added light/dark mode
3. Brought in the right logo from Lucide icons
4. Cleaned up the header layout
5. Added some basic responsive behavior

![Iteration 2](assets/iteration-2.png)

## Summary of Major Issues

- **Cumbersome workflow**: The fact that ChatGPT runs outside my IDE makes it a
  very cumbersome to use. Every time I give it some feedback, ChatGPT
  regenerates the entire project. The regeneration itself is painfully slow.
  Then I have to manually synchronize my code with the newly generated code.
  This is all very inefficient.
- **Does not generate compilable code**: ChatGPT makes no attempt to actually
  compile the generated code. It is a good start, but there are minor issues all
  over the place. The developer must step in to iron out all the issues before
  you can see a working app.
- **Application setup instructions were haphazard**: ChatGPT blindly copied
  setup instructions from Next.js, Tailwind CSS and shadcn/ui without
  integrating them into a meaningful whole. I discarded them completely and used
  [Code Shaper](https://www.code-shaper.dev/docs/getting-started/create-a-new-repo)
  to generate my starter app.
- **shadcn/ui not used at all**: It was very clear that ChatGPT did not
  understand what shadcn/ui is. It simply reiterated the guidance I gave it. For
  example, "Install components: npx shadcn-ui@latest add button", however it did
  not use any `<Button>` component in the code.
- **Light/Dark mode not implemented**: ChatGPT simply pointed to the references
  I gave it, and did not actually implement light/dark mode. The header only had
  a placeholder button for it.
- **User avatar & dropdown menu not implemented**: This is a complete miss!
- **Does not understand Next.js and React Server Components**: Components that
  used hooks and event handlers were created as server components (no
  `'use client'`).

## Nit Picks

- **Directory structure**: Although I had explicitly instructed ChatGPT to use
  Next's App Router, it initially put all pages under `/pages`. I had to guide
  it to move them to `/app` as required by the App Router. I also asked it to
  create a `/src` directory above `app`. Once it understood all this, it
  generated the right directory structure.
- **Absolute imports**: Initial code from ChatGPT contained long relative
  imports, e.g. `import { movies } from '../../../data/movies'` I had to tell it
  to use absolute imports to simplify import statements like this:
  `import { movies } from '@/data/movies'`.
- **Component Structure**: ChatGPT generated all components as arrow functions.
  My preference is function declarations. After giving this feedback, ChatGPT
  converted all components to function declarations.
- **Did not use movie images**: Initial iteration did not use movie images in
  the movie list. I had to tell it to do that. Also it started using inline
  styles instead of Tailwind classes. I finally gave it the exact `<img>`
  element I wanted it to use.

## Conclusion

Even after lot of hand holding, ChatGPT does not understand the intricacies of
web technologies, like React Server Components, and shadcn/ui. While the code it
generates is a good starting point, but it does not actually try to compile it.
The developer needs to iron out all the issues to see a working app. And that's
just the beginning, because the result is not very polished and many
requirements are missed. This is where the developer needs to have a further
dialog with ChatGPT to bring the app closer to the requirements. The success
rate here is hit or miss. In several situations, I did not have the patience to
teach ChatGPT because I could code those pieces faster.
