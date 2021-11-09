import React from 'react';
import { CopyText, Modal, Picture, styled } from '@matthill8286/atomic-ui';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setCookie, getCookie } from '@/utils/localStorage';
import { getModalContext } from '@/store/UI/ui.selectors';

const DescriptionWrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.spacing.base.md} ${theme.spacing.base.xxl}`};
`;

const StyledPicture = styled(Picture)`
  display: flex;
  margin: ${({ theme }) => `${theme.spacing.base.md}`};
`;

export const ConfirmationModal = ({
  confirmationTitle,
  confirmationDescription,
  confirmationCancelButtonLabel,
  confirmationAcceptButtonLabel,
  onConfirmationClose,
  goToAssetPage,
  image,
}) => {
  const context = useSelector(getModalContext);
  const history = useHistory();

  const handleCloseModal = () => onConfirmationClose('');
  const handleConfirmation = () => {
    if (!getCookie('confirm')) {
      setCookie('confirm', 'Healthcare professional');
      handleCloseModal();
      history.push({
        pathname: `/home/learning-asset/${context?.asset?.niceName}?pid_hint=${context?.playlistId}`,
      });
    }
  };

  return (
    <Modal
      buttonAlignment="center"
      onClose={handleCloseModal}
      showButtonSeparator={false}
      position="top"
      animation="fadeIn"
      title={confirmationTitle}
      secondaryButtonProps={{
        buttonLabel: confirmationAcceptButtonLabel,
        actionType: 'primary',
        curved: true,
        size: 'lg',
        onClick: handleConfirmation,
      }}
      primaryButtonProps={{
        buttonLabel: confirmationCancelButtonLabel,
        actionType: 'outlined',
        curved: true,
        size: 'lg',
        onClick: handleCloseModal,
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
      {confirmationDescription && (
        <DescriptionWrapper>
          <CopyText textAlign={'center'} fontSize={'md'} margin={0}>
            {confirmationDescription}
          </CopyText>
        </DescriptionWrapper>
      )}
    </Modal>
  );
};
