<!DOCTYPE html>
<html lang="en">

<head>
    <title>Surat Komitmen Barang- {{ $pengguna->name }}</title>
    <style>
        @page {
            margin-left: 2.15cm;
            margin-right: 2.29cm;
        }

        div.header {
            font-family: "Calibri, sans-serif";
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        div.subheader {
            font-family: "Calibri, sans-serif";
            text-align: center;
            font-size: 15px;
        }


        div.sentence1 {
            font-family: "Calibri, sans-serif";
            text-align: justify;
            font-size: 15px;
            margin-top: 20px;
            margin-left: 5px;
            margin-bottom: 25px;
        }

        table.biodata {
            font-family: "Calibri, sans-serif";
            text-align: justify;
            font-size: 15px;
            margin-top: 3px;
            margin-left: 60px;
        }

        table.biodata tr td.biohead {
            padding-right: 40px;
        }

        div.sentence2 {
            font-family: "Calibri, sans-serif";
            text-align: justify;
            font-size: 15px;
            margin-top: 20px;
            margin-left: 5px;
            margin-bottom: 25px;
        }

        div.tableBarang {
            font-family: "Calibri, sans-serif";
            text-align: justify;
            font-size: 14px;
            border-style: solid;
            border-width: 1px;
            width: 640px min-height: 200px;
        }

        ol li.sentence3 {
            margin-top: 2px;
        }

        table.tandatangan {
            table-layout: fixed;
            width: 100%:

        }

        hr {
            border: 0.5px;
            border-style: solid;
        }

    </style>
</head>

<body>
    <div class="header">SURAT KOMITMEN PENGGUNAAN BARANG INVENTARIS KANTOR</div>
    <div class="header">FOUR VISION MEDIA</div>
    <div class="subheader">{{$kode_lampiran}}</div>
    <hr>
    <div class="sentence1">
        Yang bertanda tangan dibawah ini :
    </div>
    <table class="biodata">
        <tbody>
            <tr>
                <td class="biohead">
                    Nama
                </td>
                <td>:</td>
                <td>
                    {{ $pengguna->name }}
                </td>
            </tr>
            <tr>
                <td class="biohead">
                    No KTP
                </td>
                <td>:</td>
                <td>
                    {{ $pengguna->ktp }}
                </td>
            </tr>
            <tr>
                <td class="biohead">
                    Jabatan
                </td>
                <td>:</td>
                <td>
                    {{ $pengguna->jabatan }}
                </td>
            </tr>
        </tbody>
    </table>
    <div class="sentence2">
        Dalam hal ini bertindak sebagai karyawan CV Four Vision Media, mendapatkan kepercayaan
        untuk menggunakan barang inventaris dari perusahaan, dengan spesifikasi barang
        inventaris sebagai berikut :
    </div>

    <div class="tableBarang" style="min-height: 100px;">
        <table>
            @forelse ($barang as $item)
                <tr>
                    <td><b>{{ $item->jumlah_barang }} {{ $item->nama_barang }}</b></td>
                </tr>
            @empty
                <tr>
                    <td>Tidak ada barang inventaris</td>
                </tr>
            @endforelse
        </table>
    </div>

    <div class="sentence1">
        Dengan ini berkomitmen untuk melakukan kewajiban atas barang tersebut :
        <ol>
            <li class="sentence3">Memastikan barang dipergunakan sesuai fungsi nya dan dipergunakan untuk
                kepentingan pekerjaan dan pendukung kegiatan perusahaan.</li>
            <li class="sentence3">Memastikan barang dirawat sebaik mungkin, sehingga tidak terjadi kerusakan yang
                timbul akibat kelalaian dan kesalahan penggunaan.</li>
            <li class="sentence3">Barang harus dikembalikan jika sudah tidak bekerja di perusahaan atau karyawan
                sudah tidak memerlukan kembali barang tersebut.</li>
            <li class="sentence3">Perusahaan berhak mengambil barang kapanpun dan dalam kondisi apapun jika
                diperlukan.</li>
            <li class="sentence3">Kerusakan yang timbul dikaernakan kelalaian dan kesengajaan maka karyawan
                diharuskan mengganti sesuai dengan kerusakan dan barang dapat dipergunakan
                sebagaimana mestinya.</li>
        </ol>
    </div>
    <div class="sentence1">Demikian surat komitmen ini saya buat, untuk dipergunakan sebagai mana mestinya.</div>
    <div>
        <table class="tandatangan">
            <tr>
                <td>
                    <div class="sentence1" style="text-align: center; padding-right:100px">
                        PIHAK KARYAWAN
                    </div>
                </td>
                <td>
                    <div class="sentence1" style="text-align: center; padding-left:80px">
                        DIREKTUR PERUSAHAAN
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="sentence1" style="text-align: center; padding-right:100px; padding-top:30px">
                        ({{ $pengguna->name }})
                    </div>
                </td>
                <td>
                    <div class="sentence1" style="text-align: center; padding-left:80px; padding-top:30px">
                        (MUHAMAD IHSAN FIRDAUS)
                    </div>
                </td>
            </tr>
        </table>
    </div>

</body>

</html>
