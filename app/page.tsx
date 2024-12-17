import { Container, Filters, ProductCard, ProductsGroupLists, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />

      </Container>
      <TopBar />

      <Container className="pb-16 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтарция */}
          <div>
            <Filters />
          </div>

          {/* список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupLists title="Пиццы" items={[
                {
                  id: 1,
                  name: 'Баварская',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF346408A39615BD3478135F9F6673.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 2,
                  name: 'Баварская',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF346408A39615BD3478135F9F6673.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 3,
                  name: 'Баварская',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF346408A39615BD3478135F9F6673.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 4,
                  name: 'Баварская',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF346408A39615BD3478135F9F6673.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 5,
                  name: 'Баварская',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF346408A39615BD3478135F9F6673.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },

              ]} categoryId={1} />
              <ProductsGroupLists title="Завтраки" items={[
                {
                  id: 1,
                  name: 'Омлет с пепперони',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF7764C19B8F618F78CAA6A3101F1D.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 2,
                  name: 'Омлет с пепперони',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF7764C19B8F618F78CAA6A3101F1D.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 3,
                  name: 'Омлет с пепперони',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF7764C19B8F618F78CAA6A3101F1D.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 5,
                  name: 'Омлет с пепперони',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF7764C19B8F618F78CAA6A3101F1D.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 6,
                  name: 'Омлет с пепперони',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF7764C19B8F618F78CAA6A3101F1D.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 7,
                  name: 'Омлет с пепперони',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF7764C19B8F618F78CAA6A3101F1D.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },



              ]} categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
