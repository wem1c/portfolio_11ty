---
title: "⚙️ COG #1: OpenStreetMap, Next.js 13, starting a home server..."
description: "I find out OpenStreetMap exists, learn about new Next features, and dream about electric sheep."
date: "2023-07-14"
category: "weeklog"
bannerImage: "/images/posts/cog_1.jpg"
bannerImageAlt: "an imagining of a purple cogwheel inspired jewlery piece"
bannerImageAttribute: 'Photo by <a href="https://unsplash.com/@ereimer11?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emily Reimer</a> on <a href="https://unsplash.com/photos/W3RjW1rnHN0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
altLocaleUrl: "/cnr/blog/"
tags: posts_en
---

# ⚙️ COG_1: OpenStreetMap, Next.js 13, home server...

Hello, my dear reader! I hope this text finds you well. This is the very first issue of (my) **Conor's Log** or **_COG_** , for short!

You see, there's way too much stuff going around in my head. And I do my best to parallel process all of it. But oftentimes I find myself in a chaotic mess of many ongoing tasks with no end in sight.

Out of my strong desire to write well documented code I researched git commit standards, README file standards, API schema writing, and wiki writing (for now). And as many before me, I too found that writing about my coding projects helped me properly "file" them in my mind.

Which is why I'm starting this habit of writing a weekly log. To help me structure my ongoing projects in my mind, to act as a sort of reference to look back on, and hopefully, to be of some use to others undertaking similar projects in the future! 😊

## 🗺️ OpenStreetMap and Montenegro

Recently, Montenegro got an upgrade in its public transport. Compared to the sparse routes and old buses of the past, these days it's a blast!

But when I checked the information on these routes online, I was disappointed! The routes were not on Google Maps. Not even the bus stops. "I'll just add them myself!", I thought. Alas, I found out Google requires official operators to add such information...

While I did send an email to the mayor offering to help put up the info on GMaps, I'm not the type to sit around and wait for an answer. I remembered an **open-source**, **community-driven** project I had heard about a while back - **OpenStreetMap**!

I checked it out, not expecting to see any information regarding Montenegro on it. But I was pleasantly surprised! While a lot of the info was a bit stale, most of the country was mapped! And there were recent additions there too - there are active contributors!

So I searched around on the net a bit to see if I can find an active OSM mapping community for Montenegro, but no luck. It seems there was a push for it about 10 years ago, but it never got any traction. I'll see what I can do about that later.

Back to why this is such a great thing. Being community-driven, OSM not only allows, but encourages contributors (_cartographers_) to add all relevant information - including public transport! It goes much deeper than that tho: surface material (concrete, asphalt), are there any benches or bins next to bus stops, is a bus stop covered, type of buildings, levels, amenities, everything!

I've spent quite a while reading through the [OSM wiki](https://wiki.openstreetmap.org/wiki/Main_Page) and learning about the syntax, the different editors for the web and Android, different plugins and add-ons that add satellite imagery and street view. It's quite a lot so I've decided to write about it in a separate (series of?) blog post(s). Hopefully getting more people into the community useful work of mapping out their areas! Did I mention that it has a lot more information than GMaps? I'm definitely enjoying it more for now.

## 🆕 Next 13 and the app router

Started a new website project this week. It's a simple marketing website to start, but it has a lot of plans for expanding with online payments, interactions, newsletters, etc.

Because of this, I decided to go the route of safety and speed with the stack: **Next** + **TypeScript** + **Tailwind**. Next gives better performance with static rendering, as well as the ability to expand easily with server-side rendering, and API routes (and most stacks work with React). It's a bit of an overkill with the starting version, tho.

However, this is the first time I'm using the new Next version with _app routing_. Had to adapt to the changes on the fly. And this is the first time I've used TypeScript in a production project, but that wasn't more than a 15 minute trouble considering the simplicity of this project (thank you learnxinyminutes.com , you rock! ⭐)

The experience is alright, though TS slows down the build time a lot. I'm regretting not using Vite this time, but I didn't want to add too many new tech in a production project. I won't make the same choice next time, tho! 😄

## 🗽 Starting a home server

The last bit of news for this week: I've been thinking about creating a home server and self hosting some platforms. Rather, trying it out.

I've got an oldish PC build that I don't really use anymore, and it saddens me to see it just sitting around doing nothing.

I'm thinking of installing [NixOS](https://nixos.org/) on it and starting out with self hosting [NextCloud](https://nextcloud.com/).
