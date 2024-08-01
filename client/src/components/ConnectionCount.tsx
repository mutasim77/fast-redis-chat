export function ConnectionCount({ count }: { count: number }) {
    return (
        <div className="bg-accent bg-opacity-20 px-6 py-4 border-b-2 border-text">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">FastChat Room</h2>
                <div className="bg-secondary px-3 py-1 rounded-full text-background text-sm font-bold">
                    {count} online
                </div>
            </div>
        </div>
    )
}