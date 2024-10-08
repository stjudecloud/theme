<img src="{{ path '/assets/images/design-cover-img@2x.jpg' }}" alt="Welcome to design.stjude.cloud!" width="1280px" height="320px" style="max-width: unset"/>

## Getting Started

We use Figma for mockups and prototypes on the St. Jude Cloud project. Once you are added to the St. Jude Cloud Figma group, you may visit the [St. Jude Cloud Design System project][figma-dsm]. The instructions to get started with the design system are on the [Getting Started][getting-started-dsm] page in the Figma project. Note that the Figma file may contain experimental components and does not represent the official, production version of our design system.

## Development

[design.stjude.cloud] and the corresponding source at the [St. Jude Cloud theme repo][theme-repo] represent the production ready version of the design system. Updates to the design system are governed through pull requests that are worked on by multiple teams, and the packages listed below are updated in sync to ensure the look and feel remains consistent across the ecosystem.

|              Package               |                  Folder                  | Published to NPM | Description                                                                                                                                                                      |
| :--------------------------------: | :--------------------------------------: | :--------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       `@stjudecloud/assets`        |          [`assets/`](https://github.com/stjudecloud/theme/tree/main/assets)           |       YES        | Contains all, non-minified assets used on the St. Jude Cloud project.                                                                                                            |
|   `@stjudecloud/theme-bootstrap`   | [`themes/bootstrap`](https://github.com/stjudecloud/theme/tree/main/themes/bootstrap) |       YES        | Both production-ready and development files for the Bootstrap St. Jude Cloud theme                                                                                               |
|      `@stjudecloud/ui-react`       |   [`packages/react`](https://github.com/stjudecloud/theme/tree/main/packages/react)   |       YES        | Production-ready React component library for the St. Jude Cloud design system. Note that CSS from `@stjudecloud/theme-bootstrap` must be loaded for elements to render properly. |
| `@stjudecloud/design.stjude.cloud` |         [`fractal/`](https://github.com/stjudecloud/theme/tree/main/fractal)          |        NO        | Fractal source code for rendering [https://design.stjude.cloud](https://design.stjude.cloud)                                                                                     |

We use [Fractal][fractal] for [design.stjude.cloud]. See the `README.md` on the [theme repo][readme] for more details on developing, installing, and contributing to our theme.

## Process Checklist

If you'd like to suggest modifications to the design system or add new components, here is the process we follow.

### Prototyping

To start, you'll need to **prototype** your idea using Figma and share it with the [#stjudecloud-design] Slack channel for feedback from the other designers.

### Integrate into Figma

Once you've built sufficient support from the design team for your idea, you should **integrate** your changes into the [St. Jude Cloud Design System][figma-dsm] project in Figma. Work with others in [#stjudecloud-design] to ensure that your component is configured correctly and can be used by other designers.

### Create a PR on the theme repo

Getting your ideas into the production design system requires **developing** a PR on the theme repo for your Javascript and CSS framework of choice. The process for developing and merging your PR should follow these steps:

1. First, create a live rendered version that lives within an appropriate component on [design.stjude.cloud] (the Fractal site). Show [#stjudecloud-design] and ensure that there is agreement that your changes look and behave as expected.
2. Next, create your component in the Javascript and CSS frameworks that your team uses (React/Bootstrap or Vue/Tailwind). You only need to create the version which is relevant to your team.
3. Once the change has been code reviewed, you may merge the PR in. This should trigger releases to both the relevant Javascript and CSS NPM packages.

At the current time, we don't require that components or changes be incorporated in both Vue/Tailwind or React/Bootstrap at the same time—they can be implemented in each library on an "as needed" basis.

### Release changes to Apps

Finally, the libraries can be updated in each application. If changes are site-wide and need to be synced (e.g., changes to the Omnibar), it's up to the individual who led the PR to ensure all of the product teams **release** the change on the same date. If the changes are optional and not used in every project, updates can be rolled out separately.

[fractal]: https://fractal.build
[figma-dsm]: https://www.figma.com/file/SggB3UbUHRylKMZkikdZUB/St.-Jude-Cloud-Design-System
[getting-started-dsm]: https://www.figma.com/file/SggB3UbUHRylKMZkikdZUB/St.-Jude-Cloud-Design-System?node-id=155%3A29310
[design.stjude.cloud]: https://design.stjude.cloud
[theme-repo]: https://github.com/stjudecloud/theme
[readme]: https://github.com/stjudecloud/theme#readme
[react-package]: https://www.npmjs.com/package/@stjudecloud/theme-react
[vue-package]: https://www.npmjs.com/package/@stjudecloud/theme-vue
[#stjudecloud-design]: https://stjude.slack.com/messages/stjudecloud-design