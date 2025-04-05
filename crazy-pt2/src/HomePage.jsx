const HomePage = () => {
return (
    <div
        className="h-screen w-screen flex flex-col font-light font-serif"
        style={{
            backgroundImage: 'url(/tile.gif)',
            backgroundRepeat: "repeat",
        }}
    >
        <nav>
            <div className="bg-blue-900 h-18 flex items-center justify-between border-2 p-4 mx-8 mt-8">
                <div className="text-2xl text-white text-center text-align-middle">
                    Remymane's Spiritual Cove
                </div>
                <div className="px-4 flex items-center space-x-4 text-center text-align-middle">
                    <a href="#" className="text-black w-8 h-8 bg-white border-2">
                        o
                    </a>
                    <a href="#" className="text-black w-8 h-8 bg-white border-2">
                        x
                    </a>
                    <a href="#" className="text-black w-8 h-8 bg-white border-2">
                        -
                    </a>
                </div>
            </div>
        </nav>
        <nav>
            <div className="bg-gray-300 text-xl h-9 flex items-center justify-left border-x-2 space-x-4 px-4 mx-8">
                <a href="#" className="text-black hover:text-gray-700 underline">
                    File
                </a>
                <a href="#" className="text-black hover:text-gray-700 underline">
                    Edit
                </a>
                <a href="#" className="text-black hover:text-gray-700 underline">
                    View
                </a>
                <a href="#" className="text-black hover:text-gray-700 underline">
                    Help
                </a>
            </div>
        </nav>
        <div className="mx-8 pt-4 mb-8 items-center text-black bg-gray-300 border-2 h-screen relative">
            <div className="flex flex-row justify-center items-center space-x-4">
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img
                        src="fire.gif"
                        alt="Fire Animation"
                        className="mx-auto h-20 w-40"
                    />
                    <img
                        src="arachnoskull.gif"
                        alt="Fire Animation"
                        className="mx-auto h-20 w-20"
                    />
                </div>
                <div>
                    <h1 className="text-4xl text-center"> WELCOME TO MY SITE</h1>
                    <ul className="space-y-4 py-12">
                        <li className="text-2xl text-center underline text-blue-700">
                            MY SPOTIFY
                        </li>
                        <li className="text-2xl text-center underline text-blue-700">
                            MY SOUNDCLOUD
                        </li>
                        <li className="text-2xl text-center underline text-blue-700">
                            MY SPOTIFY
                        </li>
                        <li className="text-2xl text-center underline text-blue-700">
                            MY BLOG
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img
                        src="fire.gif"
                        alt="Fire Animation"
                        className="mx-auto h-20 w-20"
                    />
                    <img
                        src="arachnoskull.gif"
                        alt="Fire Animation"
                        className="mx-auto h-20 w-40"
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center items-center space-x-4 border-t-2 p-4 absolute bottom-0 left-0 w-full">
                <button className="border-2">Play</button>
                <button className="border-2">Pause</button>
                <button className="border-2">Stop</button>
                <div className="flex flex-col justify-center items-center w-2/3 mx-auto">
                    <progress
                        className="border-2 w-250"
                        value="50"
                        max="100"
                    ></progress>
                    <p> now playing... Remymane - STEPPIN</p>
                </div>
            </div>
        </div>
    </div>
);
}
export default HomePage;