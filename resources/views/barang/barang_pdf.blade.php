<!DOCTYPE html>
<html lang="en">

<head>
    <title>Barang PDF</title>
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
    <h1 class="text-center">Daftar Barang</h1>
    <table class='table table-bordered '>
        <thead class="thead-dark">
            <tr>
                <th scope="col">Nama Barang</th>
                <th scope="col">Jenis Barang</th>
                <th scope="col">Detail Barang</th>
                <th scope="col">Kategori</th>
                <th scope="col">Fungsi</th>
                <th scope="col">Harga</th>
                <th scope="col">Lokasi</th>
                <th scope="col">Pengguna</th>
                <th scope="col">Jumlah Barang</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($barang as $b)
                <tr>
                    <td>{{ $b->nama_barang }}</td>
                    <td>{{ $b->jenis->jenis_barang }}</td>
                    <td>{{ $b->detail_barang }}</td>
                    <td>{{ $b->kategori->nama_kategori }}</td>
                    <td>{{ $b->fungsi }}</td>
                    <td>@currency($b->harga_barang)</td>
                    <td>{{ $b->lokasi->lokasi }}</td>
                    <td>{{ $b->pengguna->name }}</td>
                    <td>{{ $b->jumlah_barang}}</td>
                </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr>
                {{-- harga_barang sum --}}
                <th scope="col">Total Harga</th>
                <th scope="col" colspan="8">@currency($barang->sum('harga_barang'))</th>
            </tr>
        </tfoot>
    </table>
</body>

</html>
