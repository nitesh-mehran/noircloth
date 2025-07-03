const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
      <h1 className="text-4xl font-extrabold text-black mb-8 text-center">About NoirCloth</h1>
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        At NoirCloth, we believe fashion is a way to express your unique style and confidence.
        Our journey began with a passion for creating clothing that combines timeless elegance
        with modern comfort.
      </p>
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Every item in our collection is carefully crafted using premium fabrics and ethical manufacturing
        processes. We focus on sustainability, quality, and customer satisfaction.
      </p>
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Whether you’re dressing for a casual day out or an important event, NoirCloth provides you
        with versatile options that elevate your wardrobe.
      </p>

      <div className="mt-12 text-center">
        <img
          src="/images/hero_fashion.png"
          alt="About NoirCloth fashion"
          className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;
