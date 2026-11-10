CodeQuest Quiz Website

Run locally by opening index.html in a browser. For public hosting, upload the
contents of this folder to a static hosting provider and use index.html as the
site entry point. Keep the css and js folders alongside the HTML files.

Reliability changes in this version:
- Quiz selection works when browser local storage is restricted by using URL
  parameters as a fallback.
- Invalid or expired quiz selections return safely to the home page.

Traffic and uptime:
This is a static website with no application server or database. It puts little
load on a host, and a CDN-backed static host is a good fit. No application can
guarantee uninterrupted service for unlimited traffic: hosting plan limits,
provider outages, DNS, and network capacity still apply. For production, use a
reputable static host with CDN delivery, check its bandwidth/request limits,
configure a custom domain and HTTPS, and monitor the deployed URL. If you add
accounts, saved scores, or other shared data later, those features need a
separately scaled backend.
