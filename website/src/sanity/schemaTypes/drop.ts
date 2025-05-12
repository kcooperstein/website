import { defineType, defineField } from 'sanity';

export const drop = defineType({
  name: 'drop',
  title: 'Drop',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'intro',
      title: 'Intro Text',
      type: 'text',
    }),
    defineField({
      name: 'shopLink',
      title: 'External Shop Link (optional)',
      type: 'url',
    }),
    defineField({
      name: 'coverImage',
      title: 'Drop cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'content',
      title: 'Page Builder Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
        {
          type: 'object',
          name: 'video',
          title: 'Video Embed',
          fields: [
            {
              name: 'url',
              title: 'YouTube/Vimeo URL',
              type: 'url',
            },
          ],
        },
      ],
    }),
  ],
});
