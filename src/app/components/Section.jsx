export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="container-max my-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}