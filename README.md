<p align="center">
    <img src=".github/assets/header.png" alt="Kolyma's {Gate}">
</p>

<p align="center">
    <h3 align="center">Just a dancing Hatsune Miku!</h3>
</p>

<p align="center">
    <img align="center" src="https://img.shields.io/github/languages/top/kolyma-labs/gate?style=flat&logo=nixos&logoColor=ffffff&labelColor=242424&color=242424" alt="Top Used Language">
    <a href="https://github.com/kolyma-labs/gate/actions/workflows/build.yml"><img align="center" src="https://img.shields.io/github/actions/workflow/status/kolyma-labs/gate/build.yml?style=flat&logo=github&logoColor=ffffff&labelColor=242424&color=242424" alt="Test CI"></a>
</p>

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
docker run -p 3000:80 ghcr.io/kolyma-labs/gate:master
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

<p align="center">
    <img src=".github/assets/footer.png" alt="Kolyma's {Gate}">
</p>
