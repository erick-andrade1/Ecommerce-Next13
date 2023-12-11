import data from '../data.json';

export async function GET() {
  //Serve apenas para testar o loading.ts da página home
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const featuredProducts = data.products.filter((product) => product.featured);

  return Response.json(featuredProducts);
}
