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

        td,
        th {
            vertical-align: baseline;
        }

        h3 {
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
                        <th>
                            <h3>Nama Barang</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $barang->nama_barang }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Detail Barang</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $barang->detail_barang }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Harga Barang</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>@currency($barang->harga_barang)</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Kategori Barang</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $barang->kategori->nama_kategori }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Fungsi Barang</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $barang->fungsi }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Lokasi Barang</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $barang->lokasi->lokasi }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Pengguna</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $barang->pengguna->name }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Tahun</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $barang->year }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Jumlah Barang</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $barang->jumlah_barang }}</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
