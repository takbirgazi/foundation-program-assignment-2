
export default function MovieModal({ movie, onClose }) {
    if (!movie) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="h-[92vh] w-full max-w-5xl overflow-auto rounded-2xl bg-slate-900"
            >
                <div className="relative">
                    <img
                        src={
                            movie.image?.original ||
                            movie.image?.medium ||
                            "https://placehold.co/1200x500?text=No+Image"
                        }
                        alt={movie.name}
                        className="max-h-96 w-full object-cover"
                    />

                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-2 text-white"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6">
                    <h2 className="text-3xl font-bold text-white">
                        {movie.name}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4 text-slate-300">
                        <span>⭐ {movie.rating?.average || "N/A"}</span>
                        <span>📅 {movie.premiered || "N/A"}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {movie.genres?.map((genre) => (
                            <span
                                key={genre}
                                className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-400"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>

                    <div
                        className="prose prose-invert mt-6 max-w-none text-white"
                        dangerouslySetInnerHTML={{
                            __html:
                                movie.summary ||
                                "<p>No summary available.</p>",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}