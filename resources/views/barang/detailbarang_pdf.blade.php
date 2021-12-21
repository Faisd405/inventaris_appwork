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


            <h2>Nama Barang : {{ $barang->nama_barang }}</h2>
            <h2>Detail Barang : {{ $barang->detail_barang }}</h2>
            <h2>Harga Barang : {{ $barang->harga_barang }}</h2>
            <h2>Kategori : {{ $barang->kategori->nama_kategori }}</h2>
            <h2>Fungsi : {{ $barang->fungsi }}</h2>
            <h2>Lokasi : {{ $barang->lokasi->lokasi }}</h2>
            <h2>Jenis : {{ $barang->jenis->jenis_barang }}</h2>
            <h2>Pemakai : {{ $barang->user->name }}</h2>
            <h2>Aset Tahun : {{ $barang->year }}</h2>
        </div>
    </div>
</body>

</html>
