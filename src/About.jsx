function About() {
    return (
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold">Over ons</h2>
            <p className="mt-4 text-gray-700 text-xl">
                Bij Clear Corporations geloven we in transparantie.
                Ons doel is om zowel de successen als de controverses van grote bedrijven en hun leiders inzichtelijk te maken.
                Van innovatieve doorbraken tot ethische uitdagingen – wij laten alles zien.
            </p>

            <div className="mt-6">
                <video
                    autoPlay
                    loop
                    muted
                    className="mx-auto mt-4"
                    style={{ width: '100%', maxWidth: '640px', height: 'auto' }}
                >
                    <source src="/Meet%20the%20Stylish%20Business%20Meerkat!.mp4" type="video/mp4" />
                    Uw browser ondersteunt geen video.
                </video>
            </div>
        </section>
    );
}

export default About;
