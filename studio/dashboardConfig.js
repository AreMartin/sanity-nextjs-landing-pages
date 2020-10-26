export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9718270c018f5c19ba1c4d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j1aobgxd',
                  apiId: 'e45ccc1b-d74b-432a-b344-803c46f9b3cf'
                },
                {
                  buildHookId: '5f97182718a5c45ed0012dd8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-btt3buup',
                  apiId: '1e1f2697-f2df-45ff-80bc-f89d74f9e718'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AreMartin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-btt3buup.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
