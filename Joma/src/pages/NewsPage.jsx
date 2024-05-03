import NewProductCard from "../components/NewProductCard";

function NewsPage() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12  py-12">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-600">
            Nuestras novedades:
          </h2>
          <NewProductCard />
        </div>
      </section>
    </>
  );
}

export default NewsPage;
