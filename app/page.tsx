import { Categories, Container, Filters, SortPopup, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />

      </Container>
      <TopBar />

      <Container className="pb-16 mt-10">
        <div className="flex gap-[60px]">
          {/* Фильтарция */}
          <div>
            <Filters />
          </div>

          {/* список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">список товаров</div>
          </div>
        </div>
      </Container>
    </>
  );
}
