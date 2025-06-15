+++
date = '2025-06-15T18:52:45+03:00'
draft = false
title = 'Cloud Cannon Tutorial #6'
+++

### Why map doesn't show?

It turns out that it doesn't work without the two dot `..` in front of `/map.js` in `/layouts/shortcodes/vacation_spots.html`!

### Why there is no spaces between words on Nav bar?

Need to decipher two things:

1. *Minifying*: what is it? What would happen if line 70 is commented out?
2. *HTML is for content. CSS is for styling. You should use CSS to add horizontal spacing*  