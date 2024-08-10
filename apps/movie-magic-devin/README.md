# Movie Magic Devin

These are my notes from implementing Movie Magic using
[Devin](https://www.cognition.ai/blog/introducing-devin).

## Development Log

### Create version 1 in Devin's environment

Here's a link to
[my session with Devin](https://preview.devin.ai/sessions/6240fabdbed7404d8a0ceb1be32514c1).

### Iterate on Devin generated code manually

#### Iteration 1: Copy code to my repository

I tried to get Devin to commit code to my GitHub repository, but that did not
work (tried Devin's integration with GitHub as well as providing it with my
personal access token – both did not work). So I decided to copy the code
manually. Here's the associated commit, and here's a snapshot or the running
code:

![Iteration 1](assets/iteration-1.png)

Here are some key observations from the generated code:

- Devin did not use `/src` as the base directory as explicitly instructed. It
  created separate directories at the root level such as `/app` and
  `/components`. I moved all these folders manually under `/src`.
- Devin mixed up Pages Router and App Router. The `<Toolbar>` instance was added
  to the Pages Router in `/pages/_app.tsx`, hence it was missing in the running
  app.
- Devin did not use the movies data that I provided. Instead it generated its
  own fake data (see `/app/movies/page.tsx`). As a result, real movie data and
  images are missing from the screenshot.
- Devin kept on using function expressions for components instead of function
  declarations in spite of telling it not to do so (See `MovieList`).
- Devin kept on using `React.FC` in function definitions in spite of telling it
  not to do so (See `MovieList`).
- `MovieListItem` component is not used anywhere. That same code is duplicated
  in `MovieList`. It seems that Devin missed deleting `MovieListItem`.
- The `MovieList` is responsive, it hides the specified columns at the `sm`
  breakpoint, however the column widths do not conform to the provided specs.
