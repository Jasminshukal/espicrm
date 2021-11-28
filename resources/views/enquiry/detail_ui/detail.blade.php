<div class="p-2">
    <h1>Detail</h1>
    <div class="table-responsive">
        <table class="table table-bordered mb-4">
            <tbody>
                <tr>
                    <th> Marital Status </th>
                    <td>{{ $enquiry->Details->data->marital_status }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ $enquiry->email }}</td>
                </tr>
                <tr>
                    <th>First Language</th>
                    <td>{{ $enquiry->first_language }}</td>
                </tr>
                <tr>
                    <th>Counsellor</th>
                    <td>{{ $enquiry->Counsellor->name }} </td>
                </tr>
                <tr>
                    <th>DOB</th>
                    <td>{{ $enquiry->dob }} </td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td><span class="badge badge-primary" style="text-transform: capitalize;">{{ $enquiry->gender }}</span> </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>