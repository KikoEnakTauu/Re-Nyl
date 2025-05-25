export const Stats = () => {
    return (
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-purple-200">Vinyl Records</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12K+</div>
              <div className="text-purple-200">Active Sellers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-purple-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    );
}