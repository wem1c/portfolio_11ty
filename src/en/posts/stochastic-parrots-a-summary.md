---
title: "🦜 Stochastic Parrots: A summary (sort of)."
description: "The least amount of information you should know about how the trouble with Large Language Models."
category: "research"
date: "2023-03-27"
bannerImage: "/images/posts/stochastic-parrots-a-summary.jpg"
bannerImageAlt: "image of a colorful parrot"
bannerImageAttribute: 'Photo by <a href="https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Clode</a> on <a href="https://unsplash.com/photos/G7Jd9fMuRHs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
altLocaleUrl: "/cnr/blog/stohastički-papagaji-sažetak.html"
tags: posts_en
---

# 🦜 Stochastic Parrots: A summary (sort of).

Last week I stumbled upon a [research paper](https://dl.acm.org/doi/pdf/10.1145/3442188.3445922) titled: “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜” (Emoji included!). Amongst the four authors were the former co-heads of Google’s AI ethics team Timnit Gebru and Margaret Mitchell. They were fired because of this paper. If that’s not incentive enough to go and read the paper for yourself, let me go over some of the things covered in it to show you why you should.

## The What: NLPs, not NLUs.

If nothing else, I want you to leave with this: **Language Models do not understand language.**

They do not perform Natural Language _Understanding_, but rather Natural Language **_Processing_**.

Language Models process the input we give them against a dataset they are trained on. This dataset is just a bunch of texts (usually) sourced from the internet and (barely) cleaned of unwanted content such as words regarding racism, sexism, violence, etc. They are then linked with different values which represent information such as the theme they refer to or the cadence of the text.

When you ask these models something via various different AI solutions which use them such as ChatGPT, the underlying language model attempts to link what you asked with the closest information it has in its database (the dataset it learned from), and then return that back to you formatted to resemble human speech. It does not actually understand what it is you asked or what it is it returned - only that the two are closely connected based on the information it was trained on.

## The How: haphazardly.

Knowing the basic process you could logically infer that the bigger the dataset the better the results. Assuming this to be correct, you now think about how big you can go. Theoretically, as long as you can process it in time, the size isn’t limited. Realistically, you aren’t creating a fresh dataset from scratch by writing it manually. Why would you? You have a huge archive of human-written texts, containing all of the knowledge of this world, at your fingertips - the internet.

The biggest Language Models to date, OpenAI’s GPT3 and Google’s GShard and Switch-C, have billions and trillions of parameters and datasets of up to 745 Gigabytes. 745 Gigabytes of letters, words, sentences. No photos, videos, 3D simulations, nothing that’s of noticeable size for modern standards. These datasets are made up of scraped texts from Wikipedia, Reddit, news sites, social media, and whatever else is found in the last decade or two of the internet’s existence.

But as long as it’s cleaned up a bit, everything’s great! No problems whatsoever, right?

## The Problems: numerous.

Let’s start with the environmental impact of creating such beasts. It’s estimated that training a single BERT base model requires as much energy as a trans-American flight. And while some of the energy used could be green (sourced from renewable sources or balanced out with the use of carbon credit offsetting) - most of it isn’t.

And for that cost we feed the model bad data. Most internet users are younger people from developed countries. Most Reddit users are men, and only 8-15% of Wikipedians are women. Being based off of scraped internet data, this is means our datasets are completely lacking diversity and don’t include a major part of the human population. Not only that, but the parts of the internet that harbor the underrepresented populations are less likely to be included in the dataset anyway because of the collection methods used.

Furthermore, a big part of the dataset is cleaned by discarding content which mentions a word from a list of about 400 “Dirty, Naughty, Obscene or Otherwise Bad Words”. As if that wasn’t to small of an effort already, the words contained on the list are overwhelmingly words related to sex, with only a handful of racial slurs and words related to white supremacy.

Additionally, inherent bias contained in texts written by humans is effectively taught to the model. A study of BERT showed that it associates human disabilities with more negative sentiment words, and that violence, homelessness, and drug addiction are over-associated with mental illnesses. Another study showed that models with huge datasets like GPT-3 generate sentences with high toxicity even when given non-toxic prompts. The same study also found that 272 thousand documents in GPT-2’s data came from unreliable news sites and banned subreddits. Peaceful social movements are disregarded in favor of dramatic, violent ones by news outlet coverage so they don’t make the dataset cut either.

The datasets are simply far too large to be processed and documented thoroughly which means the necessary amount of accountability needed is impossible.

## The Consequences: dire.

Our models now can use, and often do, biased, bigoted views and derogatory language. And since humans have a tendency to search for (and make up) meaning where isn’t any, like artificial texts that a model spits out that it doesn’t understand, we now have a believably intelligent machine that will happily provide you with terrible advice not understanding at all what it is it’s saying.

This is why they’ve been named “Stochastic Parrots” - they just repeat phrases and information from their database based on a probability that it relates to the input they received. They randomly repeat things they heard, without any idea what they actually mean.

People are being shown new stereotypes and warped world-views. Or having their existing ones reinforced. Others are getting incarcerated on the bases of a model improperly translating their “Good morning!” post to a piece of terrorist propaganda. Some are intentionally using this specific ability the models now posses to create recruitment posts seemingly written by an actual human conspiracy theorist.

And we are already incorporating these models into various important facets of our lives like medicine and education.

## The Solutions.

In the paper, the authors list numerous ways we can improve and safeguard against these problems when creating new datasets and training new models. Urging researchers to shift to a mindset of careful planning before even starting the endeavor of making an AI. Considering and planning out the financial and environmental costs of development up front. Assembling datasets that solve the task at hand, rather than gathering a massive amount of catch-all data because of the convenience.

Adopting frameworks which outline the uses their models are suited for, as well as providing thorough documentation detailing the data used, the motivation for gathering this data, and the data collection process itself. Not focusing on making the models bigger so as to achieve better scores on arbitrary leaderboards. Looking into the possibility of watermarking the output created so as to make it possible to identify text written by AI as opposed to humans.

The guilt doesn’t lie on the models themselves, but on us as creators and how we go about doing that. AI is the latest tool made by humans, and is here to stay. But we must be extremely careful and diligent in our methods of data gathering and processing, and model training, to ensure these tools are useful and not detrimental.

## The End.

You’ve made it this far so let me save you the work of scrolling back up: [the research paper](https://dl.acm.org/doi/pdf/10.1145/3442188.3445922). The authors do a wonderful job of expertly covering all of the topics mentioned and more, referencing their sources at every point. There’s so much I haven’t covered in this article, because you must read it for yourself. ‘Till next time!
