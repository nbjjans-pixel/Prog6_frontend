function About() {
    return (
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold">About Us</h2>
            <p className="mt-4 text-gray-700 text-xl">
                At Clear Corporations, we believe in transparency.
                Our goal is to provide insight into both the successes and controversies of large corporations and their leaders.
                From innovative breakthroughs to ethical challenges – we show it all.
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
                    Your browser does not support video.
                </video>
            </div>
        </section>
    );
}

export default About;
