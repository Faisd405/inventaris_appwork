<html>

<head>
    <title>Detail Barang</title>
    <style>
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
    <div class="card shadow mb-4">
        <div id="outer-div">
            <div id="inner-div">{!! DNS2D::getBarcodeHTML("$barang->kode_barang", 'QRCODE', 4, 4) !!}</div>
        </div>


        <div class="card-header py-3">
            <h1>Detail Barang {{ $barang->nama_barang }}</h1>
        </div>
        <div class="card-body">
            <br>
            <img src="{{ public_path('/images/' . $barang->image) }}" class="img-thumbnail rounded mx-auto d-block"
                width="150px">
            <table>
                <tbody>
                    <tr>
                        <th><h2>Nama Barang</h2></th>
                        <td><h2>:</h2></td>
                        <td><h2>{{ $barang->nama_barang }}</h2></td>
                    </tr>
                    <tr>
                        <th><h2>Detail Barang</h2></th>
                        <td><h2>:</h2></td>
                        <td><h2>{{ $barang->detail_barang }}</h2></td>
                    </tr>
                    <tr>
                        <th><h2>Harga Barang</h2></th>
                        <td><h2>:</h2></td>
                        <td><h2>{{ $barang->harga_barang }}</h2></td>
                    </tr>
                    <tr>
                        <th><h2>Kategori Barang</h2></th>
                        <td><h2>:</h2></td>
                        <td><h2>{{ $barang->kategori->nama_kategori }}</h2></td>
                    </tr>
                    <tr>
                        <th><h2>Fungsi Barang</h2></th>
                        <td><h2>:</h2></td>
                        <td><h2>{{ $barang->fungsi }}</h2></td>
                    </tr>
                    <tr>
                        <th><h2>Lokasi Barang</h2></th>
                        <td><h2>:</h2></td>
                        <td><h2>{{ $barang->lokasi->lokasi }}</h2></td>
                    </tr>
                    <tr>
                        <th><h2>Jenis Barang</h2></th>
                        <td><h2>:</h2></td>
                        <td><h2>{{ $barang->jenis->jenis_barang }}</h2></td>
                    </tr>
                    <tr>
                        <th><h2>Pengguna</h2></th>
                        <td><h2>:</h2></td>
                        <td><h2>{{ $barang->user->name }}</h2></td>
                    </tr>
                    <tr>
                        <th><h2>Tahun</h2></th>
                        <td><h2>:</h2></td>
                        <td><h2>{{ $barang->year }}</h2></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
