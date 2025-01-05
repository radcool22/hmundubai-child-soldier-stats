function ColorLegend() {
    return (
        <div data-name="color-legend" className="fixed top-4 left-4 bg-white p-3 rounded shadow-md border border-gray-200 z-10">
            <h3 className="text-xs font-bold mb-2">Child Soldiers per Country</h3>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4" style={{backgroundColor: '#ffcccc'}}></div>
                    <span className="text-xs">0 - 2,500</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4" style={{backgroundColor: '#ff9999'}}></div>
                    <span className="text-xs">2,500 - 5,000</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4" style={{backgroundColor: '#ff6666'}}></div>
                    <span className="text-xs">5,000 - 7,500</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4" style={{backgroundColor: '#ff3333'}}></div>
                    <span className="text-xs">7,500 - 10,000</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4" style={{backgroundColor: '#ff0000'}}></div>
                    <span className="text-xs">10,000+</span>
                </div>
            </div>
        </div>
    );
}
