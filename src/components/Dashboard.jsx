import BookingSummary from "./BookingSummary"
import RevenueStats from "./RevenueStats"
import './Dashboard.css'
function Dashboard() {
    return (
        <h2 className="Dashboard">
<BookingSummary />
 <RevenueStats />
</h2>
    )
}

export default Dashboard
