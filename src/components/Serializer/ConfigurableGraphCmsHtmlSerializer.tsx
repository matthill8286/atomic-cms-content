import * as React from 'react'
import {
  Picture,
  CopyText,
  Heading,
  Link,
  Typo,
  MarginMap,
  ThemeColors,
  ThemeFontSizes,
  Icon,
  styled,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@matthill8286/atomic-ui'
import { BLOCKS, INLINES } from '../../types'
import { CommonNode, documentToReactComponents } from '../../types/richtext'
import { EmbeddedPlayer } from '../EmbeddedPlayer'
import { StyleguideArrow } from '@matthill8286/atomic-icon-library'

interface SerializerCustomProps {
  bold?: boolean
  headingColor?: ThemeColors
  color?: ThemeColors | string
  linkColor?: ThemeColors | string
  linkPadding?: string
  linkBold?: boolean
  textAlign?: 'left' | 'right' | 'center'
  contentAlign?: 'left' | 'right' | 'center'
  primaryColor?: ThemeColors | string
  fontSize?: ThemeFontSizes
  margins?: MarginMap
  underline?: boolean
  withIconOnLink?: boolean
  inline?: boolean
  linkScale?: 'small' | 'large'
  forceNewTab?: boolean
  allowfullscreen?: boolean
}

const StyledTable = styled(Table)`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  thead {
    background-color: lightgray;
  }
  td {
    border: 1px solid black;
    padding: 5px;
    text-align: left;
    vertical-align: top;
  }
`

const getChildTagName = (childNode: { italic: any; code: any; underline: any }) =>
  childNode.italic ? 'em' : childNode.code ? 'pre' : childNode.underline ? 'u' : 'p'

/**
 * @description Partially applied function that applies rich text modifiers
 * @param customProps {Object}
 * @param node {Object}
 * @param childText {String}
 * @memberOf ConfigurableGraphCmsHtmlSerializer
 */
export const ConfigurableGraphCmsHtmlSerializer = (customProps: SerializerCustomProps = {}) => (
  render: CommonNode
) => {
  const serialize = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <Heading
            tag="h1"
            scale="level-1"
            margin={customProps.margins || 'lg 0'}
            color={customProps.headingColor}
            bold={!!customProps.bold || !!childNode?.bold}
            textAlign={customProps.textAlign}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <Heading
            tag="h2"
            scale="level-2"
            margin={customProps.margins || 'lg 0'}
            bold={!!customProps.bold || !!childNode?.bold}
            color={customProps.headingColor}
            textAlign={customProps.textAlign}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.HEADING_3]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <Heading
            tag="h3"
            scale="level-3"
            margin={customProps.margins || 'md 0'}
            textAlign={customProps.textAlign}
            color={customProps.headingColor}
            bold={!!customProps.bold || !!childNode?.bold}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.HEADING_4]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <Heading
            tag="h4"
            scale="level-4"
            margin={customProps.margins || 'md 0'}
            bold={!!customProps.bold || !!childNode?.bold}
            color={customProps.headingColor}
            textAlign={customProps.textAlign}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.HEADING_5]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <Heading
            tag="h5"
            scale="level-5"
            margin={customProps.margins || 'sm 0'}
            bold={!!customProps.bold || !!childNode?.bold}
            color={customProps.headingColor}
            textAlign={customProps.textAlign}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.HEADING_6]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <Heading
            tag="h6"
            scale="level-5"
            margin={customProps.margins || 'xs 0'}
            bold={!!customProps.bold || !!childNode?.bold}
            color={customProps.headingColor}
            textAlign={customProps.textAlign}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <CopyText
            lineHeight="md"
            color={customProps.color}
            tag={getChildTagName(childNode)}
            fontSize={customProps.fontSize}
            weight={childNode?.bold ? 'bold' : 'normal'}
            margin={customProps.margins}
            textAlign={customProps.contentAlign}>
            {children}
          </CopyText>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => (
        <Picture src={node.src} alt={node.altText} width={'100%'} height={'100%'} />
      ),
      [BLOCKS.EMBEDDED_MEDIA]: (node: any, children: any) => (
        <EmbeddedPlayer
          embedUrl={node.url}
          allowfullscreen={!!customProps.allowfullscreen}
          width={'100%'}
          height={'100%'}
        />
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <Typo
            tag="ul"
            weight={childNode?.bold ? 'bold' : 'normal'}
            underline={!!childNode.underline}
            lineHeight="lg">
            {children}
          </Typo>
        )
      },
      [BLOCKS.OL_LIST]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <Typo
            tag="ol"
            weight={childNode?.bold ? 'bold' : 'normal'}
            underline={!!childNode.underline}
            lineHeight="lg"
            fontSize={customProps.fontSize ?? 'sm'}
            color={customProps.color}>
            {children}
          </Typo>
        )
      },
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <Typo
            tag="li"
            lineHeight="md"
            weight={childNode?.bold ? 'bold' : 'normal'}
            underline={!!childNode.underline}
            fontSize={customProps.fontSize ?? 'sm'}
            color={customProps.color}>
            {children}
          </Typo>
        )
      },
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        const childNode = node.children[0]
        return (
          <Link
            href={node.href}
            title={node.title}
            color={customProps.linkColor}
            scale={customProps.linkScale}
            bold={!!childNode?.bold || !!customProps.linkBold}
            underline={!!customProps.underline}
            inline={Boolean(customProps.inline) || true}
            target={node.openInNewTab ? '_blank' : customProps.forceNewTab ? '_blank' : '_self'}
            iconLeft={
              customProps.withIconOnLink ? (
                <Icon color="primary">
                  <StyleguideArrow />
                </Icon>
              ) : (
                undefined
              )
            }>
            {children}
          </Link>
        )
      },
      [BLOCKS.TABLE]: (node: any, children: any) => <StyledTable>{children}</StyledTable>,
      [BLOCKS.TABLE_HEAD]: (node: any, children: any) => <TableHead>{children}</TableHead>,
      [BLOCKS.TABLE_BODY]: (node: any, children: any) => <TableBody>{children}</TableBody>,
      [BLOCKS.TABLE_ROW]: (node: any, children: any) => <TableRow>{children}</TableRow>,
      [BLOCKS.TABLE_CELL]: (node: any, children: any) => <TableCell>{children}</TableCell>,
    },
    renderText: (text: string) => {
      return text.split('\n').reduce((children: any, textSegment: any, index: number) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }

  return documentToReactComponents(render, serialize)
}
