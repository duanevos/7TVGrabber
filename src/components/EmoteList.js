const EmoteList = (EmoteArray) => {
    return (
        <table className="mb-5">
            <thead>
                <tr>
                    <th className="header4 text-stone-100">Emote list</th>
                </tr>
            </thead>
            <tbody>
                {EmoteArray.emoteArray.map((emote) => (
                    <tr>
                        <td>
                            <img className="w-10 h-auto" src={emote} alt="emote"/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default EmoteList;