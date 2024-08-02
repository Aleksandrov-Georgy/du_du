import { Button, Dialog, DialogContent } from '@/shared/components/ui';
import { signIn } from 'next-auth/react';

import React from 'react';
import { LoginForm } from './forms/login-form';
import { RegisterForm } from './forms/register-form';

interface Props {
  open: boolean;
  onClose: () => void;
}
export const AuthModal: React.FC<Props> = ({ onClose, open }) => {
  const [type, setType] = React.useState<'login' | 'register'>('login');

  const onSwitchType = () => {
    setType(type === 'login' ? 'register' : 'login');
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog
      open={open}
      onOpenChange={handleClose}
    >
      <DialogContent className="w-[450px] bg-white p-10">
        {type === 'login' ? <LoginForm onClose={onClose} /> : <RegisterForm onClose={onClose} />}
        <hr />
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => signIn('github', { callbackUrl: '/', redirect: true })}
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <img
              src="https://github.githubassets.com/favicons/favicon.svg"
              alt="github"
              className="w-6 h-6"
            />
            GitHub
          </Button>

          {/* <Button
            variant="secondary"
            onClick={() => signIn('google', { callbackUrl: '/', redirect: true })}
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              alt="github"
              className="w-6 h-6"
            />
            GOOGLE
          </Button> */}
        </div>
        <Button
          variant="outline"
          onClick={onSwitchType}
          className="h-12"
          type="button"
        >
          {type !== 'login' ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
