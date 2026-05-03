import react from 'react'
import DashboardLayout from "../Layouts/DashboardLayout";
import { Link } from 'react-router-dom';

export default function Staff()
{    return(
        <DashboardLayout>
            <div>
                <h2>Staff</h2>
                <p>This is the Staff page.</p>
            </div>
        </DashboardLayout>
    );
}