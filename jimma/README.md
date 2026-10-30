Put the finished DFY Lite static page in this folder.

Required before LeadPortal Pull Git can deploy:

- leadportal-artifact/index.html
- every CSS, JS, image, font, and media file referenced by index.html

LeadPortal uploads this folder directly for DFY Lite and does not run npm install/build on Replit.

Use relative paths such as ./profile/headshot.png or ./assets/main.css.
Do not use leading-slash paths such as /profile/headshot.png.
Do not reference private Drive links, local machine files, or uncommitted assets.
