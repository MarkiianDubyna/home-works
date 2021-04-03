export default function PhotoList (props) {
    return (
        <>
            {props.list.map(photo => (
                <div key={photo.id}>
                    <h3>{photo.title}</h3>
                    <p>{photo.thumbnailUrl}</p>
                </div>
            ))}
        </>
    )
}