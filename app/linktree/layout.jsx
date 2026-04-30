import WhatsAppButton from '@/components/WhatsAppButton';

export default function LinktreeLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <WhatsAppButton />
    </>
  );
}
