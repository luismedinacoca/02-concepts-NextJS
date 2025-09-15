import { Metadata } from 'next';

const dummyData = {
  "1": {
    title: "Page Un 👍🏽"
  },
  "2": {
    title: "Page Deux ✍🏻"
  },
  "3": {
    title: "Page Trois ✨"
  },
  "4": {
    title: "Page Quatre 🎉"
  }
};

// Generate metadata for the page
export async function generateMetadata({params} : { params: Promise<{ slug: string }>}) : Promise<Metadata> {
  const { slug } = await params;

  const data = dummyData[ slug as keyof typeof dummyData];

  return {
    title: data.title,
    description: data.title,
  }
}

// Make the page dynamic by using the slug
export default async function DynamicMetadataExample({
    params,
  }: {
    params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = dummyData[slug as keyof typeof dummyData];
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}
