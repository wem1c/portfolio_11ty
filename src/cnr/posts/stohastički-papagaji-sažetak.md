---
title: "🦜 Stohastički papagaji: Sažetak (donekle)."
description: "Minimalne informacije koje biste trebali znati o problemima s velikim jezičnim modelima."
category: "istraživanja"
date: "2023-03-27"
bannerImage: "/images/posts/stochastic-parrots-a-summary.jpg"
bannerImageAlt: "image of a colorful parrot"
bannerImageAttribute: 'Photo by <a href="https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Clode</a> on <a href="https://unsplash.com/photos/G7Jd9fMuRHs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
altLocaleUrl: "/en/blog/stochastic-parrots-a-summary.html"
tags: posts_cnr
---

# 🦜 Stohastički papagaji: Sažetak (donekle).

Prošle nedelje, naišao sam na [naučni rad](https://dl.acm.org/doi/pdf/10.1145/3442188.3445922) pod nazivom: “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜” (Da, sa emotikonom!). Među četvoro autora bile su i bivše voditeljice Google-ovog tima za AI etiku, Timnit Gebru i Margaret Mitchell. Otpuštene su zbog ovog rada koji su objavile. Ako to nije dovoljan podsticaj da sami pročitate rad, dozvolite mi da pomenem neke stvari pokrivene u istom u nadi da vas dodatno podstaknem.

## Šta: OPJ, a ne RPJ.

Ako ništa drugo, želim da upamtite samo ovo: **Jezični modeli ne razumiju jezik.**

Oni ne vrše _Razumijevanje_ Prirodnog Jezika (krat. RPJ; en. _NLU - Natural Language Understanding_), već _Obradu_ Prirodnog Jezika (krat. OPJ; en. _NLP - Natural Langue Processing_).

Jezični modeli obrađuju ulaz koji im dajemo u odnosu na skup podataka na kojem su obučeni. Ovaj skup podataka je (obično) samo gomila tekstova sa interneta (jedva) očišćenih od nepoželjnog sadržaja kao što su riječi koje se odnose na rasizam, seksizam, nasilje, itd. Zatim se povezuju sa različitim vrijednostima koje predstavljaju informacije kao što su tema na koju se odnose ili tonalitet teksta.

Kada upitate ove modele nešto putem raznih AI rješenja koja ih koriste, kao što je [_ChatGPT_](https://chatgpt.com/), bazni jezični model pokušava da poveže ono što ste pitali sa najbližim odgovarajućim informacijama koje ima u svojoj bazi podataka (skupu podataka na kojem je učen), i zatim vam to vraća formatirano tako da podsjeća na ljudski govor. On zapravo ne razumije šta ste pitali niti šta je vratio - samo da su ta dva pojma blisko povezana na osnovu informacija na kojima je obučen.

## Kako: nasumično.

Znajući osnovni proces, logično biste zaključili da što je veći skup podataka, to su bolji rezultati. Pretpostavljajući da je ovo tačno, sada razmišljate o tome koliko veliki skup podata može biti. Teoretski, sve dok to možete obraditi na vrijeme, veličina nije ograničena. u realnosti, ne kreirate nov skup podataka od nule pišući ga ručno. Zašto biste? Imate postojeći ogroman arhiv tekstova napisanih od strane ljudi, koji sadrži svo znanje ovog sveta, na dohvat ruke - _internet_.

Najveći jezični modeli do danas, _OpenAI_-jev _GPT3_ i _Google_-ovi _GShard_ i _Switch-C_, imaju milijarde i trilione parametara, kao i skupove podataka do 745 gigabajta. 745 gigabajta slova, riječi, rečenica. Bez fotografija, video zapisa, 3D simulacija, ičega što je značajne veličine za moderne standarde. Ovi skupovi podataka se sastoje od pretraženih tekstova sa _Wikipedije_, _Reddit_-a, vijesti, društvenih mreža i svega ostalog što je pronađeno u poslednjih deceniju ili dvije postojanja interneta.

I sve dok je to malo očišćeno, situacija je sjajna! Ne može biti ikakvih problema, zar ne?

## Problemi: brojni.

Počnimo sa uticajem na životnu sredinu koji stvaranje ovakvih zvijeri ima. Procjenjuje se da obuka jednog _BERT_ baznog modela zahtijeva onoliko energije koliko i transatlantski let. I dok bi dio iskorištene energije mogao biti zelen (dobijen iz obnovljivih izvora ili kompenzovan ugljeničnim kreditima) - većina nije.

I to je cijena hranjena modela lošim podacima. Većina korisnika interneta su mlađi ljudi iz razvijenih zemalja. Većina korisnika _Reddit_-a su muškarci, a samo 8-15% Wikipedijanaca su žene. Pošto se baziraju na pretraženim podacima sa interneta, ovo znači da naši skupovi podataka uopšte nemaju raznolikost i ne uključuju veliki dio ljudske populacije. Ne samo to, već su djelovi interneta koji sadrže nedovoljno zastupljene populacije manje verovatno uključeni u skupovima podataka zbog primjenjenih metoda prikupljanja.

Štaviše, veći dio skupa podataka se čisti odbacivanjem sadržaja koji pominje ijednu riječ sa liste od oko 400 "Prljavih, nestašnih, opscenih ili na drugi način loših riječi" (en. _“Dirty, Naughty, Obscene or Otherwise Bad Words”_). Kao da to već nije nedovoljan napor, riječi na listi su pretežno riječi vezane za seks, sa samo nekoliko rasnih uvreda i riječi vezanih za "bijelu nadmoć".

Pored toga, urođena pristrasnost sadržana u tekstovima koje su napisali ljudi se direktno prenosi modelu. Studija _BERT_-a je pokazala da povezuje ljudske invaliditete sa više negativnih riječi nego pozitivnih, kao i da su nasilje, beskućništvo i zavisnost o drogama prekomjerno povezani sa mentalnim bolestima. Druga studija je pokazala da modeli sa ogromnim skupovima podataka kao što je _GPT-3_ generišu rečenice sa visokim nivoom toksičnosti čak i kada im se daju netoksični upiti. Ista studija je takođe otkrila da je 272 hiljade dokumenata u podacima _GPT-2_-a došlo od nepouzdanih vijesti i zabranjenih _subreddita_. Mirni društveni pokreti se zanemaruju u korist dramatičnih i nasilnih od strane medijskih izveštaja, pa tako ni oni ne ulaze u skup podataka.

Skupovi podataka su jednostavno preveliki da bi se temeljno obradili i dokumentovali, što znači da je potrebna minimalna količina odgovornosti nemoguća.

## Posledice: ozbiljne.

Naši modeli sada mogu koristiti, i često koriste, pristrasne, uvredljive stavove i pogrdni jezik. A pošto ljudi imaju tendenciju da traže (i izmišljaju) značenje gdje ga nema, kao što i model generiše vještačke tekstove koje ne razumije, sada imamo uvjerljivo inteligentnu mašinu koja će rado pružiti užasne savjete ne razumijevajući šta zapravo govori.

Zato su ovi modeli nazvani "Stohastičkim papagajima" (en. _Stochastic Parrots_) - jer oni samo ponavljaju fraze i informacije iz svoje baze podataka koje su na osnovu matematičke verovatnoće povezane sa upitom koji im je dat. Nasumično ponavljaju stvari koje su "čuli", bez ikakve ideje šta one zapravo znače.

Ljudi su potom izloženi novim stereotipima i iskrivljenim pogledima na svijet. Ili im se postojeći pojačavaju. Drugi bivaju hapšeni zbog modela koji nepravilno prevodi njihov post "Dobro jutro!" kao terorističku propagandu. Neki namerno koriste ovu specifičnu sposobnost koju modeli sada poseduju za kreiranje regrutacionih postova koji izgledaju kao da ih je napisao stvarni ljudski teoretičar zavjere.

A mi već uključujemo ove modele u razne važne aspekte naših života kao što su medicina i obrazovanje.

## Rješenja.

U navedenom radu, autori navode brojne načine kako možemo poboljšati i zaštititi se od ovih problema pri stvaranju novih skupova podataka i obučavanju novih modela. Apelujući istraživače da pređu na razmišljanje i pažljivo planiranje prije nego što uopšte započnu poduhvat stvaranja AI-ja. Razmatrajući i planirajući finansijske i ekološke troškove razvoja unaprijed. Sastavljajući skupove podataka koji direktno rješavaju zadatak, umjesto prikupljanja velike količine opštih podataka zbog pogodnosti.

Usvajanjem okvira koji definišu za koje su namjene njihovi modeli pogodni, kao i pružanjem detaljne dokumentacije o korištenim podacima, motivaciji za prikupljanje ovih podataka, kao i samom procesu prikupljanja podataka. Ne fokusirajući se na povećanje modela kako bi se postigli bolji rezultati na raznim proizvoljnim rang listama. Istražujući mogućnost označavanja izlaza koji modeli kreiraju kako bi se omogućilo prepoznavanje teksta koji je napisala AI umjesto čovjeka.

Krivica ne leži na samim modelima, već na nama kao stvaraocima i načinu na koji to radimo. AI je najnoviji alat napravljen od strane ljudi i tu je da ostane. Ali moramo biti izuzetno pažljivi i temeljni u našim metodama prikupljanja i obrade podataka, i obuke modela, kako bismo osigurali da ovi alati budu korisni a ne štetni.

## Zaključak.

Stigli ste do ovdje pa dozvolite da vam uštedim trud skrolanja nazad do vrha: [naučni rad](https://dl.acm.org/doi/pdf/10.1145/3442188.3445922). Autori izvrsno pokrivaju sve pomenute teme i mnogo više, referencirajući svoje izvore u svakom dijelu. Postoji mnogo toga što nisam pokrio u ovom članku, jer rad morate pročitati sami. Do sljedećeg puta!
