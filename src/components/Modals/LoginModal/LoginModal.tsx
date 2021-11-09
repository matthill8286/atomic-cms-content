import React from 'react';
import { CopyText, Modal, Picture, styled } from '@matthill8286/atomic-ui';

const DescriptionWrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.spacing.base.md} ${theme.spacing.base.xxl}`};
`;

const StyledPicture = styled(Picture)`
  display: flex;
  margin: ${({ theme }) => `${theme.spacing.base.md}`};
`;

export const LoginModal = ({
  loginTitle,
  loginDescription,
  loginButtonLabel,
  onLoginClose,
  loginUrl,
  image,
}) => {
  const handleCloseModal = () => onLoginClose('');
  const goToLoginPage = () => {
    handleCloseModal();
    window.location.href = loginUrl;
  };
  return (
    <Modal
      buttonAlignment="center"
      size="lg"
      animation="fadeIn"
      onClose={handleCloseModal}
      showButtonSeparator={false}
      position="top"
      title={loginTitle}
      secondaryButtonProps={{
        buttonLabel: loginButtonLabel,
        actionType: 'primary',
        curved: true,
        size: 'lg',
        onClick: goToLoginPage,
      }}
    >
      {image && (
        <StyledPicture
          rounded
          alt={image?.altText ?? ''}
          width="100%"
          height="auto"
          src={image?.url}
        />
      )}
      <DescriptionWrapper>
        <CopyText textAlign="center" fontSize="md" margin="0">
          {loginDescription}
        </CopyText>
      </DescriptionWrapper>
    </Modal>
  );
};
