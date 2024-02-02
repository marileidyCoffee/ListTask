import '../styles/List.css'
import edit from '../img/editar.png'
const List =()=>{
    return(
        <div className="list">
            <ul>
                <li><button className='btn btn-rm'>X</button> <button className='btn btn-edit'><img className="list-icon" src={edit} /></button> Tarea </li>
                <li><button className='btn btn-rm'>X</button> <button className='btn btn-edit'><img className="list-icon" src={edit} /></button> la la la </li>
                <li><button className='btn btn-rm'>X</button> <button className='btn btn-edit'><img className="list-icon" src={edit} /></button> Tarea </li>
            </ul>
        </div>
    )
}

export default List