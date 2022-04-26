<div class="col-md-12 text-center mt-2 mb-3">
    <div class="table-responsive">
        <table class="table table-bordered mb-4">
            <thead>
                <tr>
                    <th>title</th>
                    <th>Price</th>
                    <th>payment mode</th>
                    <th>receiver </th>
                    <th>Date</th>
                    <th>note</th>
                    <th>Receipt</th>

                </tr>
            </thead>
            <tbody>
                @forelse ($enquiry->transaction as $transaction)
                    {{-- @if ($transaction->user->name == \Auth::user()->name or \Auth::user()->roles->first()->name == 'super-admin') --}}
                   {{-- <?php  print_r($transaction->all()); ?> --}}
                    <tr>
                        <td>
                            <span class="badge badge-primary"> {{ $transaction->title }} </span>
                        </td>
                        <td>{{ $transaction->price }}</td>
                        <td>{{ $transaction->payment_mode }}</td>
                        <td>{{ $transaction->user->name }}</td>
                        <td>{{ $transaction->created_at->format('d-m-Y') }}</td>
                        <td>{{ $transaction->note }}</td>
                        {{-- <a href="'.route('Enquires.edit',$row->id).'" style="background: #9b59b6; color: #fff;" class="assessment" title="Edit Enquiry"> --}}

                        <td><a href="{{ route('Transaction.receipt', $transaction->id) }}"
                                {{-- style="background: #9b59b6; color: #fff;" --}}
                                class="assessment btn rounded-circle mb-2 mr-1 bs-tooltip" title="RECEIPT"><svg
                                    xmlns="http://www.w3.org/2000/svg" aria-label="PDF" role="img"
                                    viewBox="0 0 512 512">
                                    <rect width="512" height="512" rx="15%" fill="#c80a0a" />
                                    <path fill="#fff"
                                        d="M413 302c-9-10-29-15-56-15-16 0-33 2-53 5a252 252 0 0 1-52-69c10-30 17-59 17-81 0-17-6-44-30-44-7 0-13 4-17 10-10 18-6 58 13 100a898 898 0 0 1-50 117c-53 22-88 46-91 65-2 9 4 24 25 24 31 0 65-45 91-91a626 626 0 0 1 92-24c38 33 71 38 87 38 32 0 35-23 24-35zM227 111c8-12 26-8 26 16 0 16-5 42-15 72-18-42-18-75-11-88zM100 391c3-16 33-38 80-57-26 44-52 72-68 72-10 0-13-9-12-15zm197-98a574 574 0 0 0-83 22 453 453 0 0 0 36-84 327 327 0 0 0 47 62zm13 4c32-5 59-4 71-2 29 6 19 41-13 33-23-5-42-18-58-31z" />
                                </svg></a>
                        </td>
                    </tr>
                    {{-- @endif --}}
                @empty
                @endforelse
            </tbody>
        </table>
    </div>

</div>
