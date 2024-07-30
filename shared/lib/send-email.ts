import { Resend } from 'resend';
import { PayOrderTemplate } from '../components/shared/email-templains/pay-order';

/**
 * Отправляет электронное письмо с использованием API Resend.
 *
 * @param {string} to - Электронная почта получателя.
 * @param {string} subject - Тема письма.
 * @param {React.ReactNode} [template] - Необязательные параметры, передаваемые в шаблон письма.
 * @return {Promise<any>} Промис, который разрешается в данные ответа от API Resend.
 * @throws {Error} Если произошла ошибка при отправке письма.
 */
export const sendEmail = async (to: string, subject: string, template?: React.ReactNode) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to,
    subject,
    react: template,
  });

  if (error) {
    throw error;
  }

  return data;
};
