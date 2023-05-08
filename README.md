[![Maintainability](https://api.codeclimate.com/v1/badges/cee0febc3cb1907b24d9/maintainability)](https://codeclimate.com/github/21142/spotify-nextjs/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/21142/spotify-nextjs/badge.svg)](https://snyk.io/test/github/21142/spotify-nextjs)

## Music player app implementing Spotify API

![Alt](https://repobeats.axiom.co/api/embed/6a2b7ca5e451f5dccb0b3820de059776d8bfd85c.svg "Repobeats analytics image")

In this build I've used:

- [x] Next.js
- [x] Recoil
- [x] Tailwind CSS
- [x] NextAuth

\
You'll need to have a premium Spotify account to test the app.\
To run the development server use the following command:

```bash
npm install
# then
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser\
\
Make sure to open spotify on one of your devices, then play&pause a song before trying to play songs through this app\
\
You could go to this link [https://open.spotify.com/](https://open.spotify.com/) to open their web player\
\
The device which you make active (play&pause a song on) is going to act as a 'speaker' that you can remotely control from this web app\
\
Docs used for this build:

- [https://nextjs.org/docs/middleware](https://nextjs.org/docs/middleware)
- [https://next-auth.js.org/tutorials/refresh-token-rotation](https://next-auth.js.org/tutorials/refresh-token-rotation)
- [https://developer.spotify.com/documentation/general/guides/authorization/scopes/](https://developer.spotify.com/documentation/general/guides/authorization/scopes/)
- [https://recoiljs.org/docs/introduction/getting-started/](https://recoiljs.org/docs/introduction/getting-started/)
- [https://tailwindcss.com/docs/guides/nextjs](https://tailwindcss.com/docs/guides/nextjs)
