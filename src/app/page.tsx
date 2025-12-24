import { prisma } from '@/lib/db';

export default async function Home() {
  const users = await prisma.user.findMany();
  return <div className="">{JSON.stringify(users, null, 2)}</div>;
}
