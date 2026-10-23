import RoomDetails from "./RoomDetails"
import RoomList from "./RoomList"
import './Rooms.css'
function Rooms() {
    return (
        <div className="divRooms">
            <h2>Номери</h2>
            <RoomList />
            <RoomDetails />
        </div>
    )
}

export default Rooms
