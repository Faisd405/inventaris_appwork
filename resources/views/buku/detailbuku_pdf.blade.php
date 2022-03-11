<html>

<head>
    <title>Detail Buku</title>
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
            <div id="inner-div">
                {!! DNS2D::getBarcodeHTML("http://inventaris.4visionmedia.net/buku/detail/$buku->id", 'QRCODE', 4, 4) !!}
                <br>
                <div>02 {{sprintf("%02d", $buku->jenis_id)}} {{sprintf("%03d", $buku->id)}}</div>
            </div>
        </div>


        <div class="card-header py-3">
            <h1>Detail Buku {{ $buku->judul }}</h1>
        </div>
        <div class="card-body">
            <br>
            <img src="{{ public_path('/gambarBuku/' . $buku->image) }}" class="img-thumbnail rounded mx-auto d-block"
                style="width: 180px">
            <table>
                <tbody>
                    <tr>
                        <th>
                            <h3>Judul Buku</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $buku->judul }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Penulis</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $buku->penulis }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Penerbit</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $buku->penerbit }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Tanggal Terbit</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $buku->tanggal }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Kondisi</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $buku->kondisi }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Jumlah</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $buku->jumlah }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Jenis</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $buku->jenis->jenis_buku }}</h3>
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
                            <h3>{{ $buku->pengguna->name }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Lokasi</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>{{ $buku->lokasi->lokasi }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Harga</h3>
                        </th>
                        <td>
                            <h3>:</h3>
                        </td>
                        <td>
                            <h3>@currency($buku->harga)</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
