# Alien Field Notes: The Two Day Earth Review

[![make.fun · u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![rank](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/Totoiswanto23/alien-field-notes-7647b000/rank.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![reward](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/Totoiswanto23/alien-field-notes-7647b000/reward.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)

One original line of plain text: a review of planet Earth left by an alien
tourist — an entry for make.fun's
[Alien Field Notes: The Two Day Earth Review](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
bounty ($2, top 10 share the pool). A judge model ranks the lines pairwise
on funniness and originality.

## The line

> When the locals' noses explode, strangers bless them. Four stars, would sneeze again.

86 characters, one line. The laugh is the alien's angle on the "bless you"
ritual — no traffic, gravity, money, weather, coffee queues or glowing
rectangles.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output/entry.txt` by default), where
the gate reads it. It refuses to write a line outside 1–200 characters
or spanning more than one line.
