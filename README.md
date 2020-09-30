Example of a Gatsby site with Netlify CMS integration.

App preview: https://gatsbynetlifycms-cheryllaird.netlify.app

## Usage

```
gatsby develop
```

Your site is now running at http://localhost:8000!

Note: You'll also see a second link: http://localhost:8000/___graphql. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the Gatsby tutorial.


## Notes:
- Content is pulled in from Netlify CMS
- CMS input is defined in `static/admin/config.yml`
- Upon publish of content inside of the CMS UI, content changes will be pushed up to master
- Updates to the master branch with trigger a build in Netlify
- After a build, the Lighthouse plugin will run to check site metrics against set thresholds, defined in `netlify.toml`.
- When everything passes, Netlify will deploy the site.
