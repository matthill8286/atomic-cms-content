import React, {useContext} from 'react';
import {LOGIN} from '@/constants/modalConstants';
import {useModal} from '@/app/asset/hooks';
import {GraphCmsInstanceContext} from '@/context/instance';
import {head} from '@/utils/FP/FP';
import {LoginModal} from './LoginModal';

export const LoginModalWrapper = ({modalLocked}) => {
  const {staticInstance} = useContext(GraphCmsInstanceContext);
  const {hide: hideLoginModal, RenderModal} = useModal(LOGIN);

  return (
    <RenderModal>
      <LoginModal
        loginTitle={modalLocked?.title}
        loginDescription={modalLocked?.description}
        loginButtonLabel={modalLocked?.buttonLabel}
        image={modalLocked?.image}
        onLoginClose={hideLoginModal}
        loginUrl={head(staticInstance?.instance?.edges).node?.registrationUrl}
      />
    </RenderModal>
  );
};
