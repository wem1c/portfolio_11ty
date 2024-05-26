---
title: "🛳️ Migrating my website from Next.js to 11ty"
description: "Abstraction, abstraction, give me a reaction!"
date: "2024-05-14"
category: ""
bannerImage: ""
bannerImageAlt: ""
bannerImageAttribute: ""
altLocaleUrl: "/cnr/blog/"
tags: posts_en
---

# 🛳️ Migrating my website from Next.js to 11ty

Yes, yes I did. And I loved it! <3

# Preface

I do not vouch for the correctness and optimization of the website code by its author (me).

But I do vouch for the author's ever-present hunt for improvement. So feel free to message me on [Mastodon](https://social.linux.pizza/@wemic) or raise in issue in the [Codeberg repository](https://codeberg.org/wem1c/portfolio_11ty) with improvement suggestions, if you feel so inclined. 😊

# Creating a fresh 11ty project

## Why

I thought about using one of the excellent [11ty project templates ](https://www.11ty.dev/docs/starter/), but I realized it'd be better for me to create a new project.

I never liked using more than necessary. The main reason I set out on this migration was that I felt using Next.js for a simple static website was overkill!

> Some inspirations on this topic:

>

> - [Tiny Projects](https://tinyprojects.dev/) and [How to code and launch a tiny website](https://tinyprojects.dev/guides/tiny_website) by [Ben Stokes](https://benstokes.dev/)

> - [htmx](https://htmx.org/) and [hyperscript](https://hyperscript.org/)

Using others' templates would box me into using their preferred tooling, and increase development time. And as I explored these tools, I'd realize I didn't want/need them, and I'd try to replace/remove them.

Another reason was that I wanted to know more about the raw functionality of the code itself. A lot of common patterns like image optimization is hidden behind abstractions via React/Next.js modules. I wanted to get down to or at least see the nitty-gritty of it.

## How

[11ty Docs - Getting Started](https://www.11ty.dev/docs/get-started/).

Afterwards, it was a matter of choosing a folder structure and a place to host my repo.

Since my website is multi-language (English and Montenegrin), I checked out the example multi-lang [project from the docs](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) for inspiration.

I did not like the idea of writing every page twice for each language. So I levaraged 11ty's default folder routing and pemalink frontmatter to create the following:

- two root folders `/en` and `/cnr`, which contain `en.json` and `cnr.json` data files, respectively, passing the chosen locale as a `locale` data variable

- pages within those folders (parent templates) only serve setting the permalinks and providing data

- template partials which contain the actual body of the pages and are imported in the routing parent templates

- A dictionary data file `src/_data/dictionary.js` for string translations

This enables the following workflow:

- write an About page by creating a `src/_partials/pages/about.njk` template

- add content, as well as translated strings from the `dictionary` collection

- import the template into the `src/en/pages/about.njk` and `src/cnr/pages/about.njk` parent templates

- define the parent templates' `permalink` metadata property to `/{{ locale }}/about`.

## Repository host

I only used GitHub before as it was the first one I learned about. But I wanted to switch to a FOSS option for a long while (if only for my personal projects) now.

The initial plan was GitLab, but in the meantime I found out about Codeberg, and I liked their name a lot more. Which is why you can find the repo to my site [there](https://codeberg.org/wem1c/portfolio_11ty)!

I also set up a mirror to [GitHub](https://github.com/wem1c/portfolio_11ty), as I later needed it to deploy my site to Vercel. (They don't support Codeberg repos by default 🙁)

# Aftermath

It's been months since I started writing this. There have been many additions to my website since then, but this is the basis of it as it stands.

I'm delighted with 11ty. Making this migration made me want to swap from React completely. I've been researching [htmx](https://htmx.org/) and [hyperscript](https://hyperscript.org/) to help with that. ^^ (I'm also looking into Svelte and SvelteKit as a compromise, though I hope I won't need it.)

Now, onto watching the recording of the first ever [11ty conference](https://www.youtube.com/watch?v=iLxJ6PtuF9M&pp=ygUJMTF0eSBjb25m)!
