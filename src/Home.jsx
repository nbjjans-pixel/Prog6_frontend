function Home() {
    return (
        <div className="mx-auto max-w-screen-xl p-6">
            <header className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center">
                    Welcome to Clear Corporations
                </h1>
                <p className="text-lg mt-4 text-center">
                    Discover the unfiltered truth about big corporations and their CEOs – both the positive and negative sides.
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
                    <h2 className="text-2xl font-semibold">Why Clear Corporations?</h2>
                    <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                        <li>Cool meerkats that help you</li>
                        <li>Independent and honest information.</li>
                        <li>Insights into corporate strategies and impact.</li>
                        <li>A balance between praise and criticism.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Home;
