<img src="{{ path '/images/design-cover-img@2x.jpg' }}" alt="Welcome to design.stjude.cloud!" width="1280px" height="320px" style="max-width: unset"/>

## Getting Started

We use Figma for mockups and prototypes on the St. Jude Cloud project. Once you are added to the St. Jude Cloud Figma group, you may visit the [St. Jude Cloud Design System project][figma-dsm]. The instructions to get started with the design system are on the [Getting Started][getting-started-dsm] page in the Figma project. Note that the Figma file may contain experimental components and does not represent the official, production version of our design system.

## Development

[design.stjude.cloud] and the corresponding source at the [St. Jude Cloud theme repo][theme-repo] represent the production ready version of the design system. Updates to the design system are governed through pull requests that are worked on by multiple teams, and the packages packages listed below are updated in sync to ensure the look and feel remains consistent across the ecosystem.

| Javascript Framework | CSS Framework | NPM Package                                      |
| -------------------- | ------------- | ------------------------------------------------ |
| React                | Bootstrap     | See the [official React package][react-package]. |
<!-- | Vue                  | TailwindCSS   | See the [official Vue package][vue-package].     | -->

We use [Fractal][fractal] for [design.stjude.cloud]. See the `README.md` on the [theme repo][readme] for more details on developing, installing, and contributing to our theme.

## Process Checklist

If you'd like to suggest modifications to the design system or add new components, here is the process we follow.

- [] To start, you'll need to **prototype** your idea using Figma and share it with the #stjudecloud-design Slack channel for feedback from the other designers.
- [] Once you've built sufficient support from the design team for your idea, you should **integrate** your changes into the [St. Jude Cloud Design System][figma-dsm] project in Figma. Once you have completed this, work with others in #stjudecloud-design to ensure that your component is configured correctly and can be used by other designers.
- Getting your ideas into the production design system requires **developing** a PR with the following pieces.
  - [] First, create a live rendered version that lives within an appropriate component on [design.stjude.cloud] (the Fractal site). Show #stjudecloud-design and ensure that there is agreement that your changes look and behave as expected.
  - [] Next, create your component in the Javascript framework your team uses (React or Vue). You only need to create the version which is relevant to your team.
  - [] After the first framework is implemented, you can create a draft PR and tag maintainers on the other Javascript frameworks we support to implement their version.
  - [] Last, merge the PR when the changes are incorporated into both frameworks. This should trigger releases to both NPM packages at the same time.
- [] Finally, the libraries can be updated in each application. If changes are site wide and need to be synced (e.g., changes to the Omnibar), it's up to the individual who led the PR to ensure all of the product teams **release** the change on the same date. If the changes are optional and not used in every project, updates can be rolled out separately.

[fractal]: https://fractal.build
[figma-dsm]: https://www.figma.com/file/SggB3UbUHRylKMZkikdZUB/St.-Jude-Cloud-Design-System
[getting-started-dsm]: https://www.figma.com/file/SggB3UbUHRylKMZkikdZUB/St.-Jude-Cloud-Design-System?node-id=155%3A29310
[design.stjude.cloud]: https://design.stjude.cloud
[theme-repo]: https://github.com/stjudecloud/theme
[readme]: https://github.com/stjudecloud/theme#readme
[react-package]: https://www.npmjs.com/package/@stjudecloud/theme-react
[vue-package]: https://www.npmjs.com/package/@stjudecloud/theme-vue