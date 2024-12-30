function Counter() {
    const [count, setCount] = React.useState(300000);

    React.useEffect(() => {
        try {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 60000); // Increment every minute

            return () => clearInterval(interval);
        } catch (error) {
            reportError(error);
        }
    }, []);

    return (
        <div data-name="counter" className="text-sm text-red-600">
            Currently, there are: <span className="font-bold">{count.toLocaleString()}</span> child soldiers
        </div>
    );
}
