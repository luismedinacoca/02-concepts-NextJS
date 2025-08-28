export default async function OptionalProductFilter({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return <div>Optional Product Filter</div>;
}
