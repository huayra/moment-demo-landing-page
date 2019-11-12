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
                  buildHookId: '5dcadbdf4dfa02f2ab94eb6b',
                  title: 'Sanity Studio',
                  name: 'moment-demo-landing-page-studio',
                  apiId: '7fa70b2c-7f66-4a04-94bf-604f97cf7b5c'
                },
                {
                  buildHookId: '5dcadbdf9abbe61f00195cd0',
                  title: 'Landing pages Website',
                  name: 'moment-demo-landing-page',
                  apiId: '49569c64-03f3-42cc-a38a-9b76a9bba49b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/huayra/moment-demo-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://moment-demo-landing-page.netlify.com', category: 'apps'}
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
