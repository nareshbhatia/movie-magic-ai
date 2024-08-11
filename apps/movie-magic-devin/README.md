# Movie Magic using Devin

These are my notes from implementing Movie Magic using
[Devin](https://www.cognition.ai/blog/introducing-devin).

## Development Log

### Prompting Devin to Generate Movie Magic

If you haven't tried Devin yet, it takes a very different approach to code
generation. It's more like an AI apprentice than an expert assistant. While it
knows a few computer languages and technologies, it doesn't pretend to know them
all. Devin's interface is tuned to a learning mindset where you provide
documents and references to make it learn whatever it doesn't know. Once it
learns how a technology works, you can prompt it to do your tasks. Here's a
small excerpt from my session with Devin to give you a flavor:

**Me:** "What web technologies are you trained on?"

**Devin:** "I'm trained on a wide range of web technologies that are commonly
used in the industry. This includes front-end technologies like HTML, CSS,
JavaScript, and frameworks such as React and Angular. On the back-end side, I
work with Node.js, Python with frameworks like Django and Flask, and Ruby on
Rails. For databases, I'm familiar with both SQL databases like PostgreSQL and
MySQL, as well as NoSQL databases like MongoDB. I'm also experienced with DevOps
tools like Docker, Kubernetes, and CI/CD pipelines, as well as cloud services
like AWS, Azure, and Google Cloud Platform. If you have a specific stack or
technology in mind for your project, I'd be happy to discuss how I can help with
that."

**Me:** "Do you know Next.js, Tailwind CSS, and shadcn/ui?"

**Devin:** "Yes, I'm familiar with Next.js and Tailwind CSS, which are popular
for building modern, responsive web applications. As for shadcn/ui, I'm not
familiar with it. If you could provide more context or documentation on
shadcn/ui, I'd be happy to learn more about it and see how I can assist you with
these technologies."

This should give you a good idea of how to interact with Devin. In general, I
found that I had to give very detailed and explicit instructions to Devin;
otherwise, it would easily go off course. In other words, you have to
micromanage it. Here's a link to
[my full session with Devin](https://preview.devin.ai/sessions/6240fabdbed7404d8a0ceb1be32514c1).

Another important differentiation is that Devin has a full-blown development
environment, including:

1. **Command Shell**: where Devin runs commands like `npm install` and
   `npm run...`
2. **Browser**: where Devin interacts with websites to read documentation and
   run the application
3. **Editor**: where Devin edits files
4. **Planner**: where Devin breaks down tasks and executes them in order.

See the screenshot below:

![Devin's Environment](assets/devins-environment.png)

In addition, Devin provides the full VS Code editor where you can manually
change the code that Devin has generated.

#### Prompt 1: Setup Next.js + Tailwind CSS + shadcn/ui

**Me:** "Let's start by creating a new Next.js project by running the following
command:

`npx create-next-app@latest movie-magic-devin --typescript --tailwind --eslint`"

**Devin:** "Got it, Naresh. I'll go ahead and create the new Next.js project
with the specified configurations."

**Me:** "Okay, now run the following command in the project's root directory to
set up shadcn/ui:

`npx shadcn-ui@latest init`"

**Devin:** "I'm on it, Naresh... The shadcn/ui setup has been completed."

#### Prompt 2 + Hand-Sketched Wireframe

**Me:** "Here's the wireframe for Movie Magic. How will you break it down into
components?"

![Movie Magic Wireframe](../../assets/movie-magic-wireframe.png)

**Devin:** "Based on the wireframe analysis, here's a proposed breakdown into
components:

1. Header Component: ...
2. FilterSort Component: ...
3. MovieCount Component: ...
4. MovieList Component:
   - MovieListHeader Component: ...
   - MovieListItem Component: ...
5. MovieThumbnail Component: ...
6. Rating Component: ..."

**Me:** "I want a little more hierarchy. Here's what I am thinking; let me know
if you understand:

1. Header: ...
2. Toolbar: ...
3. MovieList:
   - MovieListHeader: ...
   - MovieListItem: ..."

Once the high-level structure was solidified, I instructed Devin to start
generating code. The entire session lasted 2-3 hours (not counting coffee breaks
:smile:), giving feedback and guidance to Devin as needed. Once I felt that the
code was reasonably good and putting in more time into coaching Devin would not
dramatically improve the quality, I stopped and started moving the code to my
repository.

### Manually iterating on Devin's code

#### Iteration 1: Copy Code to My Repository

I tried to get Devin to commit code to my GitHub repository, but that did not
work. I tried Devin's integration with GitHub as well as providing it with my
personal access token – both methods failed. So, I decided to copy the code
manually. Here's the
[repository at this point](https://github.com/nareshbhatia/movie-magic-ai/tree/3c33d8961ba9ffcdf6f74e00b62ed0f65b4dfa9f),
and here's a snapshot of the running code:

![Iteration 1](assets/iteration-1.png)

**Key observations**:

1. Devin did not use `/src` as the base directory as explicitly instructed. It
   created separate directories at the root level such as `/app` and
   `/components`. I moved all these folders manually under `/src`.
2. Devin mixed up Pages Router and App Router. The `<Toolbar>` instance was
   added to the Pages Router in `/pages/_app.tsx`, hence it was missing in the
   running app.
3. Devin did not use the movie data that I provided. Instead, it generated its
   own fake data (see `/app/movies/page.tsx`). As a result, real movie data and
   images are missing from the screenshot.
4. Devin kept using function expressions for components instead of function
   declarations, despite being told not to do so (See `MovieList`).
5. Devin continued using `React.FC` in function definitions despite being told
   not to do so (See `MovieList`).
6. `MovieListItem` is not used anywhere. The same code is duplicated in
   `MovieList`. It seems that Devin missed deleting `MovieListItem`.
7. `MovieList` is responsive; it hides the specified columns at the `sm`
   breakpoint; however, the column widths do not conform to the provided
   specifications.

#### Iteration 2: Clean Up Code and Directory Structure

See
[this commit](https://github.com/nareshbhatia/movie-magic-ai/commit/2c48998303599a09801dcfaf9b547fa6a547da17)
to get a feel for the changes.

![Iteration 2](assets/iteration-2.png)

**Key observations**:

1. The toolbar is now visible because it has been moved into the `MoviesPage`.
2. The movie list is showing the real data, including images.
3. The styling of the Movie List is awful. It would have been somewhat
   reasonable if Devin had followed the provided column width specifications.
4. The page is now showing in dark mode. This is highlighting a few other
   issues. Devin does not fully understand how to implement dark mode using
   Tailwind CSS and shadcn/ui. This is evident from the table header, whose
   background is hard-coded to `bg-gray-100`. That's why it has not changed to a
   dark color in dark mode, and the contained text is invisible.
5. Devin did not use the `Sheet` and `Badge` components for the Toolbar as
   instructed.

#### Iteration 3: UI Cleanup

Here's the final implementation after a bunch of UI cleanup, tightening up the
look & feel. See
[this commit](https://github.com/nareshbhatia/movie-magic-ai/commit/6ae6b37d5633d075bab164f3bfb7953810692bf5).

![Iteration 3](assets/iteration-3.png)

This now matches my manual implementation exactly. However, it took a lot of
effort to get to this point.

## Devin – Overall Impressions

While Devin is an incredible piece of technology, and I really respect the
expertise of the developers who created it, Devin itself is not a software
expert. As mentioned earlier, it is a software apprentice who you have to
patiently teach how you want it to build an application. If you are not explicit
enough, it will definitely take wrong turns, which you will have to ask it to
fix. Also, it sometimes uses less-than-ideal coding patterns and leaves unused
code around. If you really like squeaky-clean code, you will be bothered by what
it produces.

### The Good

Devin offers a unique approach to AI-assisted software development, serving more
as an apprentice than an expert. This allows developers to mold it to their
specific needs, especially when working with less common technologies. The
development environment is well-integrated, providing command execution, browser
interaction, and a code editor all in one place, allowing you to iterate over
the results.

### The Not So Good

However, Devin requires a high level of micromanagement. Its tendency to stray
off course when instructions are not crystal clear is a significant drawback.
This constant need for explicit direction is not just a minor inconvenience but
can be very frustrating, especially when trying to maintain a smooth workflow.
Moreover, the code Devin produces is often not squeaky clean. It tends to follow
less-than-ideal coding patterns, leaving behind unused code and mixing up
details (e.g. App Router vs. Page Router). These issues can be particularly
annoying for those who prefer a clean, well-organized codebase. In its current
state, Devin does not feel ready for prime time.

## Conclusion

Devin shows promise as an AI-assisted development tool, particularly in its
ability to adapt to specific needs with guidance. However, its shortcomings in
maintaining focus and producing clean code mean that it's not yet ready for
serious production work without significant oversight. Developers looking for a
reliable assistant may find Devin more of a learning partner than a polished
tool at this stage.
