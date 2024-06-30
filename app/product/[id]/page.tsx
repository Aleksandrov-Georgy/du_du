export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  return (
    <h1>{id}</h1>
  );
}
