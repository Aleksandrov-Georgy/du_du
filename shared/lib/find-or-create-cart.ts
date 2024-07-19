import { prisma } from '@/prisma/prisma-client';

/**
 * Находит или создает корзину на основе предоставленного токена.
 *
 * @param {string} token - Токен, используемый для идентификации корзины.
 * @return {Promise<Cart>} Промис, который разрешается в найденную или созданную корзину.
 */
export const findOrCreateCart = async (token: string) => {
  let userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
  });

  if (!userCart) {
    userCart = await prisma.cart.create({
      data: {
        token,
      },
    });
  }

  return userCart;
};
