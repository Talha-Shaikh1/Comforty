import { defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const categorySchema = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    icon: TagIcon, 
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
              source: "title",
              maxLength: 96,
            },
            validation: Rule => Rule.required(),
          },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
        },
        {
            title: 'Number of Products',
            name: 'products',
            type: 'number',
        }
    ],
});