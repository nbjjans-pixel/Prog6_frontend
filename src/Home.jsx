function Home() {
    return (
        <div className="mx-auto max-w-screen-xl p-6">
            <header className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center">
                    Welkom bij Clear Corporations
                </h1>
                <p className="text-lg mt-4 text-center">
                    Ontdek de ongefilterde waarheid over grote bedrijven en hun CEO's – zowel de positieve als negatieve kanten.
                </p>
                <img
                    src="https://thumbs.dreamstime.com/b/cool-business-meerkat-city-background-ai-generated-sunglasses-337280786.jpg"
                    alt="Cool business image"
                    className="mx-auto mt-4"
                    style={{ width: '50%', height: 'auto' }}
                />
            </header>

            <main className="mt-8">
                <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold">Waarom Clear Corporations?</h2>
                    <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                        <li>Coole stokstaartjes die je helpen</li>
                        <li>Onafhankelijke en eerlijke informatie.</li>
                        <li>Inzicht in bedrijfsstrategieën en impact.</li>
                        <li>Een balans tussen lof en kritiek.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Home;
