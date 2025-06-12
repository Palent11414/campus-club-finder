export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Campus Club Finder</h2>
      
      <div className="prose">
        <p className="mb-4">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
              sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
        </p>
        
        <h3 className="text-xl font-bold mb-3 mt-6">Features</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Browse all student clubs in one place</li>
          <li>View detailed information about each club</li>
          <li>See upcoming events hosted by clubs</li>
          <li>Join clubs with a single click</li>
        </ul>
      </div>
    </div>
  );
}