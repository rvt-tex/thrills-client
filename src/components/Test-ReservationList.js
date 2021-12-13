import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReservations } from "../actions/reservationsActions";

export default function ReservationList() {
    const reservations = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReservations())
    }, [])
        return (
            <div>
                <h2>All Reservations</h2>

                <ul>
                    {reservations.map(reservation => 
                        <li key={reservation.id}>{reservation.desired_date}</li>
                    )};
                </ul>
            </div>
        ) 
    }