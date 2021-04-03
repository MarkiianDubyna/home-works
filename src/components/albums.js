export default function AlbumList (props) {
    return (
     <>
         {props.list.map(album => (
             <div key={album.id}>
                 <h3>{album.title}</h3>
             </div>
         ))}
     </>
    )
}