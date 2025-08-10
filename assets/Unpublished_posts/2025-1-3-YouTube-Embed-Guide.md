---
layout: post
title: "YouTube Embed Guide - Avoiding Security Errors"
date: 2025-01-03
categories: [guide, technical]
---

# YouTube Embed Guide - Avoiding Security Errors

If you're getting the error "To protect your security, www.youtube.com will not allow Firefox to display the page if another site has embedded it," here's how to fix it.

## The Problem

The issue occurs when you use the wrong YouTube embed URL format. Firefox blocks embeds from `youtu.be` domains for security reasons.

## ❌ Wrong Format (Causes Security Error)

```html
<iframe src="https://youtu.be/embed/VIDEO_ID" ...></iframe>
```

## ✅ Correct Format (Works Everywhere)

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>
```

## How to Get the Correct Embed Code

1. **Go to your YouTube video**
2. **Click "Share"**
3. **Click "Embed"**
4. **Copy the iframe code**

The generated code will look like this:

```html
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
</iframe>
```

## URL Conversion Guide

If you have a YouTube URL, here's how to convert it:

| Original URL | Embed URL |
|--------------|-----------|
| `https://www.youtube.com/watch?v=VIDEO_ID` | `https://www.youtube.com/embed/VIDEO_ID` |
| `https://youtu.be/VIDEO_ID` | `https://www.youtube.com/embed/VIDEO_ID` |
| `https://youtu.be/embed/VIDEO_ID` | `https://www.youtube.com/embed/VIDEO_ID` |

## Example

**Original URL:** `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

**Correct Embed:**
```html
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="Example Video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
</iframe>
```

## Why This Happens

- `youtu.be` is YouTube's URL shortener
- Firefox blocks embeds from shortener domains for security
- `www.youtube.com` is the official domain and is trusted
- Always use `https://www.youtube.com/embed/VIDEO_ID`

## Quick Fix for Existing Posts

If you have existing posts with the wrong format, search for:
```
youtu.be/embed
```

And replace with:
```
www.youtube.com/embed
```

This should resolve the security error and allow your videos to display properly in all browsers.
