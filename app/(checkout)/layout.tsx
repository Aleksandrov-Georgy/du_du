import { Container, Header } from '@/shared/components/shared';

export const metadata = {
  title: 'DUDU PIZZA | Корзина',
  description: 'Оформление заказа',
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Container>
        <Header
          className="border-b-gray-200"
          hasSearch={false}
          hasCart={false}
        />
        {children}
      </Container>
    </main>
  );
}
