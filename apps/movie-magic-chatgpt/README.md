# Movie Magic using ChatGPT 4o

These are my notes from implementing Movie Magic using
[ChatGPT 4o](https://openai.com/chatgpt), an AI-powered development assistant.

## Table of Contents

- [Development Log](#development-log)
  - [Prompting ChatGPT to Generate Movie Magic](#prompting-chatgpt-to-generate-movie-magic)
  - [Manually Iterating on ChatGPT's Code](#manually-iterating-on-chatgpts-code)
- [ChatGPT – Overall Impressions](#chatgpt--overall-impressions)
- [Conclusion](#conclusion)

## Development Log

### Prompting ChatGPT to Generate Movie Magic

Here's a summary of prompts to ChatGPT. You can review the full detail in the
[ChatGPT Session Transcript](assets/ChatGPT%20Session%20Transcript.pdf).

#### Prompt 1 + hand-sketched wireframe

"You are a front-end developer with 20 years of experience in building web
applications. Give me a detailed description of what's in this wireframe."

![Movie Magic Wireframe](../../assets/movie-magic-wireframe.png)

ChatGPT provided a detailed understanding of the wireframe, breaking it down
into three sections: (a) Header, (b) Main Content Area, (c) Movie List Table.
This breakdown was not very accurate, so I gave it a helping hand.

#### Prompt 2

"Breakdown the page into three sections: (a) Header, (b) Toolbar (containing the
Filter & Sort button + the Total Movies badge), (c) Movie List."

I then described each section in more detail. ChatGPT provided an updated
description of the wireframe with my specified changes, but the specs were still
not tight enough, so I gave it more hints.

#### Prompt 3

"The movie image should have an aspect ratio of 2/3. Heights of the various
sections should be as follows: Header: 56px, Toolbar: 56px, Movie List Header:
39px, Movie List entry: 112px."

ChatGPT updated the description with my specified changes.

#### Prompt 4

"Add specific requirements for the technology stack: TypeScript, Next.js (use
App Router, not the old Page Router), Tailwind CSS, shadcn/ui, Radix UI. Ask me
any clarifying questions about this stack."

ChatGPT asked six clarifying questions, e.g. "Is there a preference for
server-side rendering (SSR) or static site generation (SSG) for specific parts
of the application?"

#### Prompt 5

Example answer: "Do not use SSR or SSG. Instead, use React Server Components
(RSC) and React Client Components."

This process went on until I was fully satisfied with the requirements. At that
point, I asked ChatGPT to generate the code. It generated decent code, along
with setup instructions. Unfortunately, the setup instructions were very
haphazard, as ChatGPT had copied instructions from Next.js, Tailwind CSS, and
shadcn/ui without integrating them into a meaningful whole. I discarded them
completely and used
[Code Shaper](https://www.code-shaper.dev/docs/getting-started/create-a-new-repo)
to generate my starter app.

The generated code was reasonably modular, with the movies page at
`/src/app/movies/page.tsx` and the three sections in three separate components.
However, the code was not immediately compilable! ChatGPT makes no attempt to
compile the code it generates, resulting in minor issues all over the place. The
developer must step in to create a working app. That's exactly what I did in
iteration 1.

### Manually Iterating on ChatGPT's Code

### Iteration 1: Clean up generated code

After ironing out all the compilation issues, the visual design was still off.
Despite specific instructions, ChatGPT did not use any shadcn/ui components to
give the UI a polished look. Light/dark mode was not implemented, and movie
entries didn't include the provided images. Placeholder images were square, I
had to adjust the code to render images in 2/3 aspect ratio.

![Iteration 1](assets/iteration-1.png)

### Iteration 2: Add shadcn/ui

Given that ChatGPT did not understand shadcn/ui, and the visual design was way
off, I made several manual changes to make the app look halfway decent (see
[this commit](https://github.com/nareshbhatia/movie-magic-ai/commit/e6eb6579f4cc36d6cc4094f0fa5317d74c289e38)
for the effort involved):

- Added shadcn/ui
- Added light/dark mode
- Included the correct logo from Lucide icons
- Cleaned up the header layout
- Added basic responsive behavior

![Iteration 2](assets/iteration-2.png)

### Iteration 3: Improve Movie List

Next, I aimed to improve the layout of the Movie List. I provided ChatGPT with a
screenshot of the Movie List from my manual implementation along with precise
column widths, text justifications, and the desired responsive behavior.

![Movie List Spec](assets/movie-list-spec.png) _Visual design of Movie List
supplied to ChatGPT_

ChatGPT did a pretty good job with this. It used grid layout to create precise
column widths and implemented the responsive specs, though it messed up a
little. I tweaked the generated code to get the desired results.

![Iteration 3](assets/iteration-3.png)

### Iteration 4: Improve Toolbar

Finally, I worked on improving the Toolbar. Similar to iteration 3, I supplied
ChatGPT with a screenshot of the Toolbar from my manual implementation along
with the specifications of the shadcn/ui components that I wanted to use.

![Toolbar Spec](assets/toolbar-spec.png) _Visual design of Toolbar supplied to
ChatGPT_

ChatGPT followed the instructions but did not fully understand them. For
instance, it treated shadcn/ui as a library and created an import like
`import { Button } from 'shadcn/ui'`. Again, I tweaked the generated code to
make it work.

![Iteration 4](assets/iteration-4.png)

This is very close to my manual implementation. It's important to note, however,
that this achievement primarily addressed the visual aspects of the application.
The functional elements, such as data fetching from a server and implementing
working filters, remain to be developed. I chose to stop here, as I had already
understood ChatGPt's capabilities in front-end development.

## ChatGPT – Overall Impressions

### The Good

1. **Component Breakdown:** ChatGPT’s ability to analyze a wireframe and
   decompose it into distinct sections was impressive. Although the breakdown
   wasn’t flawless, achieving something like this would have been nearly
   impossible just a few years ago.
2. **Understanding Feedback:** It was particularly noteworthy how well ChatGPT
   incorporated my feedback and refined its understanding of the requirements,
   demonstrating an impressive level of adaptability.

3. **Modular Code:** The code generated was modular, effectively mirroring the
   breakdown in the requirements.

### The Not So Good

1. **Cumbersome Workflow:** ChatGPT operates in its own environment, generating
   code that it believes is correct without attempting to compile or run it to
   ensure it meets the requirements. Iterating on the code was cumbersome; I had
   to copy the code into my IDE, fix compilation errors, and then run it to see
   the results. Each time an issue arose, I had to provide feedback to ChatGPT
   and repeat the entire cycle. ChatGPT would then regenerate the entire code
   (which was a slow process), requiring me to manually synchronize it with my
   existing code. This workflow proved to be highly inefficient.

2. **Haphazard Setup Instructions:** ChatGPT copied setup instructions from
   Next.js, Tailwind CSS, and shadcn/ui without integrating them into a cohesive
   whole, which could easily confuse a developer unfamiliar with the target
   stack. I opted to disregard ChatGPT's setup instructions and instead used
   Code Shaper to generate my starter app.

3. **Misunderstanding shadcn/ui:** ChatGPT didn’t grasp shadcn/ui and failed to
   utilize any of its components in the app's construction.

4. **Incomplete Light/Dark Mode Implementation:** ChatGPT provided a placeholder
   button for light/dark mode but did not implement the actual functionality.

5. **Missing User Menu:** The user avatar and its dropdown menu were entirely
   overlooked.

6. **Lack of Understanding of Next.js and React Server Components:** Components
   involving hooks and event handlers were mistakenly created as server
   components instead of client components. ChatGPT failed to add `use client`
   statements where necessary.

7. **Directory Structure Issues:** Despite explicit instructions, ChatGPT placed
   application pages under the `/pages` directory instead of the `/app`
   directory, indicating a lack of understanding of the App Router.

8. **Long Import Paths:** ChatGPT generated long relative import paths. I had to
   instruct it to use absolute imports for simplicity.

9. **Component Structure:** ChatGPT initially generated all components as arrow
   functions. After receiving feedback, it converted them to function
   declarations.

10. **Movie Images:** ChatGPT did not include movie images in the movie list.
    When explicitly asked to add them, it did so, but the generated `<img>`
    elements failed to meet the aspect ratio requirements.

## Conclusion

Despite extensive guidance, ChatGPT does not fully understand the intricacies of
web technologies like React Server Components and shadcn/ui. While the generated
code provides a solid starting point, it does not compile as-is, requiring the
developer to manually resolve issues. The initial results are often incomplete,
missing key requirements, and necessitate further dialogue with ChatGPT to
refine the implementation. The iteration process is slow, as the generated code
must be synced with the developer's repository. In many cases, I found it faster
to fix the issues myself than to instruct ChatGPT and go through another cycle.
