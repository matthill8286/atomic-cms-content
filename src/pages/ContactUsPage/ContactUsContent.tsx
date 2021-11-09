import React, { FC } from 'react'
import {
  CmsCallToActionPanel,
  ConfigurableGraphCmsHtmlSerializer,
  CustomSection,
  Serializer,
  TextSection,
} from '../../components'
import { ContactSection } from '../../components/ContactSection'

export const ContactUsContent: FC<{ slices: any[] }> = ({ slices }) => {
  return (
    <CustomSection>
      {slices?.map(({ pageComponents }, index: number) => {
        const keyProp = `${pageComponents?.__typename}_${index}`
        switch (pageComponents.__typename) {
          case 'CallToActionPanel':
            return (
              <CmsCallToActionPanel
                key={keyProp}
                element={pageComponents}
                showReadMore={false}
                asset={null}
                image={pageComponents?.image}
                richTextCopy={Serializer(
                  pageComponents?.richTextCopy?.raw,
                  ConfigurableGraphCmsHtmlSerializer({
                    textAlign: 'left',
                    contentAlign: 'left',
                  })
                )}
              />
            )
          case 'RichTextSection':
            return (
              pageComponents.document.raw && (
                <TextSection
                  richText={pageComponents.document.raw}
                  title={pageComponents.title}
                  headingColor="black"
                  key={keyProp}
                  anchorId={pageComponents?.id}
                  headingsBold
                />
              )
            )
          case 'ContactSection':
            return (
              pageComponents.contactInformation && (
                <ContactSection
                  paddingTop={undefined}
                  paddingBottom="xl"
                  sectionColor="clear"
                  key={keyProp}
                  contactHeading={pageComponents?.contactHeading}
                  contactImage={pageComponents?.contactImage}
                  richTextContactSection={pageComponents.contactInformation}
                />
              )
            )
          default:
            return null
        }
      })}
    </CustomSection>
  )
}
