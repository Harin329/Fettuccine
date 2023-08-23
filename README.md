<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://fettuccine.hungrii.com/">
    <img src="static/AppIcon.png" alt="Logo" height="100" resize>
  </a>
  <h3 align="center">Fettuccine</h3>
</p>


<!-- TABLE OF CONTENTS -->
  <h2 style="display: inline-block">Table of Contents</h2>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>



<!-- ABOUT THE PROJECT -->
## About The Project

Webapp for vetting scraped Umami recipes. Upon entering a URL, an editable preview can be viewed and modified before being saved to the database.


### Built With

* Svelte - Frontend
* AWS Amplify - Hosting


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm

### Installation

1. `cd` into fettuccine/
2. run `npm install`
3. start server with `npm run dev -- --open`

<!-- DEPLOYMENT -->
## Deployment

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
