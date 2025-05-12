import { defineField, defineType } from "sanity";

// schemas/journal.ts
export const journalEntry = defineType({
  name: 'journal',
  title: 'Journal Entry',
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
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text', // or 'text' if you don't have a rich text schema yet
    }),
  ],
});
