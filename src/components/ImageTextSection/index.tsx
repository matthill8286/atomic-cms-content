import * as React from 'react';
import {
  Grid,
  Row,
  Offset,
  Cell,
  ImageAndText,
  ImageAlignment,
} from '@matthill8286/atomic-ui';
import {
  ImageTextSectionProps,
  ImageAndTextSectionField,
} from './ImageTextSection.types';
import {CustomSection} from '../CustomSection';
import {Serializer, ConfigurableGraphCmsHtmlSerializer} from '../Serializer';

export * from './ImageTextSection.types';

export const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageAndTextFields,
  textColor,
  sectionColor,
  primaryColor,
}) => {
  const renderImageAndText = (
    imageAndTextEntry: ImageAndTextSectionField,
    index: number
  ) => {
    const {image, text, imageAlignment, anchorId} = imageAndTextEntry;
    return (
      <CustomSection color={sectionColor} key={index} id={anchorId}>
        <Grid>
          <Row noMargin>
            <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
            <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
              {image ? (
                <ImageAndText
                  image={image?.desktop ? image?.desktop : image}
                  imageAlignment={imageAlignment as ImageAlignment}
                >
                  {text &&
                    Serializer(
                      text,
                      ConfigurableGraphCmsHtmlSerializer({
                        color: textColor,
                        primaryColor,
                      })
                    )}
                </ImageAndText>
              ) : (
                text &&
                Serializer(
                  text,
                  ConfigurableGraphCmsHtmlSerializer({
                    color: textColor,
                    primaryColor,
                  })
                )
              )}
            </Cell>
          </Row>
        </Grid>
      </CustomSection>
    );
  };

  return (
    <>
      {imageAndTextFields.map((field, index) =>
        renderImageAndText(field, index)
      )}
    </>
  );
};
