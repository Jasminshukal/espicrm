<div class="sidebar-wrapper sidebar-theme">

    <nav id="compactSidebar">
        <ul class="navbar-nav theme-brand flex-row">
            <li class="nav-item theme-logo">
                <a href="{{url('home')}}">
                    <img src="{{ asset('logo.svg') }}" class="navbar-logo" alt="logo">
                </a>
            </li>
        </ul>
        <ul class="menu-categories">
            @include('layouts._menu')
        </ul>
    </nav>

    <div id="compact_submenuSidebar" class="submenu-sidebar">

        <div class="submenu show" id="more">
            <ul class="submenu-list" data-parent-element="#more">
                @can(["view-application_status"])
                <li>
                    <a href="{{ route('ApplicationStatus.index') }}">Application Status </a>
                </li>
                @endcan
                @can(["view-assets"])
                <li>
                    <a href="{{ route('Asset.index') }}"> Assets </a>
                </li>
                @endcan
            </ul>
        </div>
        <div class="submenu show" id="setting">
            <ul class="submenu-list" data-parent-element="#more">
                @can(["view-user"])
                    <li>
                        <a href="{{ route('users.index') }}"> User </a>
                    </li>
                @endcan
                @can(["view-role"])
                    <li>
                        <a href="{{ route('roles.index') }}"> Roles </a>
                    </li>
                @endcan
                @can(["view-university"])
                    <li>
                        <a href="{{ route('University.index') }}"> University </a>
                    </li>
                @endcan
                @can(["view-course"])
                    <li>
                        <a href="{{ route('Course.index') }}"> Course </a>
                    </li>
                @endcan
            </ul>
        </div>
        <div class="submenu" id="dashboard">
            <ul class="submenu-list" data-parent-element="#dashboard">
                <li class="active">
                    <a href="{{ url('home') }}"> Analytics </a>
                </li>
                <li>
                    <a href="{{ url('home') }}"> Sales </a>
                </li>
            </ul>
        </div>

    </div>

</div>
