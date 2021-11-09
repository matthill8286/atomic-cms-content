import React from 'react';
import {
  CopyText,
  Link,
  Heading,
  Lists,
  Picture,
  Icon,
  IconRightArrow,
} from '@matthill8286/atomic-ui';
import {BLOCKS, MARKS, INLINES, Document} from '../../types';
import {isInline} from '../../types/richtext/helpers';

export const GraphCmsHtmlSerializer = (render: Document) => {
  const serialize = {
    renderModifier: {
      [MARKS.BOLD]: (text: any) => <CopyText tag="strong">{text}</CopyText>,
      [MARKS.ITALIC]: (text: any) => <CopyText tag="em">{text}</CopyText>,
      [MARKS.UNDERLINE]: text => <CopyText tag="u">{text}</CopyText>,
      [MARKS.CODE]: text => <CopyText tag="code">{text}</CopyText>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return (
          <CopyText
            bold={false}
            weight="regular"
            lineHeight="lg"
            fontSize="sm"
            withMargins
          >
            {children}
          </CopyText>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => (
        <Picture
          src={node.src}
          alt={node.alt}
          width={node.width}
          height={node.height}
        />
      ),
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <Heading
          tag="h1"
          scale="level-1"
          margin="0 0 lg 0"
          fontFamily="branded"
        >
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <Heading tag="h2" scale="level-2" margin="0 0 lg 0" bold color="black">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <Heading tag="h3" scale="level-3" margin="0 0 md 0" bold color="black">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: any) => (
        <Heading tag="h4" scale="level-4" margin="0 0 sm 0" color="black">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: any) => (
        <Heading
          tag="h4"
          fontFamily="branded"
          color="black"
          margin="0 0 sm 0"
          fontSize="xl"
          scale="level-4"
        >
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: any) => (
        <Heading
          tag="h4"
          fontFamily="branded"
          color="black"
          margin="0 0 sm 0"
          fontSize="xl"
          scale="level-4"
        >
          {children}
        </Heading>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <Lists ordered withMargin>
          {children}
        </Lists>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <Lists withMargin>{children}</Lists>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        return (
          <Link
            href={node.href}
            title={node.title}
            iconLeft={
              <Icon color="primary">
                <IconRightArrow />
              </Icon>
            }
            underline
            inline={!!isInline(node)}
            target={node.openInNewTab ? '_blank' : '_self'}
          >
            {children}
          </Link>
        );
      },
    },
    renderText: (text: string) => {
      return text
        .split('\n')
        .reduce((children: any, textSegment: any, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },
  };

  // @ts-ignore
  return documentToReactComponents(render, serialize);
};
