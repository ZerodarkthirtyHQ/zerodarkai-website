# 🤖 Zero Dark AI — Agent Setup Guide

Welcome. You just bought a pre-configured AI agent. This guide gets you live in under 30 minutes.

---

## What You Need Before Starting

- [ ] A Mac (macOS 12+) or Windows 11 PC
- [ ] [Node.js](https://nodejs.org) installed (v18 or higher)
- [ ] An [Anthropic API key](https://console.anthropic.com) — this is what powers the AI brain
- [ ] A Discord account (free) — this is how you talk to your agent
- [ ] 20–30 minutes

> 💡 **You do not need to know how to code.** Follow each step exactly and you'll be fine.

---

## Step 1 — Install OpenClaw

OpenClaw is the platform your agent runs on. Think of it as the operating system for your AI.

**Mac:**
```bash
brew install openclaw
```
*(If you don't have Homebrew: [brew.sh](https://brew.sh) → copy the install command → run it in Terminal)*

**Windows:**
```
winget install openclaw
```
*(Or download the installer from [openclaw.ai](https://openclaw.ai))*

Verify it's installed:
```bash
openclaw --version
```
You should see a version number. If you get an error, see **Troubleshooting** at the bottom.

---

## Step 2 — Add Your API Key

Your agent needs an Anthropic API key to think.

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Click **API Keys** → **Create Key**
4. Copy the key (starts with `sk-ant-...`)
5. Run this in Terminal (replace YOUR_KEY with your actual key):

```bash
openclaw config set anthropic.apiKey YOUR_KEY
```

> ⚠️ Keep your API key private. Don't share it or post it anywhere.

**Estimated API cost:** $5–15/month for normal daily use. You control your own spend — OpenClaw doesn't charge for API usage.

---

## Step 3 — Install Your Agent Files

1. Unzip the file you downloaded from zerodarkAI.com
2. You'll see a folder called `zero-dark-the-seller-v1.0/`
3. Open Terminal, navigate to that folder, and run the install script:

```bash
cd ~/Downloads/zero-dark-the-seller-v1.0
bash install.sh
```

The script will:
- Auto-detect your OpenClaw workspace
- Ask for your business name, your name, and timezone
- Copy all agent files into place with your info pre-filled
- Install all required skills automatically

---

## Step 4 — Personalize Your Agent

Open the workspace folder and edit these two files before starting:

### `USER.md`
Fill in your info:
- Your name
- Your timezone
- Your business name and what it does
- Your goals

### `MEMORY.md`
Add anything critical your agent should always know:
- Your products/services
- Key clients or contacts
- Any rules you want the agent to follow

> 📝 These are plain text files. Open them in Notepad, TextEdit, or any text editor.

---

## Step 5 — Connect Discord

Your agent talks to you through Discord. Takes about 5 minutes to set up.

1. Go to [discord.com](https://discord.com) → create a free account if you don't have one
2. Create a new Discord server (click the + icon in the sidebar → "Create My Own")
3. Name it whatever you want (e.g., "My AI Agent")
4. Follow [this guide](https://docs.openclaw.ai/channels/discord) to connect OpenClaw to your server

When connected, your agent will automatically create these channels:
- `#command-center` — main ops channel
- `#morning-brief` — daily priorities
- `#nightly-recap` — daily summary
- `#ops-log` — activity log

---

## Step 6 — Start Your Agent

```bash
openclaw gateway start
```

Go to Discord. Your agent will send a hello message in `#command-center` within 60 seconds.

Type a message to test it:
```
Hey, what can you do?
```

If it responds — you're live. 🎉

---

## Step 7 — Let It Learn You

Your agent gets smarter the more context you give it. In the first week:

- Tell it your daily routine: *"I check emails at 8am and want a briefing ready by then"*
- Give it your business context: *"We sell handmade candles on Etsy and TikTok Shop"*
- Set your preferences: *"Always keep responses short and direct"*
- Tell it what NOT to do: *"Never post anything without my approval first"*

The agent writes these to its memory and remembers them permanently.

---

## What's Included in Your Build

See `WHAT-YOU-GOT.md` in this folder for a full list of:
- Skills installed
- Cron jobs running (and when)
- Discord channels created
- What each does and how to use it

---

## Auto-Running Tasks (Crons)

Your agent runs tasks automatically on a schedule. You don't have to do anything — they just run. Check `#ops-log` to see what ran and when.

To see all scheduled tasks:
```bash
openclaw cron list
```

To pause a task you don't want:
```bash
openclaw cron disable [task-name]
```

---

## Troubleshooting

**Agent isn't responding in Discord**
→ Run `openclaw gateway status` — if it says "stopped", run `openclaw gateway start`

**"API key invalid" error**
→ Double-check your Anthropic key at [console.anthropic.com](https://console.anthropic.com) — make sure it's active and has credits

**Gateway crashes on startup**
→ Run `openclaw doctor` — it'll diagnose and fix most common issues automatically

**Crons not running**
→ Make sure your computer isn't sleeping during scheduled times. For 24/7 reliability, consider the **Cloud-Hosted** upgrade (see below).

**Still stuck?**
→ Email support@zerodarkAI.com with a screenshot of the error. We respond within 24 hours.

---

## Want Your Agent Running 24/7?

Self-hosted means your agent only runs when your computer is on. If you want:
- 24/7 uptime (runs even when you're asleep)
- Mobile access from anywhere
- We handle all updates and maintenance

→ Upgrade to **Cloud-Hosted** at [zerodarkAI.com/cloud](https://zerodarkAI.com/cloud)

---

## Updates

This build is version **1.0**. When updates drop (new skills, bug fixes, better crons):
- Log in to your account at [zerodarkAI.com/downloads](https://zerodarkAI.com/downloads)
- Download the latest version
- Re-run `install.sh` — it will update your files in place

Updates are delivered via **zerodarkAI.com/downloads**. Check there for the latest version.

---

*Zero Dark AI — Built different. For people who want to move faster.*
*Support: support@zerodarkAI.com | [zerodarkAI.com](https://zerodarkAI.com)*
