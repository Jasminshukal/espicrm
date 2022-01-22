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
                </tr>
            </thead>
            <tbody>
                @forelse ($enquiry->transaction as $transaction)
                    @if ($transaction->user->name==\Auth::user()->name OR \Auth::user()->roles->first()->name=="super-admin")
                        <tr>
                            <td>
                                <span class="badge badge-primary"> {{ $transaction->title }} </span>
                            </td>
                            <td>{{ $transaction->price }}</td>
                            <td>{{ $transaction->payment_mode }}</td>
                            <td>{{ $transaction->user->name }}</td>
                            <td>{{ $transaction->created_at->format('d-m-Y') }}</td>
                            <td>{{ $transaction->note }}</td>
                        </tr>
                    @endif
                @empty

                @endforelse
            </tbody>
        </table>
    </div>

</div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form method="POST" action="{{ route('FollowUp.store',$enquiry->id) }}" enctype="multipart/form-data">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Follow Up</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div class="modal-body">


                        @csrf
                        <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="date" class="mandatory">Next Follow-Ups Date</label>
                                        <input type="date" name="date" id="date" value="{{ old('date') }}"
                                            class="@error('date') is-invalid @enderror form-control" required>
                                    </div>
                                    @error('date')
                                        <div class="alert alert-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="status" class="mandatory">Status</label>
                                        {{-- <input type="status" name="status" id="status" value="{{ old('status') }}"
                                            class="@error('status') is-invalid @enderror form-control" required> --}}
                                            <select name="status" id="status" class="@error('status') is-invalid @enderror form-control" required>
                                                @foreach (config('espi.follow_up_status') as $key=>$item)
                                                    <option value="{{ $item }}">{{ $item }}</option>
                                                @endforeach
                                            </select>
                                    </div>
                                    @error('status')
                                        <div class="alert alert-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="note" class="mandatory">Note</label>
                                        <textarea name="note" id="note" class="form-control"></textarea>
                                    </div>
                                    @error('note')
                                        <div class="alert alert-danger">{{ $message }}</div>
                                    @enderror
                                </div>

                        </div>
                </div>
                <div class="modal-footer">
                    <button class="btn" style="background-color:var(--danger); color:#fff;" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </form>
</div>
