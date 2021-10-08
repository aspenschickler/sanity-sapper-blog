export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '6160a5e41af9dcacc867daeb',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-668t5ivd',
                  apiId: 'ef536b50-6873-44bc-8018-226d404fa0e9'
                },
                {
                  buildHookId: '6160a5e44f36f7ae6ce6ab10',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-3reiem9v',
                  apiId: 'd206d056-03c4-4853-9e0e-cf4af9d30f19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zachschickler/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-3reiem9v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
