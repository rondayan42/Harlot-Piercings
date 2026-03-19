import {StructureBuilder} from 'sanity/structure'
import { EyeIcon, SwordIcon, BloodDropIcon, KeyIcon, ReliquaryIcon } from './customIcons'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('🏰 Harlot Piercings')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(EyeIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Edit Global Settings')
        ),
      S.divider(),
      S.listItem()
        .title('Services (The Armory)')
        .schemaType('armoryCard')
        .icon(SwordIcon)
        .child(S.documentTypeList('armoryCard').title('All Services')),
      S.listItem()
        .title('Aftercare Steps (The Ritual)')
        .schemaType('aftercareStep')
        .icon(BloodDropIcon)
        .child(S.documentTypeList('aftercareStep').title('All Aftercare Steps')),
      S.listItem()
        .title('FAQs (The Inquisition)')
        .schemaType('faqItem')
        .icon(KeyIcon)
        .child(S.documentTypeList('faqItem').title('All FAQs')),
      S.listItem()
        .title('Gallery Images (The Reliquary)')
        .schemaType('galleryImage')
        .icon(ReliquaryIcon)
        .child(S.documentTypeList('galleryImage').title('All Gallery Images')),
    ])
