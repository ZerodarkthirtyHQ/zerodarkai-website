# 📦 What You Got — Zero Dark AI: The Seller

> Your complete cheat sheet. Everything installed, everything scheduled, everything explained.
> Bookmark this. Come back whenever you forget what your agent can do.

---

## 🤖 Your Agent

| | |
|--|--|
| **Name** | Set in `SOUL.md` (customize it — name it whatever you want) |
| **Platform** | OpenClaw |
| **Channel** | Discord (your server) |
| **Model** | Claude Sonnet (Anthropic) |
| **Memory** | Persistent — remembers everything you tell it |

---

## 💬 How to Talk to Your Agent

Just message it in Discord like a person. No commands to memorize.

**Examples:**
- *"What should I post today?"*
- *"Write me 5 TikTok hooks for my candle brand"*
- *"What are the trending products this week?"*
- *"Draft an Instagram caption for this photo: [describe it]"*
- *"Remind me to reorder wax on Friday"*
- *"What did you do today?"*

Your agent understands plain English. Talk to it like a smart assistant, not a computer.

---

## 🛠️ Skills Installed

Skills are tools your agent can use. These are pre-installed and ready to go.

| Skill | What It Does |
|-------|-------------|
| **web-search** | Searches the internet for trends, products, competitors |
| **web-fetch** | Reads full web pages — product listings, articles, competitor sites |
| **apple-reminders** | Sets reminders for you ("remind me at 3pm to film content") |
| **apple-notes** | Saves ideas, research, and notes you want to keep |
| **gog (Google Workspace)** | Reads your Gmail, manages Calendar, updates Sheets |
| **social-post CLI** | Posts to TikTok, Instagram, Threads, and X on command |
| **nano-banana-pro** | Generates product images using AI |
| **video-frames** | Extracts frames from videos for thumbnails |
| **seo-machine** | Keyword research and SEO-optimized listing copy |
| **content-engine** | Pam's 6-file content factory — scripts, hooks, captions |
| **weather** | Local weather (useful for day-of content planning) |
| **prompt-guard** | Blocks prompt injection attacks — keeps your agent safe |

---

## ⏰ What Runs Automatically (Your Cron Schedule)

Your agent works while you sleep. Here's everything it does automatically:

### Daily Jobs

| Time | Job | What Happens |
|------|-----|-------------|
| **7:00 AM** | Morning Brief | Top priorities for the day, pending tasks, anything urgent |
| **8:00 AM** | Script Batch | 10 ready-to-film TikTok/IG scripts in your niche |
| **9:00 AM** | Trend Scout | Trending sounds, hashtags, and formats right now |
| **11:00 AM** | Product Scout | 5 trending product ideas in your category |
| **3:00 PM** | Posting Queue | Drops any approved content to your connected platforms |
| **10:00 PM** | Nightly Recap | Summary of what ran today, what's pending tomorrow |

### Weekly Jobs

| Day/Time | Job | What Happens |
|----------|-----|-------------|
| **Mon 9:00 AM** | Competitor Watch | Price + listing changes from your top 5 competitors |
| **Sun 10:00 AM** | Analytics Recap | Week's performance — what hit, what didn't, what to do differently |

### Always-On Health Jobs

| Schedule | Job | What Happens |
|----------|-----|-------------|
| **Every 30 min** | Gateway Health Ping | Makes sure your agent is alive and restarts if needed |
| **Every 6 hrs** | Cron Watchdog | Checks all scheduled jobs for errors, fixes if possible |
| **2:00 AM** | Security Audit | Checks file permissions, scans for exposed API keys |
| **2:30 AM** | Memory Consolidation | Cleans up memory files, keeps your agent sharp |
| **3:00 AM** | Workspace Backup | Full backup of your agent's brain |

> 💡 To pause any job: `openclaw cron disable [job-name]`
> To see all jobs running: `openclaw cron list`

---

## 📺 Your Discord Channels

| Channel | What It's For |
|---------|--------------|
| **#command-center** | Main channel — talk to your agent here |
| **#morning-brief** | Your daily priorities, auto-posted at 7 AM |
| **#nightly-recap** | What happened today, auto-posted at 10 PM |
| **#scripts** | Your daily batch of 10 TikTok/IG scripts |
| **#trends** | Daily trending sounds + hashtags |
| **#product-scout** | 5 new product ideas every day |
| **#posting-queue** | Content staged for posting + posting confirmation |
| **#competitor-watch** | Weekly competitor price + listing changes |
| **#analytics** | Weekly performance recap |
| **#ops-log** | Background activity log — everything your agent did |

---

## 🔁 How the Content Pipeline Works

```
#product-scout         ← Agent finds trending products (11 AM)
        ↓
#scripts               ← Agent writes scripts for those products (8 AM next day)
        ↓
You film the content
        ↓
Drop video in #posting-queue with a thumbs-up react 👍
        ↓
#posting-queue         ← Agent posts to TikTok, IG, Threads (3 PM)
        ↓
#analytics             ← Performance tracked Sunday morning
```

---

## 🧠 Teaching Your Agent

Your agent gets smarter the more you tell it. Say these kinds of things in #command-center:

**Voice & Brand:**
- *"My brand voice is casual, funny, and direct — no corporate speak"*
- *"My niche is handmade soy candles targeting women 25–40"*
- *"My TikTok handle is @[handle] — always write captions that fit that vibe"*

**Preferences:**
- *"I film content on Tuesday and Thursday — batch scripts for those days"*
- *"I use CapCut to edit — write hooks that work well with jump cuts"*
- *"Never post anything political or controversial"*

**Competitors:**
- *"My top competitors are [Brand A], [Brand B], [Brand C]"*
- *"Track their Etsy listings and let me know if they drop prices"*

Everything you tell it gets written to memory permanently.

---

## 📱 Approving Content Before It Posts

Your agent will never post without your approval. Here's the flow:

1. Finished content appears in **#posting-queue**
2. **React with 👍** to approve and post
3. **React with ❌** to reject (agent won't post it)
4. **Reply with edits** to request changes before posting

You're always in control. The agent is your assistant, not autopilot.

---

## 🖼️ Generating Product Images

Ask your agent directly:

*"Generate a product photo of a vanilla scented candle, dark moody aesthetic, marble background"*

Images are delivered in Discord. Download and use however you want.

---

## 💡 Pro Tips

**Get better scripts:** The more specific you are about your niche, the better. *"Write a TikTok hook about why soy candles burn longer than paraffin"* beats *"write a candle script."*

**Use it as a research assistant:** *"What's trending in home décor right now?"* or *"What are customers complaining about in candle reviews on Amazon?"*

**Set up your Etsy/TikTok Shop:** Tell the agent your store URL and it will monitor it, suggest optimizations, and track competitor listings automatically.

**Batch approve content:** Go into #scripts Sunday night, pick your favorites for the week, have the agent queue them up. 20 minutes = entire week of content scheduled.

---

## 📞 Support

**Something broken?**
→ Type `openclaw doctor` in Terminal — fixes 90% of issues automatically
→ Email: support@zerodarkAI.com (24hr response)

**Want to upgrade to cloud-hosted (24/7, no computer required)?**
→ [zerodarkAI.com/cloud](https://zerodarkAI.com/cloud)

**Want to add more capabilities?**
→ Skill Pack add-ons available at [zerodarkAI.com/packs](https://zerodarkAI.com/packs)

---

*Zero Dark AI — The Seller Build v1.0*
*support@zerodarkAI.com | zerodarkAI.com*
