<!DOCTYPE html>
<html lang="en">

<head>
    <title>Riwayat Penggunaan Barang PDF</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        table {
            font-family: arial, sans-serif;
            table-layout: fixed;
            width: 100%;
            border: 10px
        }

        td,
        th {
            text-align: left;
            font-size: 12px
        }

    </style>
</head>

<body>
    <h2 class="text-center">Daftar Riwayat Pengguna Barang {{ $history[0]->barang->nama_barang }}</h2>
    <h4 class="text-left">
        @if ($tanggal_awal)
            Pada Tanggal {{ $tanggal_awal }}
        @endif
        @if ($tanggal_akhir)
            Hingga {{ $tanggal_akhir }}
        @endif
    </h4>
    <table class='table table-bordered '>
        <thead class="thead-dark">
            <tr>
                <th scope="col">Nama Pengguna</th>
                <th scope="col">Tanggal Awal Penggunaan</th>
                <th scope="col">Tanggal Akhir Penggunaan</th>
                <th scope="col">Keterangan</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($history as $h)
                <tr>
                    <td>{{ $h->pengguna->name }}</td>
                    <td>{{ $h->tanggal_awal_penggunaan }}</td>
                    <td>{{ $h->tanggal_akhir_penggunaan }}</td>
                    <td>{{ $h->keterangan }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>

</html>
