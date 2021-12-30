<!DOCTYPE html>
<html lang="en">
<head>
    <title>Barang PDF</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
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
        #outer-div {
            width: 100%;
            text-align: right;
        }

        #inner-div {
            display: inline-block;
            margin: 0 auto;
            padding: 3px;
        }
        h2 {
            text-align: left;
        }

    </style>
</head>
<body>
<table class='table table-bordered'>
    <thead class="thead-dark">
        <tr>
            <th scope="col">Nama Barang</th>
            <th scope="col">Kategori</th>
            <th scope="col">Pengguna</th>
            <th scope="row">Lokasi</th>
            <th scope="col">QR</th>
        </tr>
    </thead>
    <tbody>
        @foreach($barang as $b)
        <tr>
            <td class="mb-3">{{$b->nama_barang}}</td>
            <td class="mb-3">{{$b->kategori->nama_kategori}}</td>
            <td class="mb-3">{{$b->pengguna->name}}</td>
            <td class="mb-3">{{$b->lokasi->lokasi}}</td>
            <td class="mb-3">{!! DNS2D::getBarcodeHTML("$b->kode_barang", 'QRCODE', 4, 4) !!}</td>
        </tr>
        @endforeach
    </tbody>
</table>
</body>
</html>
