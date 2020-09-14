// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals');
const axios = require('axios');

module.exports = function (api) {
  const APIEndUrl = "http://localhost:1337";
  api.loadSource(async actions => {
    const { data } = await axios.get(`${APIEndUrl}/events`)

    const collection = actions.addCollection({
      typeName: 'Event',
      path: `/events/:id`
    })

    for (const event of data) {
      collection.addNode({
        id: event.id,
        path: `/events/${event.id}`,
        categories: event.categories[0].id,
        title: event.title,
        description: event.description,
        price: event.price,
        date: event.date,
        duration: event.duration,
        thumbnail: `${APIEndUrl}${event.image.formats.thumbnail.url}`,
        image: `${APIEndUrl}${event.image.formats.medium.url}`
      })
    }
  })

  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/events/:id',
      component: './src/templates/Event.vue'
    })
  })
}