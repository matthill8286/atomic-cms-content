import React from 'react';
import {CONFIRMATION} from '@/constants/modalConstants';
import {useModal} from '@/app/asset/hooks';
import {ConfirmationModal} from './ConfirmationModal';

export const ConfirmationModalWrapper = ({modalBlock}) => {
  const {hide: hideConfirmationModal, RenderModal} = useModal(CONFIRMATION);

  return (
    <RenderModal>
      <ConfirmationModal
        confirmationTitle={modalBlock?.title}
        confirmationDescription={modalBlock?.description}
        onConfirmationClose={hideConfirmationModal}
        confirmationCancelButtonLabel={modalBlock?.cancelButtonLabel}
        confirmationAcceptButtonLabel={modalBlock?.acceptButtonLabel}
        image={modalBlock?.image}
      />
    </RenderModal>
  );
};
