<header>
<img src="https://www.katsuki.moe/favicons/pinned.svg" alt="logo" height="100" align="left">
<h1 style="display: inline">Miku</h1>

Just a dancing Hatsune Miku!

[![GitHub top language](https://img.shields.io/github/languages/top/katsuki-yuri/miku?style=flat-square&logo=github)](https://github.com/katsuki-yuri/miku)
[![Channel](https://img.shields.io/badge/Chat-grey?style=flat-square&logo=telegram)](https://t.me/yurionblog)
[![Test CI](https://github.com/katsuki-yuri/miku/actions/workflows/build.yml/badge.svg)](https://github.com/katsuki-yuri/miku/actions/workflows/build.yml)

</header>

## About

This website is a Hatsune Miku dancing website which primarily uses three.js
library to animate the scheme.

> I host all contents statically, so you may correct me up by sending a pull
> request.

## Features

- Dancing miku!
- Pleasant music
- Docker image for easy deployment

## Development

Website is built from static html, css and js files with its preloaded modules downloaded onto repo.
All you need to do is just host those static files and enjoy dancing miku!

## Docker

Also, you may actually run the docker image hosted on GitHub Container Registry:

```bash
docker run -p 3000:3000 ghcr.io/katsuki-yuri/miku:latest
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.