import AddEmoteForm from "./LandingPage/AddEmoteForm";
import EmoteList from "./LandingPage/EmoteList";
import DownloadButton from "./LandingPage/DownloadButton";
import LandingPageHeader from "./LandingPage/LandingPageHeader";
import Disclaimer from "./LandingPage/Disclaimer";
import JSZip from "jszip";
import { saveAs } from 'file-saver';

import { useState } from 'react';

function LandingPage() {

    const [emoteArray, setEmoteArray] = useState([]);

    const AddToEmoteArray = (url) => {
        if (emoteArray.length >= 20) {
            return alert("You can only add 20 emotes at a time");
        }
        setEmoteArray(emotes => [...emotes, url]);
    }

    const DownloadEmotes = () => {
        if (emoteArray.length === 0) {
            return alert("You need to add at least one emote to download");
        }

        const zip = new JSZip();
        emoteArray.forEach((emote, index) => {
            zip.file((index + 1) + emote.substring(emote.lastIndexOf(".")), 
                fetch(emote)
                    .then(res => res.blob())
                );
            }
        );

        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                saveAs(content, "emotes_" + Date.now() + ".zip");
            }
        );

        setEmoteArray([]);
    }

    return (
        <div className="App">
            <div className="flex items-center justify-center h-screen">
                <div className="p-6 bg-stone-800 rounded-lg border border-stone-700 shadow-md">
                    <LandingPageHeader />
                    <AddEmoteForm AddToEmoteArray={AddToEmoteArray} />
                    <EmoteList emoteArray={emoteArray} />
                    <DownloadButton DownloadEmotes={DownloadEmotes} />
                    <Disclaimer />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;