import { useState } from 'react';

const AddEmoteForm = ({AddToEmoteArray}) => {

    const [url, setUrl] = useState("");
    const [format, setFormat] = useState("PNG");

    const oldPrefix = "https://7tv.app/emotes/";
    const newPrefix = "https://cdn.7tv.app/emote/";
    const suffix = "/4x." + format.toLowerCase();

    function AddButtonPressed() {
        if (url.startsWith(oldPrefix)) {
            AddToEmoteArray(
                url.replace(oldPrefix, newPrefix) + suffix
            );
            return setUrl("");
        }
        alert("Invalid URL");
    };

    return (
        <>
            <div className="flex items-center py-2">
                <input onChange={(e) => setUrl(e.target.value)} value={url} className="bg-stone-700 rounded hover:bg-stone-600 text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="url" placeholder="https://7tv.app/emotes/..." aria-label="URL" id="emoteURL" />

                <select onChange={(e) => setFormat(e.target.value)} className="bg-violet-500 text-white text-sm rounded focus:ring-white p-2">
                    <option value="PNG">PNG</option>
                    <option value="GIF">GIF</option>
                </select>

                <button onClick={AddButtonPressed} className="ml-2 flex-shrink-0 bg-violet-500 hover:bg-violet-600 border-violet-500 hover:border-violet-600 text-sm border-4 text-white py-1 px-2 rounded">
                    Add
                </button>
            </div>
        </>
    )
}

export default AddEmoteForm;