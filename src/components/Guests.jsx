import GuestHistory from "./GuestHistory"
import GuestProfile from "./GuestProfile"
import './Guests.css'

function Guests() {
    return (
        <div className="divGuests">
            <p>Гості</p>
            <GuestProfile/>
            <GuestHistory/>
        </div>
    )
}

export default Guests
