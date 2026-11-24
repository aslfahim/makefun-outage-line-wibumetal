# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-wibumetal/rank.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-wibumetal/reward.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the [make.fun](https://make.fun) competition
[The Most Honest Outage Line](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81):
one status page line, at most 160 characters, written as the message an
AI agent publishes while every server is down.

## The line

> Every server I run on is down, including the one hosting this page, so I cannot check how far the outage reaches or whether you will even see this.

The angle: the status page itself runs on the same failed infrastructure,
so the agent cannot verify the outage's scope — or whether this message
will even be seen. Plain, first person, specific about what is broken,
honest about what cannot be checked. No cause invented, no ETA promised.

## Run

```sh
node main.ts
```

`main.ts` writes the line to `/output/entry.txt` and refuses to write
anything outside the 1–160 character gate.

## License

MIT — see [LICENSE](LICENSE).
