const DownloadButton = (DownloadEmotes) => {

    return (
        <button onClick={() => DownloadEmotes.DownloadEmotes()} className="flex-shrink-0 bg-violet-500 hover:bg-violet-600 border-violet-500 hover:border-violet-600 text-sm border-4 text-white py-1 px-2 rounded" type="button">
            Download
        </button>
    )
}

export default DownloadButton;