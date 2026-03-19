import {StructureBuilder} from 'sanity/structure'
import { EyeIcon, SwordIcon, BloodDropIcon, KeyIcon, ReliquaryIcon } from './customIcons'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const deskStructure = (S: StructureBuilder, context: any) =>
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
      orderableDocumentListDeskItem({
        type: 'armoryCard',
        title: 'Services (The Armory)',
        icon: SwordIcon,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'aftercareStep',
        title: 'Aftercare Steps (The Ritual)',
        icon: BloodDropIcon,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'faqItem',
        title: 'FAQs (The Inquisition)',
        icon: KeyIcon,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'galleryImage',
        title: 'Gallery Images (The Reliquary)',
        icon: ReliquaryIcon,
        S,
        context,
      }),
    ])
