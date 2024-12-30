function Header() {
    return (
        <div data-name="header" className="flex flex-col items-center p-2 bg-white border-b border-black">
            <div className="flex items-center mb-2">
                <span data-name="logo" className="text-2xl mr-3">⚔️</span>
                <h1 data-name="title" className="text-xl font-bold">Global Child Soldier Statistics</h1>
            </div>
            <div data-name="statistics" className="text-sm text-red-600">
                Since 2005, approximately <span className="font-bold">300,000</span> child soldiers have been recruited
            </div>
        </div>
    );
}
