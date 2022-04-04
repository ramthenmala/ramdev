export default {
  name: 'aboutpage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Description Alt',
        },
      ],
    },
    {
      name: 'publishedate',
      title: 'Published Date',
      type: 'datetime',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              title: 'Image Position',
              name: 'imagepos',
              type: 'string',
              options: {
                list: [
                  { title: 'Center', value: 'center' },
                  { title: 'Left', value: 'left' },
                  { title: 'Right', value: 'Right' },
                ],
                layout: 'radio',
                isHighlighted: true,
              },
            },
            {
              type: 'text',
              name: 'alt',
              title: 'Description',
              options: {
                isHighlighted: true,
              },
            },
          ],
          options: {
            hotspot: true,
          },
        },
        {
          type: 'code',
          options: {
            withFilename: true,
          },
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools', // use seo-tools type
      options: {
        baseUrl: 'https://.../', // (REQUIRED) This is the baseUrl for your site
        baseUrl(doc) {
          return 'https://.../'; // for dynamic baseUrls
        },
        slug(doc) {
          return doc.slug.current;
        },
        fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
        content(doc) {
          return 'simple html representation of your doc'; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
        },
        title(doc) {
          return 'page title'; // (OPTIONAL) return page title otherwise inferred from scrape
        },
        description(doc) {
          return 'page description'; // (OPTIONAL) return page description otherwise inferred from scrape
        },
        locale(doc) {
          return 'page locale'; // (OPTIONAL) return page locale otherwise inferred from scrape
        },
        contentSelector: 'body', // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      },
    },
  ],
};
