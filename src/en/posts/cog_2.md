---
title: "⚙️ COG #2: NextCloud, Linux gaming, and smartphone updates..."
description: "I pull an insane l33t move and dual boot Arch Linux distros, bring up a NextCloud instance, and flash a custom ROM on an old phone!"
date: "2024-08-14"
category: "weeklog"
bannerImage: "/images/posts/cog_1.jpg"
bannerImageAlt: "an imagining of a purple cogwheel inspired jewlery piece"
bannerImageAttribute: 'Photo by <a href="https://unsplash.com/@ereimer11?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emily Reimer</a> on <a href="https://unsplash.com/photos/W3RjW1rnHN0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
altLocaleUrl: "/cnr/blog/"
tags: posts_en
---

# ⚙️ COG #2: NextCloud, Linux gaming, and smartphone updates...

Boy, this week was a productive one!

Custom ROM flashing, NextCloud instance installation, and a fresh Linux dual-boot setup!

## Augmenting my home server

In a [previous COG](https://www.conor.zone/en/blog/cog_1.html), I mentioned installing [NixOS](https://nixos.org/) on my old PC. My plan was to turn it into a home server instance. That plan got put on the back-burner, but this week I made it happen!

Also, I named my PC after [a pokemon](<https://bulbapedia.bulbagarden.net/wiki/Duraludon_(Pok%C3%A9mon)>). It just seemed fitting! ^^

### Adding SSH

I had configured the headless NixOS install to my liking, but it still proved a bit too inconvenient to use the TTY itself. Using it made me aware of just how many useful functionalities a terminal emulator brought to the table.

Realizing it would be far more comfortable to use my laptop and SSH into my PC, I enabled `sshd` via the NixOS config file, gave it a custom port and implemented all the security hardening measures recommended on the wiki page.

I'm weary of the implications that come with allowing access via the internet so I've made it local network only for now.

### Bringing a NextCloud instance online

Some time ago I came across [NextCloud](https://nextcloud.com/) and thought about how fun it would be to play around with. I don't necessarily plan to use it a lot, but I figured I'd at least give it a go!

Installing it on NixOS was very convenient! I followed [the NixOS Manual entry](https://nixos.org/manual/nixos/stable/#module-services-nextcloud) and [the NixOS Wiki entry](https://nixos.wiki/wiki/Nextcloud), using the the declarative configuration file to enable and configure the services required. NextCloud was already included and enabling it with the default configuration would add any dependencies like `nginx` or `PostgreSQL` automatically!

> The NixOS Wiki and the Manual aren't equal.
> Though both are a good source of information, the examples provided are different and will result in some information provided in one which is not provided in the other. It's best to read both when looking to setup something.

I have encountered a small bug though: following the wiki example, NextCloud was setup using [`sqlite`](https://www.sqlite.org/) by default. When I went to replace it with [Postgre](https://www.postgresql.org/) or [MariaDB](https://mariadb.com/) (as is recommended for production builds by NextCloud), I found out you first have to be a migrate the data. There's a script provided for that, which was buggy and temporarily disabled for my version of NixOS. I'll just have to do it manually at some point, but `sqlite` will do just fine for now, I believe.

After the initial setup, I had a NextCloud instance running via `nginx` and available at `127.0.0.1:80`.

But I wanted to access it from outside my local network.

### Exposing NextCloud to the internet.

First, I assigned a static IP to my PC via my router's admin page.

I then needed a static address for the router itself! Since my ISP's offer was far too expensive for a hobbyist, I used [No-IP's services](https://www.noip.com/) to get a dynamic DNS for my router.

One port forward later and everything was done!

I tested access from my phone's mobile internet, and was elated to be greeted by NextCloud's admin page!

## Re-flashing my old smartphone

I didn't want the aforementioned server PC to run all the time - the noise bothered me. My idea was to have it turn on on-demand. Whenever something's querying for data, I want the PC to turn on, and then turn off after sometime of no activity.

To do this, I would use my PC's network card's Wake-on-LAN capabilities. I tested everything and got it working, but having it be possible outside of LAN required my router's firmware to be open - which it wasn't. ([Go, FSFE, go!](https://fsfe.org/activities/routers/routers.en.html))

To circumvent that, I came up with having my old smartphone always online in my home, ready to receive a signal and wake the PC over LAN. There's a nifty little Android terminal emulator called [Termux](https://termux.dev/en/) which would allow me to write a quick bash script to do so.

And so I decided to re-flash my rooted old phone. If you're thinking: "I don't think it was necessary to flash a custom ROM for that..", you'd be right.

### Installing LineageOS (LOS)

The phone was running an old DotOS version made for Android 10. And I had wanted to try out LineageOS for a while, so it was an easy choice for bringing it up to Android 14.

Given that the phones bootloader was already unlocked, it was just a matter of following [LOS' instructions](https://wiki.lineageos.org/devices/dipper/install/) to the t!

> `adb` and USB 3.0
> If you're going to try this out yourself, keep in mind that that `adb` (Android Debug Bridge; and thus`fastboot` too) can be buggy if you're connecting the phone to a computer via a USB 3.0 port. Use a 2.0 instead, even if it's via a USB Hub.

After switching between the USB ports on my PC, I successfully flashed the phone!

### installing Pi-Hole

In my research of ROMs for my phone I stumbled upon this amazing project called "Pi-Hole-Droid". It was a way to install [Pi-Hole](https://pi-hole.net/) on a device running Android.

Download the `.apk` file they recommend, run it, give it root permissions, and you get a mini-Debian installation running Pi-Hole! Works out of the box!

I just had to give the phone a static IP as well, and forward its port to use it as a DNS server on other devices!

> It, again, would've been very convenient if my router's firmware was open.
> Since my router's firmware is closed, I'm not able to set my Pi-Hole as the default DNS server for any device that connects. This means I have to setup the DNS server manually on each client..

## Making `duraludon` both a server and a gaming station

At some point I thought: "Well if my server was only going to run on-demand, why shouldn't I use it for gaming too?".

And so I decided to dual-boot. But which OS? Well I've been mainlining Linux for some time now. And while Windows was the recommended gaming OS in the past, Linux has quickly become a viable contender due to Valve's work on the SteamDeck and [Proton](<https://en.wikipedia.org/wiki/Proton_(software)>).

Furthermore, since I'm packing an NVIDIA card, I knew I wanted a rolling-release distro for regular driver updates, preferably Arch-based. I almost went with [EndeavourOS](https://endeavouros.com/) yet again, but then I found [Garuda Linux](https://garudalinux.org/).

### Dual-booting Garuda

First, I formatted USB drive I had lying around. Then I used `pv` to copy Garuda's ISO image to the USB. I booted from USB on my PC, ran the installer, shrunk NixOS' disk partition to make space for Garuda, and waited for the magic to happen!

On first boot I had to fix a KDE bug which involved making the renderer use hardware rendering instead of software rendering. But afterwards it was smooth sailing!

Using Garuda's tools to install Steam was the only thing different than a Windows install. Steam itself was native, game installation from the library was the same, and launching the game (in this case [Divinity Original Sin EE](https://steamcommunity.com/app/373420)) just worked!

I'm amazed how far gaming on Linux has gotten!

> Since initially writing this, I've also tried Skyrim and it works like a charm!

## Fin

'Till next time!
