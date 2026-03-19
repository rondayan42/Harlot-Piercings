import {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Make Global Site Settings a singleton
      S.listItem()
        .title('Global Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Edit Global Settings')
        ),
      S.divider(),
      // List all other document types, excluding siteSettings
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId() as string)
      ),
    ])
